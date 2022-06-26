const User = require("../models/User");

const userController = {};

userController.getAll = async (req, res) => {
    try {
        const users = await User.find();

        return res.status(200).json(
            {
                success: true,
                message: 'Get all users retrieved succsessfully',
                data: users
            }
        );
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: 'Error retrieving users',
                error: error.message
            }
        )
    }
};

<<<<<<< HEAD
=======
userController.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const newUser = {
            name,
            email,
            password
        };

        await User.create(newUser);

        return res.status(200).json(
            {
                success: true,
                message: 'Create user successfully'
            }
        )
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: 'Error creating user',
                error: error?.message || error
            }
        )
    }
};

>>>>>>> 41a1b9417e1db245ebd4e1005220e04c54692170
module.exports = userController;