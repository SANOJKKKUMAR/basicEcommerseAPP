// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('User List');
// });
//  router.get('/:id', (req, res) => {
//   res.send(`User ID: ${req.params.id}`);
// });

// router.post('/', (req, res) => {
//   res.send('add a user');
// });

// module.exports = router;


const userList=(req,res)=>{
    res.send('user list')
} 
module.exports={userList}