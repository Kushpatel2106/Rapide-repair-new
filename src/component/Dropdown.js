import React, { useState } from 'react';
import './Dropdown.css';

const DropdownMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };

      return (
        <div className="dropdown">
          <li className='dropdown'><a onClick={toggleDropdown} className="dropdown-toggle" href='#'>
            More
          </a></li>
          {isOpen && (
            <div className="dropdown-menu">
              <ul className='drop-list'>
                <li className='drop-item'>Terms & Condistions</li>
                <li className='drop-item'>Contect US</li>
                <li className='drop-item'>Privacy</li>
              </ul>
            </div>
          )}
        </div>
      );
}
export default DropdownMenu;  
