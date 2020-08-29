import React, { useCallback, useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';

//export const config = { amp: 'hybrid' }

export default function Post(props) {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [categorySelected, setCategorySelected] = useState('')

    const categories = [{ value: 'all', title: "All" },
        { value: 'men clothing', title: "Men's Clothing" },
        { value: 'electronics', title: "Electronics" },
        { value: 'jewelery', title: "Jewelery" },
        { value: 'women clothing', title: "Women's Clothing" }]
 
    const getAllProducts = async () => {
        const response = await fetch('/api/allproducts', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        const result = await response.json()
        setProducts(result)
        setLoading(false)
    }

    const onCategorySelected = async () => {
        setLoading(true)
        if (categorySelected === 'all') {
            getAllProducts()
        } else {           
            const response = await fetch('/api/products', {
                method: "POST",
                body: JSON.stringify({ categorySelected }),
                headers: {
                    "Content-Type": "application/json"
                },
            })
            const result = await response.json()
            setProducts(result)
            setLoading(false)
        }
    }

    useEffect(() => {
        getAllProducts()
    }, [])

   const productCards = useCallback(() => {
        if (products.length > 0) {
            return (
                <div className="row pl-5 ml-5">{products && products.map((product, i) => <div className="col-md-3 col-xs-1 card m-2" key={i} style={{ width: '18rem' }}>
                    <img className="card-img-top p-2" src={product.image} alt="Card image cap" width="250px" height="250px" />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Price: ${product.price}</h6>
                        <p className="card-text">{product.description}</p>
                        <Link href="/products/checkout/[product]" as={`/products/checkout/${product.serialNumber}`}><button type="button" className="btn button">CHECKOUT</button></Link>
                    </div>
                </div>)}</div>)
        } else {
            return (<h3>No products</h3>)
        }
    }, [products])


    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <select className="form-control select" onChange={(e) => setCategorySelected(e.target.value)}>
                            {categories.map((val, i) => (
                                <option key={i} value={val.value}>{val.title}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <button className="btn button" onClick={onCategorySelected}>GO</button>
                    </div>
                </div>
                {loading ? <h3>Loading...Please Wait...</h3>:productCards()}
            </div>
        </Layout>
    )
}



