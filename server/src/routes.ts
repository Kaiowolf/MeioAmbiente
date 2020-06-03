import express from 'express';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

// index, show, create/store, update, delete/destroy

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);

routes.post('/collect_points', pointsController.create);
routes.get('/collect_points', pointsController.index);
routes.get('/collect_points/:id', pointsController.show);


export default routes;