const Film = require('../models/Film');

const filmController = {};

filmController.getAll = async (req,res)=>{
    try{
        const films = await Film.find();
        
        return res.status(200).json(
            {
                success: true,
                message: 'Get all films retrieved succcesfully',
                data: films
            }
        );
    }catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving films',
            error: error.message
        })
    }
}

module.exports = filmController;