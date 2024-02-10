import "./routing.css"
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom"
import UserProfile from './UserProfile';

function Nav()
{
 
  const navigate = useNavigate();

  function logout()
  {
    UserProfile.setName("null")
    navigate("/")
  }
    return(
        <nav className="navbar">
        <div className="container">
        <div className="logo">
        </div>
        <div className="nav-elements">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            
            <li><NavLink to="/mobile">Mobile</NavLink></li>
            <li><NavLink to="/laptop">Laptop</NavLink></li>
            <li><NavLink to="/cloth">Cloth</NavLink></li>
            <li><NavLink to="/shoes">Shoes</NavLink></li>
            <li><NavLink to="/electronics">Electronics</NavLink></li>
            <li><NavLink to="/jwellery">Jwellery</NavLink></li>
            {UserProfile.getName() == "null"? <>
            <li> <Button variant="primary" onClick={()=>navigate("/register")}>Register</Button></li>
              <li><Button variant="primary" onClick={()=>navigate("/login")}>Login</Button></li>
            </>: <li><Button variant="primary" onClick={()=>logout()}>Logout</Button></li> }
            {UserProfile.getName() == "null"? null: <li>Hello {UserProfile.getName()}</li> }
          
          </ul>   
        </div>
      </div>
      
    </nav>
    )
}
export default Nav