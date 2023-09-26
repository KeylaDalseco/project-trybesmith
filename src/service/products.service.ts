import { ServiceResponse } from '../types/ServiceResponse';
import { NewProductType } from '../types/newProduct';
import ProductModel, { 
  ProductInputtableTypes, ProductSequelizeModel } from '../database/models/product.model';

const create = async (product: ProductInputtableTypes):
Promise<ServiceResponse<NewProductType>> => {
  const newProduct = await ProductModel.create(product);
  
  const responseService: ServiceResponse<NewProductType> = { 
    status: 'CREATED',
    data: { 
      id: newProduct.dataValues.id,
      name: newProduct.dataValues.name,
      price: newProduct.dataValues.price,
    } };
  return responseService;
};

const getAllProducts = async ():
Promise<ServiceResponse<ProductSequelizeModel[]>> => {
  const products = await ProductModel.findAll();
  
  return { status: 'SUCCESSFUL', data: products };
};

export default {
  create,
  getAllProducts,
};