var express = require('express');
var router = express.Router();

const { Map, Coordinates, defaultMap, defaultScreen } = require('../coordinatesClasses');

router.get('/new-map', function(req, res, next) {
    res.json(defaultMap);
});

router.get('/new-screen', function(req, res, next) {
    // ...
});

router.get('/coordinates', function(req, res, next) {
    // ...
});

router.get('/transform-coordinates', function(req, res, next) {
    // ...
});

module.exports = router;