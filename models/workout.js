const mongoose = require("mongoose");
const schema = mongoose.schema;

const workoutSchema = new schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [{
        name: {
            type: String,
            trim: true,
        },
        type: {
            type: String,
            trim: true,
        },
        reps: {
            type: Number,
            default: 0,
        },
        sets: {
            type: Number,
            default: 0,
        },
        distance: {
            type: Number,
            default: 0,
        },
        duration: Number, 
            weight: {
                type: Number,
                default: 0,
            },
    }],
    totalDuration: {
        type: Number,
        default: 0,
    }
});

const workOut = mongoose.model("workout", workoutSchema);

module.exports = workOut; 