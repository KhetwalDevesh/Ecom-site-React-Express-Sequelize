const express = require('express');
const cors = require('cors')
require('dotenv').config();
const app = express();
const router = require('./routes/product.route.js');

app.use(express.json());
app.use(cors());
app.use('/api/products',router);

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port no. ${process.env.PORT}`);
})

