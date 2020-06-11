const db = require('../database/db');
const Model = require('./Model'); 
const usersCollection = db('users');

const User = Model( usersCollection );

module.exports = {
    ...User,
};