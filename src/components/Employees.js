import React, {Component} from "react";
import Form from "./Form.js";
import Results from "./Results.js";
import axios from "axios";
import './employees.css';

export default class Employees extends Component {
  
  state = {
    firstName: "",
    lastName: "",
    results: [],
    employees: []
  };

  componentDidMount() {
    axios
        .get('https://randomuser.me/api/?results=50&?password=special,upper,lower,number,8-15')
        .then(res => {
            this.setState({results: res.data.results, employees: res.data.results});    
        })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
  };

  handleFormSubmit = (event, firstName) => {
      event.preventDefault();
      firstName = this.state.firstName;
      const newArr = this.state.employees.filter(employee => employee.name.first === firstName);
      this.setState({
        results: newArr
      });
  };

  render() {
    return (
    <div className="container">

      <header>
        <div className="header bg-dark">
          <h1 className="center text-white">Employee Information</h1>
          <Form 
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
        </div>     
        <div className="empty"></div>  
      </header>

      <main>
        <Results
          employees={this.state.results} 
        />
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