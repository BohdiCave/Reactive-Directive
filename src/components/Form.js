import React from "react";

export default function Form({ firstName, lastName, handleFormSubmit, handleInputChange }) {
    return (
        <form className="head">
            <span className="text-white">Filter by first or last name:</span>
            <input 
                value={firstName}
                onChange={handleInputChange} 
                name="firstName" 
                className="head"
                type="text" 
                placeholder="Enter the first name" 
            />
            <input
                value={lastName}
                onChange={handleInputChange}
                name="lastName"
                className="head"
                type="text"
                placeholder="Enter the last name"
            />
            <button onClick={handleFormSubmit}>Filter</button>
        </form>
    );
}
