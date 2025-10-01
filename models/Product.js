const mongoose = require('mongoose');

// Product schema definition
const productSchema = new mongoose.Schema(
    {
        // Product info
        name: {
            type: String,
            required: [true, "Product name is required"],
            trim: true
        },

        description: {
            type: String,
            default: "",
            trim: true
        },

        // Inventory fields
        stock_quantity: {
            type: Number,
            default: 0,
            min: [0, "Stock cannot be negative"]
        },

        low_stock_threshold: {
            type: Number,
            default: 5,
            min: [0, "Threshold cannot be negative"]
        }
    },
    {
        timestamps: true 
    }
);

module.exports = mongoose.model('Product', productSchema);
