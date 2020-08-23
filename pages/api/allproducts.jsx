import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.get(async(req, res) => {
    try {
        const result = await req.db.collection('products').find().toArray();
        return res.status(200).json(result)

    } catch (e) {
        return res.status(500).send('Internal server error')
    }
}
);



export default handler;