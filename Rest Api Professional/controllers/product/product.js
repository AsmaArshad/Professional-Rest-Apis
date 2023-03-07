const db = require('../config/db/db.js');

//Add Product
exports.AddProduct = async (req, res) => {
    //UserData we get when we decode the token which is in auth.js
    var data = req.userData;
    var productName = req.body.ProductName;
    await db('product').insert({ Product:productName}).then((product_res) => {
        res.status(201).json({
            message_type:"success",
            message: `Product Added Successfully by user with Id ${data.Id} and Email ${data.Email}!`,
        })
    }).catch((err)=> {
        res.json(err);
    })
}