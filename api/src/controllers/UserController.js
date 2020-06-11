const crypto = require('crypto');
const User = require('../models/User');
module.exports = {
    async create(req,res) {
        try {
            const userData = {name, email} = req.body; 
            const newUser = await User.new(userData);
            return res.json({
                message: 'New User Created',
                id: newUser.id
            });
        } catch (error) {
            return res.status(400).json(error);
        }
        
    },

    async index(req, res) {
        try {

            const users = await User.all();
            return res.json(users);

        } catch (error) {
            return res.status(400).json(error);
        }
        
    },

    async show(req,res) {
        try {

            const { id } = req.params;
            const user = await User.findById(id);
            return res.json(user)
            
        } catch (error) {
            return res.status(400).json(error);
        }
        
    },

    async delete(req, res) {
        try {
            
            const { id } = req.params;
            const message = await User.deleteById(id);
            return res.json(message)

        } catch (error) {
            return res.status(400).json(error);
        }
    },

    async update(req, res) {
        try {

            const { id } = req.params;

            const userData = req.body; 

            const message = await User.updateById(id, userData);

            return res.json(message)

        } catch (error) {
            return res.status(400).json(error);
        }
    }
}
