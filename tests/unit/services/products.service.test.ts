import { expect } from 'chai';
import sinon from 'sinon';

import productService from '../../../src/service/products.service';
import ProductModel from '../../../src/database/models/product.model';
import productsMock from '../../mocks/products.mock';

describe('ProductsService', function () {
  beforeEach(function () { sinon.restore(); });

  describe('Testando função Create de products', function () {
    it('É possível adicionar um producto com sucesso', async function () {
      const mockReturn = ProductModel.build(productsMock.mockModel);
      sinon.stub(ProductModel, 'create').resolves(mockReturn);      

      const { status, data } = await productService.create(productsMock.productValid);
      expect(status).to.be.equal('CREATED');
      expect(data).to.be.deep.equal(productsMock.returnProduct);
    });
  })

  describe('Testando função getAllProducts da rota /products', function () {
    it('É possível listar os produtos com sucesso', async function () {
      const resolves = ProductModel.bulkBuild(productsMock.allProducts);
      sinon.stub(ProductModel, 'findAll').resolves(resolves);

      const { status, data } = await productService.getAllProducts();
      expect(status).to.be.equal('SUCCESSFUL');
      expect(data).to.be.deep.equal(resolves);
    });
  })
});
