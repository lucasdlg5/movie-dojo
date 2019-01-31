import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header.js';
 
class App extends Component {
 
  render() {
 
    return (
      <div className="App">
      <Header text="Movie Dojo do Lusca!"/>
        {/* <div className="App-header">
          <h2>Welcome to React</h2>
        </div> */}
        <p className="App-intro">
          Welcome to the 'Movie Mojo' React app!
        </p>
      </div>
    );
  }
}
 
export default App;