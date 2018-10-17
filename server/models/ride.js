const mongoose = require('mongoose');
const RiderSchema = mongoose.Schema({
    name: {type: String, required: [true, "Who is riding with us??"], minlength: [2, "That's to short of a name!"]}
})

const RideSchema = mongoose.Schema({
    driver: {type: String, required: [true, "Who's driving this thing?"], minlength: [2, "Name must be more than 2 characters long"]},
    seats: {type: Number, required: [true, "We need a place to sit dude!"], min:[1, "Come on this is a car not a motorcycle!"], max: [8, "This is not the TARDIS!!"]},
    destination: {type: String, required: [true, "We need a place to go!"], minlength:[2, "2 or more characters please to describe destination!"]}, 
    riders: [RiderSchema]
})


mongoose.model('Ride', RideSchema)
mongoose.model('Rider', RiderSchema)