const Order = require("../models/Order");

const orderController = {};

orderController.getAll = async (req, res) => {
    try {
        const orders = await Order.find();

        return res.status(200).json(
            {
                success: true,
                message: 'Get all films retrieved succcesfully',
                data: orders
            }
        );
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving orders',
            error: error.message
        })
    }
}

/*
orderController.createOrder = async (req, res) => {
    try {
        const {orderDate, userId, filmId } =req.body;
        const newOrder ={
            orderDate,
            userId,
            filmId
        }

        if(!newOrder){
        await Order.create(newOrder);
        };
    



    }catch(error){
        return res.status(500).json({
            success: false,
            message: 'Error creating orders',
            error: error.message
        })


    }


    };*/



module.exports = orderController;