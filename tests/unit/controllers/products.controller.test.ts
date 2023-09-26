import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productsService from '../../../src/service/products.service';
import productsController from '../../../src/controllers/products.controller';
import productsMock from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  describe('#create', function () {
    it('deve retornar o produto criado', async function () {
      // Arrange
      req.body = productsMock.productValid;
      sinon.stub(productsService, 'create').resolves({
        status: 'CREATED',
        data: productsMock.returnProduct
      });
      // Act
      await productsController.create(req, res);

      // Assert
      expect(res.status).to.have.been.calledWith(201);
      expect(res.json).to.have.been.calledWith(productsMock.returnProduct);
    });
  });

  describe('#getAllProducts', function () {
    it('deve retornar todos os produtos', async function () {
      // Arrange
      const resolves = ProductModel.bulkBuild(productsMock.allProducts);
      sinon.stub(productsService, 'getAllProducts').resolves({
        status: 'SUCCESSFUL',
        data: resolves
      });
      // Act
      await productsController.getAllProducts(req, res)
      // Assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(resolves);
    });
  });
});
