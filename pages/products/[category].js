import React, { useCallback } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import { getProducts, getAllCategoryId } from '../../api/products';

export const config = { amp: true }

export default function Post({ products }) {

    const productCards = useCallback(() => {
        if (products.length > 0) {
            return (
                <div className="row p-5 m-5">{products.map((product, i) =><div className="col-3 card m-2" key={i} style={{width: '18rem'}}>
                    <img className="card-img-top" src={product.image} alt="Card image cap" width="250px" height="250px"/>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Price: ${product.price}</h6>
                        <p className="card-text">{product.description}</p>
                        <Link href="/products/checkout/[product]" as={`/products/checkout/${product.id}`}><button>CHECKOUT</button></Link>
                    </div>
                </div>)}</div>)
        } else {
            return (<h3>No products</h3>)
        }
    }, [products])


    return (
        <Layout>
            <h1 className="pl-5">{`Products`}</h1>
            {productCards()}      
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllCategoryId()
    return {
        paths,
        fallback: false
    }
}


export async function getStaticProps({ params }) {
    const productsData = await getProducts(params.category)
    return {
        props: {
            products: productsData.products
        }
    }
}
