const express = require('express');
const routes = express.Router();

//controlador
const controller = require('../controller/controller');

module.exports = function(){

    routes.get('/', controller.controllerHome);
    routes.post('/cords', controller.getPosition);


    return routes
}