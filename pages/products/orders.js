import React, { useCallback, useEffect, useState } from 'react';
import Layout from '../../components/Layout';


//export const config = { amp: 'hybrid' }

export default function Orders(props) {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(false)


    const getAllOrders = async () => {
        const response = await fetch('/api/orders', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        const result = await response.json()
        setOrders(result)
        setLoading(false)
    }


    useEffect(() => {
        getAllOrders()
    }, [])

    const getTable = useCallback(() => {
        if (orders) {
            return <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Order Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Shipping Address</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Price</th>
                        <th scope="col">Image</th>
                    </tr>
                </thead>
                <tbody>
                    {orders ? orders.map((order, i) => (
                        <tr key={i}>
                            <th scope="row">{order._id}</th>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.mobile}</td>
                            <td>{order.address}</td>
                            <td>{order.productName}</td>
                            <td>${order.productPrice}</td>
                            <td><img height="40px" width="40px" src={order.productImage}/></td>
                        </tr>
                    )): "Loading...Please Wait..."}
                </tbody>
            </table>
        }
    },[orders])

    return (
        <Layout>
            <div className="container">
                {loading ? <h3>Loading...Please Wait...</h3> : getTable()}
            </div>
        </Layout>
    )
}



