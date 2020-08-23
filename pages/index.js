import React, { useState, useEffect } from 'react';
import Layout from './../components/Layout';
import Link from 'next/link';


export default function Home(props) {
    const [categorySelected, setCategorySelected] = useState('men clothing')
    const categories=['men clothing','electronics','jewelery','women clothing']
    const seedDB = async() => {
        const response = await fetch('/api/seedDB', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        })
        if (response.status >= 200 && response.status < 300) {
            alert("Products Added to DB");
        } else if (response.status >= 400 && response.status < 500) {
            //alert("Products already present in DB");
        } else {
            alert("Something went wrong");
        }
    }
    
    useEffect(() => {
       seedDB() 
    },[])


    return (<Layout>
        <div className="container body">
            <h3 className="title">Select Category to Search Products</h3>
        <select className="form-control select" onChange={(e)=>setCategorySelected(e.target.value)}>
                {categories.map((val,i) => (
                            <option key={i} value={val}>{val}</option>       
                ))}
            </select>
            <div className="d-flex justify-content-between">
            <Link href="/products/[category]" as={`/products/${categorySelected}`}><button className="mt-5 button">Get Products of Selected Category</button></Link>
           <Link href="/products/allproducts" ><button className="mt-5 button">List of all Products</button></Link>
            </div>
        </div>
    </Layout>)
}


