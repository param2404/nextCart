import React, { useState, useEffect } from 'react';
import Layout from './../components/Layout';
import AllProducts from './products/allproducts'
import Link from 'next/link';


export default function Home(props) {
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


    return  <AllProducts/>
}


