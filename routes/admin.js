const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../utils/path');

router.get("/add-product",(req,res,next)=>{

 //   res.send('<form method="POST" action="/admin/product"> <input type="text" name="title"/> </form>');

 res.sendFile(path.join(rootDir,"views","add-product.html"));
}); 

router.post("/product",(req,res,next)=>{
    console.log(req.body['title']);

res.redirect('/');
}); 



// app.use((req,res,next)=>{
//     console.log('MiddleWare');
//     next(); // Allow to move to second middlleware
// }); //midlleware


module.exports = router;