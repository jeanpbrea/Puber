const rideController = require('./../controllers/riders');
const path = require('path');

module.exports = (app) => {
    app.get('/api/rides', rideController.allRides);
    app.get('/api/rides/:id', rideController.oneRide);
    app.post('/api/rides/new', rideController.createRide);
    app.put('/api/rides/:id', rideController.editRide);
    app.delete('/api/rides/:id', rideController.deleteRide);
    app.post('/api/rides/:id/rider', rideController.addRider);
    app.delete('/api/rides/:r_id/rider/:rider_id',rideController.removeRider);
    app.all('*', (req, res) => res.sendFile(path.resolve('./public/dist/public/index.html')));
}