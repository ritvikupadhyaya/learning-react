import React, { Component } from "react";
import '../styles/App.css';
import Background from './Background.js';

class App extends Component {
    render() {
      const stylesObj = {
        height: '100%',
        width: '100%'
      };
        return (
          <div style={stylesObj}>
            <Background Color="BLUE">
              <h1>My React App</h1>
            </Background>
          </div>
        );
    }
}

export default App;
