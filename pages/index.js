import React, { useState } from 'react';
import Layout from './../components/Layout';
import { fetchCategories} from './../api/categories'
import Link from 'next/link';


export default function Home({categories}) {
    const [categorySelected,setCategorySelected]=useState('men clothing')


    return (<Layout>
        <div className="container">
            <h3>Select Category to Search Products</h3>
        <select className="form-control" onChange={(e)=>setCategorySelected(e.target.value)}>
                {categories.map((val,i) => (
                            <option key={i} value={val}>{val}</option>       
                ))}
            </select>
            
            <Link href="/products/[category]" as={`/products/${categorySelected}`}><button className="mt-5">Get Products</button></Link>
            <div className="row p-2"> <Link href="/products/allproducts" ><button className="mt-5">All Products</button></Link>
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

