const express = require('express');

const router = express.Router();

router.get("/add_product",(req,res,next)=>{

    res.send('<form method="POST" action="/product"> <input type="text" name="title"/> </form>');
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