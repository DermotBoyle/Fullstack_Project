import React from "react";
import "./particles.css";

const particlesOptions = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class Custom extends React.Component {
  render() {
    return <Custom className="particles" params={particlesOptions} />;
  }
}

export default Custom;
