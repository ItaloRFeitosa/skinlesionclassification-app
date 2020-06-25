const db = require('../database/db');
const Model = require('./Model'); 
const imagesCollection = db('images');

const Image = Model( imagesCollection );

module.exports = {
    ...Image,
};