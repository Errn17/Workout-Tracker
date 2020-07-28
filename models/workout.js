const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercise: [
    {
      name: {
        type: String,
        trim: true,
        required: "Please insert the name of the workout",
      },
      type: {
        type: String,
        trim: true,
        required: "Please insert the type of exercise you plan to do",
      },
      weight: {
        type: Number,
        required: "Please insert how much weight you plan to lift",
      },
      sets: {
        type: Number,
        required: "Please insert how many sets you plan to do",
      },
      reps: {
        type: Number,
        required: "Please insert how many reps you plan to do",
      },
      duration: {
        type: Number,
        required: "Please insert how long you plan to workout",
      },

      // liftSesh: String,
    },
  ],
});

workoutSchema.method.setWeightLb = () => {
  let weightLb = `${weight}lb.`;
  return weightLb;
};

// workoutSchema.method.setLiftSesh = () => {
//   const liftSesh = `Your next workout is ${name} which will work your desired muscles ${type}, ${sets} of ${reps} for ${duration}`;
// };

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
