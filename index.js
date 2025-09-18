const express = require('express');
const app = express();
const port = 3000;
// const userRoutes = require('./controller/user');
// const productRoutes = require('./controller/product');
// const cartRoutes = require('./controller/cart');


const {userList}=require('./controller/user')
const {productList}=require('./controller/product')
const {cartProduct}=require('./controller/cart')

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.use('/cart', cartProduct);

app.use('/product', productList);

app.use('/user', userList);



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
