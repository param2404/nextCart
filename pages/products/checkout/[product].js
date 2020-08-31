import React, { useState, useEffect } from 'react';
import Layout from '../../../components/Layout';
//import { useAmp } from 'next/amp'
import { useRouter} from 'next/router'
import { ToastContainer, toast } from 'react-toastify';


// export const config = { amp: 'hybrid' }

export default function Product() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [couponCode, setCouponCode] = useState('')
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState({})
    const router = useRouter()
    // const isAmp = useAmp()


    const { product } = router.query

    const data = { name, email, mobile, address, couponCode, product: products._id, productName: products.title, productPrice: products.price, productImage: products.image }

    const getProduct = async () => {
        const response = await fetch('/api/product', {
            method: "POST",
            body: JSON.stringify({ product }),
            headers: {
                "Content-Type": "application/json"
            },
        })
        if (response.status === 200) {
            const result = await response.json()
            setProducts(result)
        }
    }

    useEffect(() => {
        product && getProduct()
    }, [product])


    const onCheckout = async (e) => {
        e.preventDefault()
        setLoading(true)
        const response = await fetch('/api/checkout', {
            method: "POST",
            body: JSON.stringify({ data }),
            headers: {
                "Content-Type": "application/json"
            },
        })
        if (response.status >= 200 && response.status < 300) {
            toast.success("Product Ordered");
            router.push('/products/orders')
        } else if (response.status >= 400 && response.status < 500) {
            toast.info("Please Enter Data");
        } else {
            toast.error("Something went wrong");
        }
        setLoading(false)
    }


    return (
        <Layout>
            <ToastContainer />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 p-5">
                        <div className="col-md-8 col-sm-8 card m-2">
                            <img className="card-img-top" src={products.image} alt="Card image cap" width="200px" height="200px" />
                            <div className="card-body">
                                <h5 className="card-title">{products.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Price: ${products.price}</h6>
                                <p className="card-text">{products.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 p-5" style={{ backgroundColor: "#343a40" }}>
                        <form action="" target="">
                            <div className="title" style={{ color: "#fffef4" }}>CHECKOUT</div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <input type='tel' className="form-control" id="exampleInputPassword1" placeholder="Mobile" value={mobile} onChange={(e) => {
                                    setMobile(
                                        e.target.value
                                            .replace(/[^0-9]/g, '')
                                            .toString()
                                            .slice(0, 10),
                                    )
                                }}/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Shipping Address" value={address} onChange={(e) => setAddress(e.target.value)} ></textarea>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Coupon Code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />
                            </div>
                            <button type="submit" className="btn checkout" disabled={loading || name === '' || mobile === '' || address === '' ? true : false} onClick={(e) => onCheckout(e)}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    )
}


