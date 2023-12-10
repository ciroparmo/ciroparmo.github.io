import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

const Navbar = () => {

  const enlaces = [
    "Productos",
    "Detail",
  ]

  return (
    <div className='containerNavbar'>
      <Link to={`/`} className='containerLogo'>
        <span className='pageLogo'>TechHouse</span>
      </Link>
      <div className='containerNavigation'>
        <ul>
          {enlaces.map((e, id) => 
          <li key={id}>
            <Link className='navigationText' to={`${e}`}>
              {e}
            </Link>
          </li>
          )}
        </ul>
      </div>
      <div className="containerCart">
        <span>Carrito</span>
      </div>
    </div>
  );
};

export default Navbar;