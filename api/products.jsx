import axios from 'axios'

export const getProducts = async (id) => {
    const res = await axios.get(`https://fakestoreapi.com/products/category/${id}`)
    return { products:res.data }
}

export function getAllCategoryId() {
    const categories=['men clothing', 'jewelery', 'electronics', 'women clothing']
    return categories.map(cat => {
        return {
            params: {
                category: cat
            }
        }
    })
}