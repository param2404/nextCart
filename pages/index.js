import React, { useState } from 'react';
import Layout from './../components/Layout';
import { fetchCategories} from './../api/categories'
import Link from 'next/link';


export default function Home({categories}) {
    const [categorySelected,setCategorySelected]=useState('men clothing')


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

export const getStaticProps =  () => {
    const data = fetchCategories();
    return {
        props: data,
    };
}

