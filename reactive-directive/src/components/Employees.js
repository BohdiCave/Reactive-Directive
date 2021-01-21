import React from "react";
import axios from "axios";
import './employees.css';

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
    <div className="container">

      <header>
        <div className="header bg-dark">
          <div className="head">
            <span className="text-white">Sort by:</span>
            <input className="head" type="text" placeholder="Enter the category" />
          </div>
          <h1 className="center text-white">Employee Information</h1>
          <div className="head">
            <span className="text-white">Filter by:</span>
            <input className="head" type="text" placeholder="Enter the criterion" />
          </div>
        </div>     
        <div className="empty"></div>  
      </header>

      <main>
      <table>
        <thead>
        <tr className="sm-screen empty"><td>.</td></tr>
        <tr className="center">
          <th className="sm-screen empty">.</th>
          <th className="bg-fill">Photo</th>
          <th className="narrow sm-screen">Title</th>
          <th className="bg-fill">First Name</th>
          <th>Last Name</th>
          <th className="bg-fill">Yrs <br/> Empl.</th>
          <th className="sm-screen">Age</th>
          <th className="bg-fill narrow sm-screen">Gender</th>
          <th className="narrow sm-screen">Time Zone,<br/>GMT+/-</th>
          <th className="bg-fill sm-screen">Address</th>
          <th className="sm-screen">Phone</th>
          <th className="bg-fill narrow sm-screen">Email</th>
        </tr>
        </thead>
        <tbody>
          {this.state.employees
            .map((employee, index) => { 
              return(
              <tr className="center" id={"_"+(index+1)} key={employee.login.uuid}>
                <td className="sm-screen empty">.</td>
                <td className="bg-fill center"><img src={employee.picture.medium} alt="Employee"/></td>
                <td className="center narrow sm-screen">{employee.name.title} <br/><br/><br/></td>
                <td className="bg-fill">{employee.name.first} <br/><br/><br/></td>
                <td>{employee.name.last} <br/><br/><br/></td>
                <td className="bg-fill center">{employee.registered.age} <br/><br/><br/></td>
                <td className="sm-screen">{employee.dob.age} <br/><br/><br/></td>
                <td className="bg-fill center narrow sm-screen">{employee.gender[0].toUpperCase()} <br/><br/><br/></td>
                <td className="center sm-screen">{employee.location.timezone.offset} <br/><br/><br/></td>
                <td className="bg-fill indent sm-screen">{employee.location.street.number} {employee.location.street.name} <br/> {employee.location.city}, {employee.location.state || null} <br/> {employee.location.country}, {employee.location.postcode}</td>
                <td className="sm-screen">{employee.cell} <br/><br/><br/></td>
                <td className="bg-fill indent sm-screen">{employee.email} <br/><br/><br/></td>
              </tr>
              )
            })
          }
          <tr className="sm-screen empty"><td>.</td></tr>
        </tbody>
      </table>
      </main>

      <div className="empty"></div>

      <footer className="bg-dark">
        <div className="text-white center">
          &nbsp; <br/>
          Made with love &copy; <a href="https://bohdicave.github.io/"> BohdiCave</a> <br/>
          &nbsp;
        </div>
      </footer>

    </div>
    )
  }
}