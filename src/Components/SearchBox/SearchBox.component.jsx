import React from 'react';
import './SearchBox.component.css'

export const SearchBox = ({ placeholder, handleChange }) => (
    <input className='search' type='search' placeholder={placeholder} onChange={handleChange} />
);
