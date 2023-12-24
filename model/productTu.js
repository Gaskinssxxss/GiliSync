const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productTu = new Schema({
    imageUrl: {
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

const ProductTu = mongoose.model("ProductTu", productTu);
module.exports = ProductTu;