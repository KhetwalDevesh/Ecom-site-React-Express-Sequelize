module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define("product", {
        user : {
            type : DataTypes.STRING,
            allowNull:true,
        },
        name : {
            type : DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING
        },
        brand: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.INTEGER,
        },
        type:{
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT
        },
        numReviews : {
            type : DataTypes.INTEGER,
        },
        countInStock : {
            type : DataTypes.INTEGER,
        }
    
    })

    return Product

}