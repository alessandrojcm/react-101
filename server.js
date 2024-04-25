import fs from "node:fs/promises";
import express from "express";

const port = process.env.PORT || 5173;
const base = process.env.BASE || "/";

// Create http server
const app = express();

// Add Vite or respective production middlewares
let vite;
const { createServer } = await import("vite");
vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  base,
});
app.use(vite.middlewares);

// Serve HTML
app.use("*", async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, "");

    let template;
    let render;
    // Load the index html
    template = await fs.readFile("./index-ssr.html", "utf-8");
    // Do a bunch of transforms
    template = await vite.transformIndexHtml(url, template);
    // Load the entry server file and render
    render = (await vite.ssrLoadModule("/entry-server.jsx")).render;

    const rendered = await render(url);

    // Replace placeholder with the actual content
    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? "")
      .replace(`<!--app-html-->`, rendered.html ?? "");

    res.status(200).set({ "Content-Type": "text/html" }).send(html);
  } catch (e) {
    vite?.ssrFixStacktrace(e);
    console.log(e.stack);
    res.status(500).end(e.stack);
  }
});

// Start http server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
