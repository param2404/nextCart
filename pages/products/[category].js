import React, { useState, useCallback, useEffect } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
// import { useAmp } from 'next/amp'
import { useRouter } from 'next/router'


// export const config = { amp: 'hybrid' }

export default function Post(props) {
    const [products, setProducts] = useState([])
    const router = useRouter()
    const { category } = router.query
    // const isAmp = useAmp()

    const getProducts = async () => {
        const response = await fetch('/api/products', {
            method: "POST",
            body: JSON.stringify({ category }),
            headers: {
                "Content-Type": "application/json"
            },
        })
        const result = await response.json()
        setProducts(result)
    }

    useEffect(() => {
        getProducts()
    }, [])

    console.log(props)
    const productCards = useCallback(() => {
        if (products.length > 0) {
            return (
                <div className="row pl-5 ml-5">{products && products.map((product, i) => <div className="col-md-3 col-xs-1 card m-2" key={i} style={{ width: '18rem' }}>
                    <img className="card-img-top p-2" src={product.image} alt="Card image cap" width="250px" height="250px" />
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Price: ${product.price}</h6>
                        <p className="card-text">{product.description}</p>
                        <Link href="/products/checkout/[product]" as={`/products/checkout/${product.serialNumber}`}><button className="button">CHECKOUT</button></Link>
                    </div>
                </div>)}</div>)
        } else {
            return (<h3>No products</h3>)
        }
    }, [products])


    return (
        <Layout>
            <div className="container">
                <h1 className="title pl-5 pt-5 ml-5">Products</h1>
                {productCards()}
            </div>
        </Layout>
    )
}



