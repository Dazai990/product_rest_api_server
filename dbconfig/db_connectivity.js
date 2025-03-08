const mongoose = require('mongoose')
const dotenv = require('dotenv')

function connectToMongoDB(){
  dotenv.config();
  mongoose.connect(process.env.DB_URL)
  .then(()=>console.log('Connected to MongoDB Database Server'))
  .catch(err=>console.error(err))

}

module.exports = connectToMongoDB;