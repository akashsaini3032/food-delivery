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





const ans=mydata.map((key)=>{
  return(
    <>
      <Card style={{ width: '18rem' }}>
    
      <Card.Img variant="top" src={key.defaultImage} style={{height:"250px", cursor:"pointer"}} onClick={()=>{navigate(`/productdisplay/${key._id}`)}} />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          Description : {key.description} for - {key.category}
          <b> <h4> Price {key.price} </h4></b>
        </Card.Text>
        <Button variant="primary" onClick={()=>{dispatch(addtoCart({id:key._id, name:key.name, description:key.description, price:key.price, category:key.category, images:key.images, defaultImage:key.defaultImage, qnty:1 }))}}>Add to Cart</Button>
      </Card.Body>
    </Card>
    
    </>
  )
});


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