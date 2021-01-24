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
        .get('https://randomuser.me/api/?results=50')
        .then(res => {
            this.setState({results: res.data.results, employees: res.data.results});    
        })
  }

  reloadResults = (event, empArr) => {
    event.preventDefault();
    empArr = this.state.employees;
    this.setState({ 
      results: empArr
    });  
  }

  sortResults = (event, newArr) => {
    event.preventDefault();
    if (event.target.id === "asc") {
      newArr = this.state.employees.sort((a, b) => {
        const first = a.registered.age;
        const second = b.registered.age;
        if (first < second) {
          return -1;
        }
        if (first > second) {
          return 1;
        }
        return 0;
      });  
    } else if (event.target.id === "desc") {
      newArr = this.state.employees.sort((a, b) => {
        const first = a.registered.age;
        const second = b.registered.age;
        if (first < second) {
          return 1;
        }
        if (first > second) {
          return -1;
        }
        return 0;
      });        
    }

    this.setState({
      results: newArr
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
  };

  handleFormSubmit = (event, firstName, lastName) => {
      event.preventDefault();
      firstName = this.state.firstName;
      lastName = this.state.lastName;
      if (firstName === "" && lastName === "") {
        alert("Please select either FIRST or LAST name to filter the results.");
      } else if (firstName === "") {
        const newArr = this.state.employees.filter(employee => employee.name.last === lastName);
        this.setState({
          results: newArr,
          lastName: ""
        });
      } else {
        const newArr = this.state.employees.filter(employee => employee.name.first === firstName);
        this.setState({
          results: newArr,
          firstName: ""
        });
      }
  };

  render() {
    return (
    <div className="container">

      <header>
        <div className="header bg-dark">
          <h2 id="title" className="text-white">Employee Information</h2>
          <Form 
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            reloadResults={this.reloadResults}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
        </div>     
        <div className="empty"></div>
      </header>

      <main>
        <Results
          employees={this.state.results} 
          sortResults={this.sortResults}
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