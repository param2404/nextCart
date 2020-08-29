import nextConnect from 'next-connect';
import middleware from '../../middleware/database';

const handler = nextConnect();

handler.use(middleware);

handler.post(async (req, res) => {
    try {
        if (req.body !== {}) {
            const result = await req.db.collection('products').find({ category: req.body.categorySelected }).toArray()
            return res.status(200).json(result)
        } else {
            return res.status(500).send('Internal server error')
        }
    } catch (e) {
        return res.status(500).send('Internal server error')
    }
}
);



export default handler;