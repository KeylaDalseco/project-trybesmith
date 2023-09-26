import { Order } from "../../src/types/Order";
import { OrderAndProducts } from "../../src/types/orderWithProducts";

const allOrders: Order[] = [
  {
    id: 1,
    userId: 1,
    productIds: [{ id: 1}, { id: 2 }]
  },
  {
    id: 2,
    userId: 2,
    productIds: [{ id: 3 }, { id: 4 }]
  }
];

const resultOrder: OrderAndProducts[] = [
    {
      id: 1,
      userId: 1,
      productIds: [1, 2]
    },
    {
      id: 2,
      userId: 2,
      productIds: [3, 4]
    }
  ]

  export default {
    allOrders,
    resultOrder,
  }