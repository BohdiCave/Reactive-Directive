import React from "react";

export default function Results({employees, sortResults}) {
    return (
      <table>
        <thead>
        <tr className="sm-screen empty"><td>.</td></tr>
        <tr className="center">
          <th className="sm-screen empty">.</th>
          <th className="bg-fill">Photo</th>
          <th className="narrow sm-screen">Title</th>
          <th className="bg-fill">First Name</th>
          <th>Last Name</th>
          <th className="bg-fill">Yrs <br/> Empl. <br/>
            <button className="sort">
              <svg xmlns="http://www.w3.org/2000/svg" class="svg-triangle">
                <polygon id="desc" onClick={sortResults} points="0,0 10,0 5,10"/> 
                <polygon id="asc" onClick={sortResults} points="15,10 25,10 20,0"/>
              </svg>
            </button>
          </th>
          <th className="sm-screen">Age</th>
          <th className="bg-fill narrow sm-screen">Gender</th>
          <th className="narrow sm-screen">Time Zone,<br/>GMT+/-</th>
          <th className="bg-fill sm-screen">Address</th>
          <th className="sm-screen">Phone</th>
          <th className="bg-fill narrow sm-screen">Email</th>
        </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => { 
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
    );
}