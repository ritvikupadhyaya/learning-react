import React, { Component } from "react";
class Background extends Component {

    constructor(props) {
      super(props);
      this.state = {
        color: props.Color
      };
    }

    render() {
        const stylesObj = {
          background: this.state.color,
          height: '100vh'
        };
        return (
            <div id="Background" style={stylesObj}>
            </div>
        );
    }
}

export default Background;
