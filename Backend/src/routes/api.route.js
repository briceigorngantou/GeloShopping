import { Router } from 'express';
import { authController, productsController } from '../controllers/index';

//## Initialize express router;
export const apiRoute = Router();

//## register endpoint
apiRoute.post('/api/register', authController.createUser);

//Login user endpoint
apiRoute.post('/api/login', authController.loginUser);

//Create Product endpoint
apiRoute.post('/api/products/create', productsController.createProduct);

//get all Products endpoint
apiRoute.get('/api/products/get', productsController.getProduct);

//get a Product endpoint
apiRoute.get('/api/products/get/:id', productsController.getSingleProduct);
