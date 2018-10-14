import React, { Component } from "react";
import style from './../styles/App.css';
import Background from './Background.js';

class App extends Component {
    render() {
      const fullScreenSize = {
        height: '100vh'
      }
        return (
          <div className='fullScreen'>
            <Background Color="#020005">
              <div className="titleClass">
                  <h1>Title Changed</h1>
              </div>
            </Background>
          </div>
        );
    }
}

export default App;
