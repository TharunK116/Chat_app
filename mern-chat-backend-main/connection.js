const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb://localhost:27017/chatmern`, ()=> {
  console.log('connected to mongodb')
})
