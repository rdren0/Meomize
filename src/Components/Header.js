import React from 'react';

function Header() {
  return (
    <div className='header-container'>
        <h1 className='header-title'>FlashCards!</h1>
        <h4> Categories: </h4>
        <button className="filter-buttons">RETURNS</button> 
        <button className="filter-buttons">SYNTAX</button> 
        <button className="filter-buttons">USE CASE</button>
        <button className="filter-buttons">ALL</button>

    </div>
  )
}
export default Header;