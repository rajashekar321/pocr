import React from 'react'
import "./Dropdown.css"
import 'bootstrap/dist/css/bootstrap.css'
import styled from 'styled-components';
const Dropdown = () => {
    return (
        <>
        <div className="filter__box">
          <div className="no_of_items">
            <span id="countItem"></span>
            <span>Items</span>
          </div>
         
          <div className="sort_by">
            <label htmlFor="short">Sort By</label>
            <select >
              <option value="name">Name</option>
              <option value="size">Size</option>
              <option value="ascending">Ascending</option>
              <option value="descending">Descending</option>
            </select>
          </div>
          
          <div className="show">
            <label htmlFor="showNo">Show</label>
            <select >
              <option value="6">6</option>
              <option value="9">9</option>
              <option value="12">12</option>
              <option value="15">15</option>
            </select>
          </div>
          <div className="view__filter" selected>
            <i className="fas fa-th"></i>
          </div>
          <div className="hamBurger">
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </>
    )
}
export default Dropdown;

