import React from 'react'

export default function SearchBar(props) {

  return (
    <div>
      <div className="search-title">
        <h3>Search By Breed!</h3>
      </div>
      <form className="search-form">
        <label htmlFor="breed">Breed Name:</label>
        <input
          onChange={props.handleInputChange}
          value={props.currentBreed}
          type="text"
          name="currentBreed"
          list="breeds"
          className="form-control"
          placeholder="Type in a dog breed to begin"
          id="breed"
        />
        <datalist id="breeds">
          {/* <option value="malamute"></option> */}
          {props.breeds.map(breed => (<option key={breed} value={breed}></option>) )}
        </datalist>
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </form>
    </div>
  )
}
