const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },

        image: {
            type: String
        },

        category: {
            type: String
        },

        description: {
            type: String
        },

        featured: {
            type: Boolean
        },

        price: {
            type: Number
        },


        quantity: {
            type: Number
        },
        rating: {
            type: Number
        },
        restaurant: {
            type: String
        },
        available: {
            type: Boolean
        }
    }
)
//console.log(foodSchema)
const foods = new mongoose.model('foods', foodSchema)

module.exports = foods;