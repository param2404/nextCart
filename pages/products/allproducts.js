import React, { useCallback, useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

//export const config = { amp: 'hybrid' }

export default function Post(props) {
    const [products,setProducts]=useState([])
 
    const getAllProducts = async () => {
        const response = await fetch('/api/allproducts', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        const result = await response.json()
        setProducts(result)
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    const productCards = useCallback(() => {
        if (products.length > 0) {
            return (
                <div className="row p-5 m-5"><ul className="list-group">{products.map((product, i) =>
                    <li className="d-flex justify-content-between p-2 list-group-item" key={i}><div className="card-title">{product.title}</div>
                    <Link href="/products/checkout/[product]" as={`/products/checkout/${product.serialNumber}`}><button className="button">CHECKOUT</button></Link>
                    </li> )
        }
                </ul></div>)
        } else {
            return (<h3>No products</h3>)
        }
    }, [products])


    return (
        <Layout>
            <div className="container">
            <h1 className="title pl-5 pt-4 ml-5">All Products</h1>
                {productCards()}
            </div>
        </Layout>
    )
}



