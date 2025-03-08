const express = require('express');
const productRouter = express.Router();
const Product = require('../models/product_model')

//get all products
productRouter.get('/all',async (req,res)=>{

  const Products = await Product.find()

   res.status(200).json(Products)
})

//create new product resource
productRouter.post("/add-product",express.json(),async (req,res)=>{
   const {name,brand,price} = req.body;

   const product = new Product({
      name:name,
      brand:brand,
      price:price
   });
   await product.save();

   res.status(200).json({
      message: `Product ${brand} ${name} with price ${price} added successfully!`
   })
})

//update product price by name and brand
productRouter.put("/update-product",express.json(), async (req,res)=>{
   const {name,brand,price} = req.body;
     
   await Product.updateOne({name:name,brand:brand},{$set:{price:price}})

   res.status(200).json({
      message: `Product ${brand} ${name} is updated with price ${price} successfully!`
   })

});

//delete product by name and brand and price
productRouter.delete("/delete-product",express.json(), async (req,res)=>{
   const {name,brand,price} = req.body;

   await Product.deleteOne({name:name,brand:brand,price:price})

   res.status(200).json({
      message: `Product ${brand} ${name} having price ${price} is deleted successfully!`
   })
})

module.exports = productRouter;