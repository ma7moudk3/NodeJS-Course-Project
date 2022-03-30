const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../utils/path');

const adminData = require("./admin");

router.get("/",(req,res,next)=>{
    console.log(adminData.products);
   // res.send("<h1>Hi From express<h1/>");
  // res.sendFile(path.join(rootDir,'views','shop.html')); // dirname global var that's hold obolute path on OS
  const products = adminData.products;

  res.render('../views/shop_bug', {prods: products, docTitle: 'Shop'});

}); 

module.exports = router;