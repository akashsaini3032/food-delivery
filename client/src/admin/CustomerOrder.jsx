import { useState, useEffect } from "react";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";
import Table from 'react-bootstrap/Table';
const CustomerOrder = () => {
    const [mydata, setMydata] = useState([]);
    const loadData = async () => {
        let api = `${BackEndUrl}/admin/ourorder`;
        try {
            const response = await axios.get(api);
            console.log(response.data);
            setMydata(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        loadData();
    }, []);

  
    const ans = mydata.map((key, index) => {
        return (
            <>
                <tr>
                    <td>{index+1}</td>
                    <td>{key.products}</td>
                    <td>{key.amount}</td>
                    <td>{key.clientname}</td>
                    <td>{key.city}</td>
                    <td>{key.address}</td>
                    <td>{key.pincode}</td>
                    <td>{key.email}</td>
                </tr>
            </>
        )
    })


    return (
        <>
            <h1>Our Orders</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Products</th>
                        <th>Amount</th>
                        <th>Customer name</th>
                        <th>City</th>
                        <th>Address</th>
                        <th>PinCode</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody> 
                 {ans}
                </tbody>
            </Table>

        </>
    )
}

export default CustomerOrder;