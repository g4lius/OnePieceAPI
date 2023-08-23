import mongoose from "mongoose"

const fruitSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ["Paramecia", "Zoan", "Logia"]
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character'
    }
}, { timestamps: true })

export const Fruit = mongoose.model('Fruit', fruitSchema)