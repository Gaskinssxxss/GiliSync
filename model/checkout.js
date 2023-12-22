
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const checkout = new Schema({
    username: {
        type: String,
        required: true,
    },
    checkoutItems: [
        {
            productName: {
                type: String,
                required: true,
            },
            ProductQuantity: {
                type: Number,
                required: true,
            },
            ProductPrice: {
                type: Number,
                required: true,
            },
        }
    ],
    status: {
        type: String,
        enum: ['success', 'pending'],
        default: 'pending',
    },
    ProductCheckoutDate: {
        type: Date,
        default: Date.now(),
    },
});

const Checkout = mongoose.model("Checkout", checkout);
module.exports = Checkout;
