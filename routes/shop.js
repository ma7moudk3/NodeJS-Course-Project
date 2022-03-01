const express = require('express');

const router = express.Router();


router.get("/",(req,res,next)=>{
    console.log('MiddleWare 22');
    res.send("<h1>Hi From express<h1/>");
}); 

module.exports = router;