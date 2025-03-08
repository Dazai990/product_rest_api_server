const express = require('express')
const connectToMongoDB = require('./dbconfig/db_connectivity')
const productServiceRouter = require('./controllers/product_service_router')

const app = express();
connectToMongoDB();

app.use('/api/products',productServiceRouter)

app.listen(process.env.PORT,()=>console.log(`Product RESTFul 
    Service started and listening on port ${process.env.PORT}`))
