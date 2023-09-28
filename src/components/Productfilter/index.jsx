import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function Filter() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Filter
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Clothing</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Jewelry</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Electronics</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Filter;
