const routes = require('express').Router();
const predictController = require('./controllers/PredictController');

/**
 * Rota para verificação da api
 */
routes.all('/', (req, res) => {
    return res.json({
        message: 'Its Working!'
    })
});

routes.post('/predict', predictController.create);
routes.get('/predict/:id', predictController.show);

module.exports = routes;
