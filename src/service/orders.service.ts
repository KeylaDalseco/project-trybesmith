import { ServiceResponse } from '../types/ServiceResponse';
import OrderModel from '../database/models/order.model';
import { OrderAndProducts } from '../types/orderWithProducts';
import ProductModel from '../database/models/product.model';

const getAllOrders = async (): Promise<ServiceResponse<OrderAndProducts[]>> => {
  const orders = await OrderModel.findAll({
    include: { model: ProductModel, as: 'productIds', attributes: ['id'] },
  });

  const ordersWithProductIds = orders.map(({ dataValues }) => ({
    id: dataValues.id,
    userId: dataValues.userId,
    productIds: dataValues.productIds?.map((products) => products.id),
  }));

  return { status: 'SUCCESSFUL', data: ordersWithProductIds };
};

export default {
  getAllOrders,
};