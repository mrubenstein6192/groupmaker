import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// import { getClassroomById, createClassroom } from '../utils/API';


class AddaHike extends Component {
 
  state = {
    name: '',
    students: '',
    period: '',
    schoolYear: '',
    classRoomSaved: false
  };

  componentDidMount() {
    // for class components use THIS.PROPS to get props 
    console.log(this.props);

  //   if (this.props.match.params.id) {
  //     // extract id of hike out of this.props.match.params.id
  //     const classroomId = this.props.match.params.id;

  //     getClassroomById(classroomId)
  //       .then(({ data: classroomData }) => {
  //         this.setState({
  //           id: classroomData._id,
  //           name: classroomData.name,
  //           students: classroomData.students,
  //           period: classroomData.period,
  //           schoolYear: classroomData.schoolYear
  //         });
  //       })
  //       .catch(err => console.log(err));
  //   }

  // }

  // // method for creating/POSTing a hike
  // handleCreateClassroom = classroomInfo => {
  //   createClassroom(classroomInfo)
  //     .then(() => {
       
  //       this.setState({
  //         classroomSaved: true
  //       });
  //     })
  //     .catch(err => console.log(err));
  // }

 
  }
  // handleInputChange
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {

    event.preventDefault();

  
      this.handleCreateHike({
        name: this.state.name,
        students: this.state.students,
        period: this.state.period,
        schoolYear: this.state.schoolYear
      });
    }
  

  render() {
    // if hike has been saved, let's redirect to the myhikes page
    if (this.state.classRoomSaved) {
      return <Redirect to="/classrooms" />
    }

    return (
      <React.Fragment>
        <div className = "jumbotron"
         style = {{
          backgroundImage: 'url()',
          backgroundPositionY: "30%",
          backgroundSize: 'cover',
         color: "black",
         textAlign: "center",
         fontSize: "50px",
         fontWeight: "bold",
         height: '300px'
        }}>
          Add a Classroom
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8"
            style = {{
              fontSize: "large",
              color: 'black'
            }}>
              <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Classroom Name</label>
                  <input 
                    type="text"
                    onChange={this.handleInputChange}
                    value={this.state.name}
                    name="name"
                    placeholder="Subject/Grade/Etc."
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="students">Number of Students</label>
                  <input
                    type = "number"
                    onChange={this.handleInputChange}
                    value={this.state.students}
                    name="students"
                    className="form-control"
                  /> 
                </div>
                <div className = "form-group">
                  <label htmlFor = "period">Period/Block</label>
                  <input 
                    type="number"
                    onChange={this.handleInputChange}
                    value={this.state.period}
                    name="date"
                    className="form-control"
                    />
                </div>
                <div className="form-group">
                  <label htmlFor="schoolYear">School Year</label>
                  <input 
                    type="number"
                    onChange={this.handleInputChange}
                    value={this.state.schoolYear}
                    name="schoolYear"
                    className="form-control"
                  />
                </div>
               
               
                <button type="submit" className="btn btn-lg btn-success">Save Classroom</button>
              </form>
            </div>
          </div>
        
        </div>

      </React.Fragment>
    )
  }
}

export default AddaHike;