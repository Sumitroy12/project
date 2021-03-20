const mongoose = require('mongoose')

const mongoosePaginate = require('mongoose-paginate-v2');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"]
    },
    role: {
        type: Number,
        default: 0 // 0 = user, 1 = admin
    },
    avatar: {
        type: String,
        default: "https://image.flaticon.com/icons/png/128/1077/1077114.png"
    },
    image: {type: String},
    createdForms: []
}, {
    timestamps: true
})

userSchema.plugin(mongoosePaginate);
User = mongoose.model('User', userSchema, 'Users');
module.exports = User;