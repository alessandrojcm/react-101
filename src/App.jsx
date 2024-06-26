import { useState, useEffect } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import "./index.css";

import ImperativeApi from "./examples/imperative-api.jsx";
import JsxApi from "./examples/jsx-api.jsx";
import RenderingLists from "./examples/rendering-lists.jsx";
import Interactivity from "./examples/interactivity.jsx";
export default function App(props) {
  const [tab, setTab] = useState("01");
  useEffect(() => {
    history.replaceState({}, "", "?" + new URLSearchParams({ tab }).toString());
  }, [tab]);
  return (
    <Tabs.Root
      className="TabsRoot"
      defaultValue="01"
      value={tab}
      onValueChange={setTab}
    >
      <Tabs.List className="TabsList">
        <Tabs.Trigger className="TabsTrigger" value="01">
          React Imperative API
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger" value="02">
          JSX API
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger" value="03">
          Rendering Lists
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger" value="04">
          Interactivity
        </Tabs.Trigger>
        <Tabs.Trigger className="TabsTrigger" value="05">
          Server Props
        </Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content className="TabsContent" value="01">
        <ImperativeApi />
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="02">
        <JsxApi />
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="03">
        <RenderingLists />
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="04">
        <Interactivity />
      </Tabs.Content>
      <Tabs.Content className="TabsContent" value="05">
        Props from the server: <code>{JSON.stringify(props)}</code>
      </Tabs.Content>
    </Tabs.Root>
  );
}
