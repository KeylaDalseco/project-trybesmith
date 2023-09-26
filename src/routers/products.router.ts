import { Router } from 'express';
import productsController from '../controllers/products.controller';
import v from '../middlewares/validation';

const productRouter = Router();

productRouter.get('/products', productsController.getAllProducts);
productRouter.post('/products', v.validateName, v.validatePrice, productsController.create);

export default productRouter;