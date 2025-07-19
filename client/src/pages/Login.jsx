import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import BackEndUrl from '../config/BackEndUrl';
const Login=()=>{
    const navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword]= useState("");


   const handleSubmit=async(e)=>{
    e.preventDefault();
     let api=`${BackEndUrl}/user/login`;
    const response = await axios.post(api, {email, password});
    console.log(response);
    localStorage.setItem("token", response.data.accessToken);
   } 

    return(
        <>
         
           <Form style={{width:"300px", margin:"auto"}}>
             <h1> User Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={password}
        onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>
      If you Don't have Account  
      <span style={{cursor:"pointer", color:"blue", fontWeight:"bold"}} onClick={()=>{navigate("/registration")}}> SignUp </span> now
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit!
      </Button>
    </Form>
        </>
    )
}

export default Login;