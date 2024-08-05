import React from "react";
import { json } from "react-router-dom";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props, "child constructor");
    this.state = {
      git: {
        login: "sarath",
      },
    };
  }
  async componentDidMount() {
    // console.log(this.props, "Child did mount");
    const result = await fetch(" https://api.github.com/users/sarathmoh");
    const data = await result.json();
    console.log(data);
    this.setState({
      git: data,
    });
  }
  render() {
    // console.log(this.props, "child render");
    const { login } = this.state.git;
    // const { count1 } = this.state;
    return (
      <div>
        <h1> 
          {/* {name} {count1} */}
          {login}
        </h1>
        {/* <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          Increase count
        </button> */}
        {/* <h2>{lastname}</h2> */}
      </div>
    );
  }
}

export default UserClass;
