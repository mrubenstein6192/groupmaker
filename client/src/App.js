import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import schoolPic from './school.jpg'
import MyClassrooms from "./pages/Classrooms";

class App extends React.Component {
  render() {
  return (
    <Router>
      <MyNavbar />
     
      <Switch>
        <Route exact path = '/classrooms' component = {MyClassrooms} />
      </Switch>
       
     
    </Router>
  );
  }
}

export default App;
