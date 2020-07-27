const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workout", ({ body }, res) => {
  Workout.create(body)
    .then((Workout) => {
      res.json(Workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workout/:id", ({ body, params }, res) => {
  Workout.updateOne({ _id: params.id })
    .then((Workout) => {
      res.json(Workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workout", (req, res) => {
  Workout.find({})
    .then((Workout) => {
      res.json(Workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
