/*
<div id="parent">
    <div id="child">
        <h1>I am H1 tag</h1>
        <h1>I am H2 tag</h1>
    </div>
    <div id="child2">
        <h1>I am H1 tag</h1>
        <h1>I am H2 tag</h1>
    </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h1", {}, "I am H2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h1", {}, "I am H2 tag"),
  ]),
]);

console.log(parent)

const heading = React.createElement(
  "h1",
  { id: "heading",className:"hello" },
  "Hello Word from React"
);

console.log(heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
