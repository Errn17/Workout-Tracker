const router = require("express").Router();
const Workout = require("../models/workout.js");
// const db = require("./models");

router.post("/api/workout", (req, res) => {
  Workout.create(req.body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// router.put("/api/workout/:id", ({ body, params }, res) => {
//   Workout.updateOne({ _id: params.id }, { $push: { Workout: body } })
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

router.get("/api/workout", (req, res) => {
  Workout.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
