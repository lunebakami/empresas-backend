import { Router } from 'express';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import EnterpriseController from './app/controllers/EnterpriseController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/api/v1/users/sign_up', UserController.store);
routes.post('/api/v1/users/auth/sign_in', SessionController.store);

routes.use(authMiddleware);

routes.get('/api/v1/enterprises/', EnterpriseController.index);
routes.get('/api/v1/enterprises/:id', EnterpriseController.show);

export default routes;
