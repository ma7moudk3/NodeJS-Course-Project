const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir = require('../utils/path');


router.get("/",(req,res,next)=>{
    console.log('MiddleWare 22');
   // res.send("<h1>Hi From express<h1/>");
   res.sendFile(path.join(rootDir,'views','shop.html')); // dirname global var that's hold obolute path on OS
}); 

module.exports = router;