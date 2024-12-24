const mongoose = require('mongoose');

const menuItem = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    price:{
        type : Number,
        required : true,
    },
    taste:{
        type : String,
        enum : ["Sweet","Spicy","Sour"],
        required : true,
    },
    is_drink:{
        type : Boolean,
        default : false,
    },
    num_sales : {
        type : Number,
        default : 0,
    }

})

const Menu = mongoose.model('Menu',menuItem);

module.exports = Menu;