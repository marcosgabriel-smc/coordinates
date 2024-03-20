var express = require('express');
var router = express.Router();

const { Map, Coordinates, defaultMap, defaultScreen } = require('../coordinatesClasses');

router.get('/default-map', function(req, res, next) {
    res.json(defaultMap);
});

router.get('/default-screen', function(req, res, next) {
    res.json(defaultScreen);
});

router.get('/new-map', function(req, res, next) {    
    // /new-map?maxX=100&maxY=100&minX=10&name=primeiro+mapa
    const maxX = parseInt(req.query.maxX);
    const maxY = parseInt(req.query.maxY);
    const minX = req.query.minX ?? 0;
    const minY = req.query.minY ?? 0;
    const name = req.query.name;  
    
    const userMap = new Map({
        name: name,
        maxX: maxX,
        maxY: maxY,
        minX: parseInt(minX),
        minY: parseInt(minY),
        isScreen: false
    });
    res.json(userMap);
});

router.get('/new-screen', function(req, res, next) {
        // /new-screen?maxX=100&maxY=100&minX=10&name=Primeira+tela
        const maxX = parseInt(req.query.maxX);
        const maxY = parseInt(req.query.maxY);
        const minX = req.query.minX ?? 0;
        const minY = req.query.minY ?? 0;
        const name = req.query.name;  
        
        const userScreen = new Map({
            name: name,
            maxX: maxX,
            maxY: maxY,
            minX: parseInt(minX),
            minY: parseInt(minY),
            isScreen: true
        });

        res.json(userScreen);
});

router.get('/coordinates', function(req, res, next) {
    // /coordinates?x=10&y=18
    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);

    const userCoordinates = new Coordinates({
        x: x,
        y: y,
        map: defaultMap
    });
    
    res.json(userCoordinates);
});

router.get('/transform-coordinates', function(req, res, next) {
    // /transform-coordinates?x=10&y=18
    const x = parseInt(req.query.x);
    const y = parseInt(req.query.y);

    const userCoordinates = new Coordinates({
        x: x,
        y: y,
        map: defaultMap
    });

    res.json(userCoordinates);
});

module.exports = router;