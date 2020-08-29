import React, { useEffect } from 'react';
import AllProducts from './products/allproducts'
import { ToastContainer, toast } from 'react-toastify';



export default function Home(props) {
    const seedDB = async() => {
        const response = await fetch('/api/seedDB', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
        })
        if (response.status >= 200 && response.status < 300) {
            toast.success("Products Added in DB");
        } else if (response.status >= 400 && response.status < 500) {
           // toast.info("Products already present in DB");
        } else {
            toast.error("Something went wrong");
        }
    }
    
    useEffect(() => {
       seedDB() 
    },[])


    return (<div><ToastContainer/><AllProducts /></div>)
}


