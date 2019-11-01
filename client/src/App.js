import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyNavbar from './components/Navbar';
import schoolPic from './school.jpg'
import MyClassrooms from "./pages/Classrooms";
import addClassroom from './pages/AddaClass'

class App extends React.Component {
  render() {
  return (
    <Router>
      <MyNavbar />
     
      <Switch>
        <Route exact path = '/classrooms' component = {MyClassrooms} />
        <Route exact path = '/addClassroom' component = {addClassroom} />
      </Switch>
       
     
    </Router>
  );
  }
}

export default App;
