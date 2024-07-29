import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import BodyPart from "./components/BodyPart";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <BodyPart />
    </div>
  );
};
// const heading = React.createElement("h1", {id:"heading"}, "welcome to react");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
