import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
    const {data} = req.body;

    const dataModel = { "name": data.name, "email": data.email, "mobile": data.mobile, "address": data.address, "couponCode":data.couponCode  }

    
    if (Object.keys(data).length !== 0) {
        try { 
            await req.db.collection('users').insertOne(dataModel)
            return res.status(200).send('Ordered')
        } catch (e) {
            return res.status(500).send('Internal server error')
        }
    } else {
        return res.status(400).send('No data')
    }
});



export default handler;