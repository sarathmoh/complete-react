// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child1" },
//     React.createElement(
//       "section",
//       { id: "sec" },
//       [
//         React.createElement("h1", { id: "heading" }, "LATEST"),
//         React.createElement("h2", { id: "heading" }, "NEWEST"),
//       ]
//       //   sibling
//     )
//   )
// );
const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
      React.createElement(
        "section",
        { id: "section" },
        [React.createElement("h1", {}, "I am H1")],
        [React.createElement("h5", {}, "I am H5")]
      ),
      React.createElement(
        "section",
        { id: "section" },
        [React.createElement("h1", {}, "I am H1")],
        [React.createElement("h5", {}, "I am H5")]
      )
    )
  );
  
  // const heading = React.createElement("h1", {id:"heading"}, "welcome to react");
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
  