import express from 'express';
import productRouter from './routers/products.router';
import ordersRouter from './routers/orders.router';
import loginRouter from './routers/login.route';

const app = express();

app.use(express.json());
app.use(productRouter);
app.use(ordersRouter);
app.use(loginRouter);

export default app;
