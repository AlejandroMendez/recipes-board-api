import { Router } from 'express';
import { requireAuthentication } from '../controllers/recipes_controller';
import { 
  getUsers,
  registerUser
} from '../controllers/users_controller';



const routes = Router();

routes.all('*', (req, res, next) =>{
  requireAuthentication(req, res);
  next()
});

routes.get('/', (req, res) => {
  res.json({ message: 'My index' });
});

routes.get('/users', (req, res) => { 
  getUsers(req, res);
});

routes.post('/sign-up', (req, res) => {
  registerUser(req, res);
});

routes.get('/admin', (req, res) => {
  res.sendStatus(401)
});

export default routes;