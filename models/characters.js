import mongoose from "mongoose"

const characterSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fruit: String,
    currentAffiliation: [String],
    role: [String],
    previousAffiliation: [String],
    origin: String,
    provenance: String,
    currentBounty: Number,
    previousBounty: {
        type: [Number],
        default: null
    }
}, { timestamps: true })

export const Character = mongoose.model('Character', characterSchema)