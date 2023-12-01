const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const product = new Schema({
    image: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    total: {
        type: Number,
        required: true,
        default: 0
    }
});

const Product = mongoose.model("Product", product);
module.exports = Product;