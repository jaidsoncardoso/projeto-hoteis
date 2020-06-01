import { Router } from 'express';

import SessionController from './controllers/SessionController'

import HotelController from './controllers/HotelController';

import ReservaController from './controllers/ReservaController';

const routes = new Router();

routes.get('/sessions', SessionController.index);
routes.post('/sessions', SessionController.store);
/*
routes.get('/hoteis', HotelController.index);
routes.post('/hoteis', HotelControllers.store);
routes.put('/hoteis', HotelController.update);


routes.post('/hoteis/: hotel_id/reserva',ReservaController.store);*/
export default routes;