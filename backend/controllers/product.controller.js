const db = require('../models')

const Product = db.products

// add a product

const addProduct = async (req,res)=>{
    let productInfo = {
        user:req.body.user,
        name : req.body.name,
        image : req.body.image,
        brand : req.body.brand,
        price : req.body.price,
        type : req.body.type,
        description : req.body.description,
        numReviews : req.body.numReviews,
        countInStock : req.body.countInStock,
    }

    const product = await Product.create(productInfo);
    res.status(200).send(product);
    console.log(product);
}

// get all products

const getAllProducts = async (req, res) => {
    console.log(req.query.type);
    const types = req.query.type;
    let products;
    if(!types)
    {
        products = await Product.findAll({});
    }
    else
    {
        products = await Product.findAll({
            where:{
                type:types
            }
        })
    }
    res.status(200).send(products)

}

// get single product

const getOneProduct = async (req, res) => {

    let id = req.params.id
    let product = await Product.findOne({ where: { id: id }})
    res.status(200).send(product)
}

// update Product

const updateProduct = async (req, res) => {

    let id = req.params.id

    const product = await Product.update(req.body, { where: { id: id }})

    res.status(200).send(product)
}

// delete product by id

const deleteProduct = async (req, res) => {

    let id = req.params.id
    
    await Product.destroy({ where: { id: id }} )

    res.status(200).send('Product is deleted !')

}

module.exports = {
    addProduct, getAllProducts, getOneProduct, updateProduct,deleteProduct
}