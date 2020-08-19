import React, { useState } from 'react';
import Layout from '../../../components/Layout';
import { getAllIds, getProduct } from './../../../api/product'
import { useAmp } from 'next/amp'

//export const config = { amp: true }

export const config = { amp: 'hybrid' }

export default function Product({ products }) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [couponCode, setCouponCode] = useState('')
    const [loading, setLoading] = useState(false)
    
    const isAmp = useAmp()

    const data = { name, email, mobile, address, couponCode }


    const onCheckout = async (e) => {
        e.preventDefault()
        setLoading(true)
        const response=await fetch('/api/checkout', {
            method: "POST",
            body: JSON.stringify({ data }),
            headers: {
                "Content-Type": "application/json"
            },
        })
        if (response.status >= 200 && response.status < 300) {
            alert("Product Ordered");
            setAddress('')
            setName('')
            setMobile('')
            setEmail('')
            setCouponCode('')
        } else if (response.status >= 400 && response.status < 500) {
            alert("Please Enter Data");
        } else {
            alert("Something went wrong");
            console.log(response);
        }
        setLoading(false)
    }


    return (
        <Layout>
            <div className="row">
                <div className="col-6 p-5">
                    <div className="card m-2" style={{ width: '24rem' }}>
                        {isAmp ? <amp-img className="card-img-top" src={products.image} alt="Card image cap" width="250px" height="250px" /> : <img className="card-img-top" src={products.image} alt="Card image cap" width="250px" height="250px" />}  
                        <div className="card-body">
                            <h5 className="card-title">{products.title}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Price: ${products.price}</h6>
                            <p className="card-text">{products.description}</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-5">
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <input type="phone" className="form-control" id="exampleInputPassword1" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} ></textarea>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Coupon Code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={loading || name === '' || mobile=== ''?true:false} onClick={(e) => onCheckout(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const productData = await getProduct(params.product)
    return {
        props: {
            products: productData.product
        }
    }
}