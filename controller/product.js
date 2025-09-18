// const express = require('express');

// const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('Product List');
// });
// router.get('/:id', (req, res) => {
//   res.send(`Product ID: ${req.params.id}`);
// });

// router.post('/', (req, res) => {
//   res.send('add a product');
// }); 
// module.exports = router;

const productList=(req,res)=>{
    res.send('product list')
} 

module.exports={productList}