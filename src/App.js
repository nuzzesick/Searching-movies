import React, {Component, Fragment} from 'react';
import './App.css';
import Header from './components/Header.js'
import Main from './components/Main.js'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header/>
        <Main/>
      </Fragment>
    )
  }
}

export default App;
