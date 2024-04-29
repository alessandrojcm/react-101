const defaultStyle = {
  color: "black",
  padding: "1rem",
  border: "1px solid black",
};

// We define the Button as JSX, now it can be used as an Element with tags
const Button = (props) => {
  // We define some default properties
  const { onClick = () => alert("hi"), style = {}, children = "Hi" } = props;
  return (
    //   we are merging the default styles with the styles that the user has passed as arguments
    <button style={{ ...defaultStyle, ...style }} onClick={onClick}>
      {children}
    </button>
  );
};

const JsxApi = () => {
  // Usage of the Button component using JSX
  // Can you make the code below into a reusable component? that takes the content inside the h1 tag as a prop?
  // Ie:
  // |-----------------|
  // |   Text as props |
  // |   <Button/>     |
  // |_________________|
  return (
    <div>
      <h1>I am a title</h1>
      <Button />
      <Button
        onClick={() => alert("Goodbye")}
        style={{
          color: "red",
          border: "1px solid red",
        }}
      >
        Goodbye
      </Button>
    </div>
  );
};

export default JsxApi;
