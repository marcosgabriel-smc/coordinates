const objCoordinates = {
    map:  function(params) {        
        return {
            mapName: params.mapName,
            minX: params.minX ?? 0,
            minY: params.minY ?? 0,
            maxX: params.maxX, 
            maxY: params.maxY,
            isScreen: params.isScreen
        };
    },

    coordinates: function(params) {
        let x = ((params.x - params.map.minX) * 100) / (params.map.maxX - params.map.minX);
        let y = ((params.y - params.map.minY) * 100) / (params.map.maxY - params.map.minY);
        return {
            x: x/100,
            y: params.map.isScreen ? (100 - y)/100 : y/100
        };
        // Floats problem. 
    },

    transform: function(params) {
        let x = params.coordinates.x;
        let y = params.coordinates.y;
        let relativeMap = params.relativeMap;

        return {
            x: Math.round((relativeMap.maxX - relativeMap.minX) * x + relativeMap.minX),
            y: relativeMap.isScreen ? Math.round(relativeMap.maxY - ((relativeMap.maxY - relativeMap.minY) * y + relativeMap.minY)) : Math.round((relativeMap.maxY - relativeMap.minY) * y + relativeMap.minY)
        };

    }
};

const defaultMap = objCoordinates.map({
    mapName: "Default Map",
    minX: 0,
    minY: 0,
    maxX: 100, 
    maxY: 100,
    isScreen: false
});

const defaultScreen = objCoordinates.map({
    mapName: "Default Screen",
    minX: 0,
    minY: 0,
    maxX: 100, 
    maxY: 100,
    isScreen: true
});

module.exports = {objCoordinates, defaultMap, defaultScreen };