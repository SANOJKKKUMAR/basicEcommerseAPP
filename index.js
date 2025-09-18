const express = require('express');
const app = express();
const port = 3000;
const userRoutes = require('./routeFile/user');
const productRoutes = require('./routeFile/product');
const cartRoutes = require('./routeFile/cart');

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/cart', cartRoutes);

app.use('/product', productRoutes);

app.use('/user', userRoutes);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
