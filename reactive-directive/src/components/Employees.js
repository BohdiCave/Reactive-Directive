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
        <h1 className="center">Employee Information</h1>
        <nav>
          &nbsp;
        </nav>
      </header>
      <main>
      <table>
        <thead>
        <tr className="center">
          <th>Photo</th>
          <th className="narrow">Title</th>
          <th className="bg-fill">First Name</th>
          <th>Last Name</th>
          <th className="bg-fill narrow">Yrs <br/> Empl.</th>
          <th className="narrow">Age</th>
          <th className="bg-fill narrow">Gender</th>
          <th className="narrow">Time Zone,<br/>GMT+/-</th>
          <th className="bg-fill indent">Address</th>
          <th>Phone</th>
          <th className="bg-fill">Email</th>

        </tr>
        </thead>
        <tbody>
          {this.state.employees
            .map(employee => { 
              return(
              <tr className="center" key={employee.login.uuid}>
                <td className="wide"><img src={employee.picture.medium} alt="Employee"/></td>
                <td className="center narrow">{employee.name.title} <br/><br/><br/></td>
                <td className="bg-fill">{employee.name.first} <br/><br/><br/></td>
                <td>{employee.name.last} <br/><br/><br/></td>
                <td className="bg-fill center narrow">{employee.registered.age} <br/><br/><br/></td>
                <td className="narrow">{employee.dob.age} <br/><br/><br/></td>
                <td className="bg-fill center narrow">{employee.gender[0].toUpperCase()} <br/><br/><br/></td>
                <td className="center">{employee.location.timezone.offset} <br/><br/><br/></td>
                <td className="bg-fill indent">{employee.location.street.number} {employee.location.street.name} <br/> {employee.location.city}, {employee.location.state || null} <br/> {employee.location.country}, {employee.location.postcode}</td>
                <td>{employee.cell} <br/><br/><br/></td>
                <td className="bg-fill">{employee.email} <br/><br/><br/></td>

              </tr>
              )
            })
          }
        </tbody>
      </table>
      </main>
      <footer>
        &nbsp;
      </footer>
    </div>
    )
  }
}