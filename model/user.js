const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    namaRekening: {
        type: String,
        require: true,
    },
    namaBank: {
        type: String,
        require: true
    },
    nomorRekening: {
        type: Number,
        require: true
    },
    role: {
        type: String,
        enum: ['user', 'admin', 'editor'],
        default: 'user',
    },
    registrationDate: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

user.methods.comparePassword = async function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", user);
module.exports = User;