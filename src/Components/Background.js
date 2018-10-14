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
          height:'100%'
        };
        return (
            <div id="Background" style={stylesObj}>
              {this.props.children}
            </div>
        );
    }
}

export default Background;
