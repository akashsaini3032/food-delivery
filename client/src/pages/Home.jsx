import { useState, useEffect } from "react";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtoCart } from "../cartSlice";
import { useDispatch } from "react-redux";






import Carouse from './Carouse';
import Dishes from '../component/Dishes';
import ChefSection from '../component/ChefSection';
import MenuSection from '../component/MenuSection';
import Gallary from '../component/Gallary';
import Data from "../component/Data";

const Home=()=>{
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();

  const loadData=async()=>{
      let api=`${BackEndUrl}/product/homedisplay`;
      try {
            const response = await axios.get(api);
            console.log(response.data);
            setMydata(response.data);
      } catch (error) {
          console.log(error);
      }
  }

  const authCheck = async () => {
      let api=`${BackEndUrl}/user/authuser`;
      let token = localStorage.getItem("token");
      if (token) { 
      const tokenResponse = await axios.post(api, null, { headers: { "x-auth-token": token } });
      console.log(tokenResponse.data);

      if (tokenResponse.data) { 
        localStorage.setItem("userValid", true); 
        localStorage.setItem("username", tokenResponse.data.name );
        localStorage.setItem("useremail", tokenResponse.data.email );
        localStorage.setItem("userid", tokenResponse.data._id );
      }
      }
    }


useEffect(()=>{
  loadData();
   authCheck();
}, []);



    return(
        <>
          
          

     
  
<Carouse />
<Data />
  
<Gallary />
<MenuSection />

<Dishes />
<ChefSection />

        </>
    )
}

export default Home;