const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../utils/path');

const products = [];

router.get("/add-product",(req,res,next)=>{

 //   res.send('<form method="POST" action="/admin/product"> <input type="text" name="title"/> </form>');

 //res.sendFile(path.join(rootDir,"views","add-product.html"));
 res.render('../views/add-product');

}); 

router.post("/add-product",(req,res,next)=>{
products.push({'title':req.body.title})
res.redirect('/');
}); 



// app.use((req,res,next)=>{
//     console.log('MiddleWare');
//     next(); // Allow to move to second middlleware
// }); //midlleware


exports.routes = router;
exports.products = products;