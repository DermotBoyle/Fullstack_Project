import React from "react";
import "./counter.css";
import { Button } from "reactstrap";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <>
        <div>
          <h1>A counter that increases each click</h1>
          <div className="buttons">
            <Button color="warning" onClick={this.handleClick}>
              {" "}
              +{" "}
            </Button>
            <span className="num">{this.state.count}</span>
          </div>
        </div>
      </>
    );
  }
}

export default Counter;
