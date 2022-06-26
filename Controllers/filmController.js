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

filmController.addFilm = async (req,res)=> {
    try{
        const {title,author,genre} = req.body;
        if(!title || !author){
            return res.status(400).json({
                success: false,
                message: 'title and author are required'
            })
        }
        const newFilm = {
            title,
            author,
            genre
        }
        await Film.create(newFilm);
        return res.status(200).json(
            {
                success: true,
                message: 'Create film succesfully'
            }
        )
    }catch(error){
        return res.status(500).json({
            success: false,
            message: 'Error r<dding film',
            error: error.message
        })
    }
}

module.exports = filmController;