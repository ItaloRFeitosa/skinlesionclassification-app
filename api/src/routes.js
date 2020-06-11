const routes = require('express').Router();
const userController = require('./controllers/UserController');
const predictController = require('./controllers/PredictController');

/**
 * Rota para verificação da api
 */
routes.all('/', (req, res) => {
    return res.json({
        message: 'Its Working!'
    })
});

routes.post('/users', userController.create);
routes.get('/users', userController.index);
routes.get('/users/:id', userController.show);
routes.delete('/users/:id', userController.delete);
routes.put('/users/:id', userController.update);

routes.post('/predict', predictController.create);





module.exports = routes;
