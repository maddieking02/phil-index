const routers = require('express').Router();
import { controllers } from './controllers/controllers';

routers.get('/api', controllers.testAPI);

module.exports = routers;