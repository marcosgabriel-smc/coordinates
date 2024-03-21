var express = require('express');
var router = express.Router();

const { objCoordinates, defaultMap, defaultScreen } = require('../objCoordinates');

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
    const mapName = req.query.name;  
    
    const userMap = objCoordinates.map({
        mapName: mapName,
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
        const mapName = req.query.name;  
        
        const userScreen = objCoordinates.map({
            mapName: mapName,
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

    const userCoordinates = objCoordinates.coordinates({
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

    const userCoordinates = objCoordinates.transform({
        coordinates: objCoordinates.coordinates({x: x, y: y, map: defaultMap}),
        relativeMap: defaultScreen
    });

    res.json(userCoordinates);
});

module.exports = router;