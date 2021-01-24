import React from "react";

export default function Form({ firstName, lastName, reloadResults, handleFormSubmit, handleInputChange }) {
    return (
        <form className="head">
            <button type="submit" className="reload" onClick={reloadResults}>Reload results</button>
            <span className="text-white">Filter by the </span>
            <input 
                value={firstName}
                onChange={handleInputChange} 
                name="firstName" 
                className="input"
                type="text" 
                placeholder="first name" 
            />
            <span className="text-white"> OR by the </span>
            <input
                value={lastName}
                onChange={handleInputChange}
                name="lastName"
                className="input"
                type="text"
                placeholder="last name"
            />
            <button type="submit" className="filter" onClick={handleFormSubmit}>Filter</button>
        </form>
    );
}
