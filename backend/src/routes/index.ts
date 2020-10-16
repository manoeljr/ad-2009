import { Router } from 'express';

import FriendsController from '../controllers/FriendsController';

const routes = Router();

routes.get('/friends', FriendsController.index);
routes.post('/friends', FriendsController.create);
routes.delete('/friends/:id', FriendsController.delete);
routes.patch('/friends/:id', FriendsController.update);

export default routes;