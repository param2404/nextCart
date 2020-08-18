import axios from 'axios'

export const getProduct = async (id) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
    return { product: res.data }
}

export function getAllIds() {
    const products = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20']
    return products.map(pro => {
        return {
            params: {
                product: pro
            }
        }
    })
}