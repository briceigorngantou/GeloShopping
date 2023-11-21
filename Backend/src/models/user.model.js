import mongoose from 'mongoose';
const productSchema = mongoose.Schema(
    {
        id: {
            type: String,
            required: [true, 'Please enter a product id'],
        },

        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true,
        },
        averageRating: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
