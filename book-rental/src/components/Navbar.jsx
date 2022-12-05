
import '../App';
import { Link } from 'react-router-dom';


export default function Navbar(props) {



   
  return (
    
        <div className='navbar'>
        <div> <Link to="/booklist"><h1>Books Rental App</h1></Link></div>
        <div>
          <Link to="/favourites"><h3>Your Cart</h3></Link>
        </div>
        <div> <Link to="/"><h3>Log Out</h3></Link></div>
       
        </div>
 
  )
}


