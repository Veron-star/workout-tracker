const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
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

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout; 