import React from 'react'
import '../App';
import { Link } from 'react-router-dom';
const navbar = () => {
  return (
    
        <div className='navbar'>
        <div><h1>Books Rental App</h1></div>
        <div>
          <Link to="/favourites"><h3>Your Favaourites</h3></Link>
        </div>
        <div>Cart</div>
        </div>
 
  )
}

export default navbar;
