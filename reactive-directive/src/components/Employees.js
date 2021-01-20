import React from "react";
import axios from "axios";

export default class Employees extends React.Component {
  state = {
    employees: []
  };

  componentDidMount() {
    axios
        .get('https://randomuser.me/api/?results=50&?password=special,upper,lower,number,8-15')
        .then(res => {
            this.setState({employees: res.data.results});    
        })
  }

  render() {
    return (
      <ul>
          {this.state.employees.map(employee => <li>{employee.name.last} {employee.name.first} </li>)}
      </ul>
    )
  }
}