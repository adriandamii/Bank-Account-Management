import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';

dbConnect();

export default async (req, res) => {
    if (req.method === 'GET') {
        res.status(200).json({ success: true, data: await User.find({}) })
    } else if (req.method === 'POST') {
        res.status(201).json({ success: true, data: await User.create(req.body) })
    } else {
        res.status(400).json({ success: false });
    }
}