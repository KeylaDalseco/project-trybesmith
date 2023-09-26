import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';

import orderService from '../../../src/service/orders.service';
import orderController from '../../../src/controllers/orders.controller';
import OrderModel from '../../../src/database/models/order.model';
import orderMock from '../../mocks/order.mock';
import { ServiceResponse } from '../../../src/types/ServiceResponse';
import { OrderAndProducts } from '../../../src/types/orderWithProducts';

chai.use(sinonChai);

describe('OrdersController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  describe('#getAllProducts', function () {
    it('deve retornar todos os produtos', async function () {
      // Arrange      
      const response: ServiceResponse<OrderAndProducts []> = {
      status: 'SUCCESSFUL',
      data: orderMock.resultOrder,
    }
      sinon.stub(orderService, 'getAllOrders').resolves(response);
      // Act
      await orderController.getAllOrders(req, res)
      // Assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(orderMock.resultOrder);
    });
  });
});
