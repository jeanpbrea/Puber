const mongoose = require('mongoose');
const Ride = mongoose.model('Ride');
const Rider = mongoose.model('Rider');

module.exports = {
    allRides: (req, res) => {
        Ride.find({}, (err, rides) => {
            if(err){
                res.json(err);
            }else{
                res.json(rides);
            }
        })
    },
    
    oneRide: (req, res) => {
        Ride.findOne({_id: req.params.id}, (err, ride)=>{
            if(err){
                res.json(err);
            }else{
                res.json(ride);
            }
        })
    },

    createRide: (req, res) => {
        Ride.create(req.body, (err, ride) =>{
            if(err){
                res.json(err);
            }else{
                res.json(ride);
            }
        })
    },

    editRide: (req, res) => {
        Ride.update({_id: req.params.id}, req.body, (err, data) =>{
            if(err){
                res.json(err);
            }else{
                Ride.findOneAndUpdate({_id: req.params.id}, {$push: {riders: data}}, (err, data) =>{
                    if(err){
                        res.json(err);
                    }else{
                        res.json(data);
                    }
                })
            }
        })
    },
    
    deleteRide: (req, res) => {
        Ride.remove({_id: req.params.id}, (err, data) =>{
            if(err){
                res.json(err);
            }else{
                res.json(data);
            }
        })
    },

    addRider: (req, res) => {
        Rider.create(req.body, (err, rider) =>{
            if(err){
                res.json(err);
            }else{
                Ride.update({_id: req.params.id}, {$push: {riders: rider}}, (err, data) => {
                    if(err){
                        console.log("Could not Update");
                        res.json(err);  
                    }else{
                        res.json(data);
                    }
                })
            }
        })
    },

    removeRider: (req, res) =>{
        Ride.update({_id: req.params.r_id}, {$pull: {riders: {_id: req.params.rider_id}}}, (err, data) => {
            if(err){
                res.jsnon(err);
            }else{
                res.json(data);
            }
        })
    }
}