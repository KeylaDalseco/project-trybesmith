import { expect } from 'chai';
import sinon from 'sinon';

import orderService from '../../../src/service/orders.service'
import OrderModel from '../../../src/database/models/order.model';
import orderMock from '../../mocks/order.mock';
import ProductModel from '../../../src/database/models/product.model';

describe('OrdersService', function () {
  beforeEach(function () { sinon.restore(); });

  describe('Testando função getAllOrders da rota /orders', function () {
    it('É possível listar as orders com produtos com sucesso', async function () {
      const resolves = OrderModel.bulkBuild(orderMock.allOrders, {
        include: { model: ProductModel, as: 'productIds', attributes: ['id'] },
      });
      sinon.stub(OrderModel, 'findAll').resolves(resolves);

      const { status, data } = await orderService.getAllOrders();
      expect(status).to.be.equal('SUCCESSFUL');
      expect(data).to.be.deep.equal(orderMock.resultOrder);
    });
  })
});