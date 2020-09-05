const db = require("../models");

module.exports = function (app) {
   
    app.get("/api/workouts", (req, res) => {
         db.workOut.find({}).then(dbWorkout => {
             dbWorkout.forEach(workout => {
                 var total = 0;
                 workout.exercise.forEach(e => {
                     total += e.duration;
                 });
                 workout.totalDuration = total;
             });
             res.json(dbWorkout);
         }).catch(err => {
             res.json(err);
         });
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.workOut.findOneAndUpdate(
           { _id: req.params.id },
           {
               $inc: { totalDuration: req.body.duration },
               $push: { exercise:req.body }
           },
           { new: true } 
        ).then(dbWorkout => {
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });

    app.post("/api/workouts", ({ body }, res) => {
        db.workOut.create(body).then((dbWorkout => {
            res.json(dbWorkout);
        })).catch(err => {
            res.json(err);
        });
    });

    app.get("/api/workouts/range", (req, res) => {
        db.workOut.find({}).then(dbWorkout => {
            console.log("dbWorkout");
            console.log("ALL WORKOUTS");
            res.json(dbWorkout);
        }).catch(err => {
            res.json(err);
        });
    });
}