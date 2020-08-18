import axios from 'axios';

export const getProducts = async (id) => {
    const res = await axios.get(`https://fakestoreapi.com/products`)
    return { products: res.data }
}