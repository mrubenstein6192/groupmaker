import React, { Component } from 'react';
// import { removeHike, getSavedHikes, getUserProfile } from '../utils/API';
import { Link } from 'react-router-dom';
import Col from "../components/Col";
import Row from "../components/Row";

class MyClassrooms extends Component {
  state = {
    classroomList: [],
  }

  // handleSavedClassrooms = () => {
  //   this.setState({
  //     isShowing: 'Saved Classrooms'
  //   })
  // }

  // componentDidMount() {
  //   this.handleGetSavedClassrooms();
  // }

  // handleGetSavedClassrooms = () => {
  //   getUserProfile()
    
  //   .then(({ data: hikes}) => {
  //     this.setState({ hikes });
  //   })
  //   .catch(err => console.log(err));
  // };

  // handleRemoveHike = hikeId => {
  //   removeHike(hikeId)
  //   .then(getUserProfile)
  //   .then(({ data: {hikes} }) => {
  //     this.setState({hikes});
  //   })
  //   .catch(err => console.log(err));
  // };

  render() {

    return(
      <React.Fragment>
        <div className = "jumbotron jumbotron-fluid text-center"
         style = {{
          backgroundImage: 'url(http://www.teachhub.com/sites/default/files/field/image/classroom-management-effective-learning-environment.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '300px'
        }}><h1
        style = {{
          color: "white",
          fontWeight: "bold"
        }}>My Classrooms</h1>
        
          {/* <Link className="btn btn-lg btn-info text-center my-2" to="/addClassroom">Add a Classroom!</Link> */}
        </div>
       <div className = "container-fluid my-3">
         <Row>
           {!this.state.classroomList.length ? (
             <h2 className ="text-center">No Classrooms Listed</h2>
           ) : (
             this.state.classroomList.map(classroom => {
               return (
                 <Col key = {classroom._id} sm = {6} md = {3}>
                   <div className = "card"
                   style = {{
                    boxShadow: "2px 6px 10px 2px rgba(0,0,0,0.2)",
                    transition: "0.3s",
                    borderRadius: "5px"
                   }}>
                   <div className = "card-header text-center bg-dark text-light"><strong>{classroom.name}</strong></div>
                    <div className = "card-body">
                      
                      {/* <p><strong>Classroom: </strong> {classroom.location}</p>
                      <p><strong>Date Completed: </strong>{hike.date}</p>
                      <p><strong>Length: </strong>{hike.distance} miles</p>
                      <p><strong>Time to Complete: </strong>{hike.time}</p>
                      <p><strong>Difficulty: </strong>{hike.difficulty}</p>
                      <p><strong>Dogs seen: </strong>{hike.dogs}</p>
                      <p><strong>Overall Experience: </strong>{hike.experience}</p>
                      <button onClick={() => this.handleRemoveHike(hike._id)}
                      className = "btn btn-danger btn-sm my-2">Remove Hike From List Entirely</button> */}
                      {/* <Link className = "btn btn-success btn-sm my-2" to = "/addhike" onClick={() => this.handleRemoveHike(hike._id)}>Update This Hike From Scratch</Link> */}
                      
                   </div>
                   </div>
                 </Col>
               )
             })
           )}
         </Row>
         </div>
      </React.Fragment>
    )
  }
}


export default MyClassrooms;