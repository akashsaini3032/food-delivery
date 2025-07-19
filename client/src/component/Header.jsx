
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import "../css/Header.css";
const Header=()=>{
const cartData= useSelector(state=>state.mycart.cart);
const cartLength= cartData.length;
const navigate = useNavigate();

const logout=()=>{
  localStorage.clear();
}
    return(
        <>
               <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="offers">Offers</Nav.Link>
            <Nav.Link as={Link} to="cartdata">Cart</Nav.Link>
            <Nav.Link as={Link} to="Profile">Profile</Nav.Link>
           
           
          </Nav>

          <span> Welcome {localStorage.getItem("username")} 
          <a href="#" onClick={logout}>Logout</a></span>
          
           <span style={{cursor:"pointer"}} onClick={()=>{navigate("/login")}}> Login </span>
          <span className='itemcount'> {cartLength} </span> 

          <FaShoppingCart className='carticon'
          onClick={()=>{navigate("/cartdata")}} style={{cursor:"pointer"}} /> 
        
        </Container>
      </Navbar>

        </>
    )
}

export default Header;


