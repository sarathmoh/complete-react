import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/context/UserContext";
class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("parent constructor");
  }
  componentDidMount() {
    console.log("Parent Did Mount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <UserClass name="sarath" lastname="mohan" />;
        <UserClass name="praseejan" lastname="pallilath" />;
      </div>
    );
  }
}

export default About;
