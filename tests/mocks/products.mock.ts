import { NewProductType } from "../../src/types/newProduct";
import { Product } from "../../src/types/Product";

const productValid = {
    name: "Martelo de Thor",
    price: "30 peças de ouro",
    orderId: 4
  };

const returnProduct:NewProductType = {
  id: 6,
  name: "Martelo de Thor",
  price: "30 peças de ouro"
};

const mockModel: Product = {
  id: 6,
  name: 'Martelo de Thor',
  price: '30 peças de ouro',
  orderId: 4
}

const allProducts: Product[] = [
  {
    id: 1,
    name: "Pedra Filosofal",
    price: "20 gold",
    orderId: 2
  },
  {
    id: 2,
    name: "Lança do Destino",
    price: "100 diamond",
    orderId: 1
  }
]

  export default {
    productValid,
    returnProduct,
    mockModel,
    allProducts,
  }