import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";
const ProductDisplay = () => {
    const { id } = useParams();
    const [mydata, setMydata] = useState({});
    const [imglist, setimgList] = useState([]);
    const [DefaultImage, SetDefaultImage] = useState("");

    console.log(imglist);

    const loadData = async () => {
        let api = `${BackEndUrl}/product/productdisplay/?id=${id}`;
       
        try {
            const response = await axios.get(api);
            console.log(response.data);
            setMydata(response.data);
            setimgList(response.data.images);
            SetDefaultImage(response.data.defaultImage);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        loadData();
    }, [])



    const ans = imglist.map((key) => {
        return (
            <>
                <img src={key} width="50" height="50" style={{border:"5px solid lightblue", margin:"5px"}}
                onMouseOver={()=>{SetDefaultImage(key)}} />
                <br/>
            </>
        )
    })

    return (
        <>
            <h1> Product Display</h1>

            <div id="prodisplay">
                <div style={{display:"flex"}}>
                    <div>
                        {ans}

                    </div>
                    <div>
                        <img src={DefaultImage} width="300" height="300" />
                    </div>
                </div>
                <div>
                    <h1> Product Name: {mydata.name}</h1>
                    <h2> Price : {mydata.price}</h2>

                </div>
            </div>

        </>
    )
}
export default ProductDisplay;