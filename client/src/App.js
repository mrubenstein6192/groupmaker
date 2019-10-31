import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import schoolPic from './school.jpg'

class App extends React.Component {
  render() {
  return (
    <Router>
      <MyNavbar />
      <img src={schoolPic} className="App-logo" alt="logo" />
       
     
    </Router>
  );
  }
}

export default App;
