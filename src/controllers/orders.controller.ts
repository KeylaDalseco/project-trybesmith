import { Request, Response } from 'express';
import ordersService from '../service/orders.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const getAllOrders = async (_req: Request, res: Response) => {
  const { status, data } = await ordersService.getAllOrders();
  return res.status(mapStatusHTTP(status)).json(data);
};

export default {
  getAllOrders,
};