import dbConnect from '../../utils/dbConnect';
import User from '../../models/User';

dbConnect();

export default async (req, res) => {
    const {query: { id }} = req;    
    console.log("query.id");
    if (req.method === 'GET') {
        res.status(200).json({ success: true, data: await User.findById(id) });
    } 
    else if (req.method === 'PUT') {
        try {
            const change = await User.findByIdAndUpdate(id, req.body, {
                new: true,
                runValidators: true
            });

            if (!change) {
                return res.status(400).json({ success: false });
            }

            res.status(200).json({ success: true, data: change });
        } catch (error) {
            res.status(400).json({ success: false });
        }    
    } 
    else if (req.method === 'DELETE') {
        res.status(200).json({ success: true, data: await User.deleteOne({ _id: id }) });
    } 
    else {
        res.status(400).json({ success: false })
    }
}