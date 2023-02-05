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


//  {
//     "name": "Lime",
//     "image":
//       "https://cdn.shopify.com/s/files/1/0322/8824/3844/products/Courser_Uno_Men_White_Luxury_Sneaker_Side_1512x.jpg?v=1638211212",
//     "description":
//       "Do you know that feeling when you first sink into the fine leather seats of a performance automobile?  The leather and ergonomics of the seat seem to hug you and pull you in before you embark on an exhilarating ride.  That is Courser.",
//     "brand": "Adidas",
//     "type" : "Sneakers",
//     "price": 535,
//     "countInStock": 0,
//     "rating": 4,
//     "numReviews": 12
// }