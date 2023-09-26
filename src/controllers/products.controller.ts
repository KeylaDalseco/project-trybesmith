import { Request, Response } from 'express';
import productsService from '../service/products.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const create = async (req: Request, res: Response) => {
  const { name, price, orderId } = req.body;
  const { status, data } = await productsService.create({ name, price, orderId });
  return res.status(mapStatusHTTP(status)).json(data);
};

const getAllProducts = async (_req: Request, res: Response) => {
  const { status, data } = await productsService.getAllProducts();
  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  create,
  getAllProducts,
};