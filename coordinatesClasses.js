class Map {
    constructor({name, minX = 0, minY = 0, maxX, maxY, isScreen}) {
        this.name = name; 
        this.minX = minX;
        this.minY = minY;
        this.maxX = maxX;
        this.maxY = maxY;
        this.isScreen = isScreen;
    }
}

const defaultMap = new Map({
    name: "Default Map",
    minX: 0,
    minY: 0,
    maxX: 100,
    maxY: 100,
    isScreen: false
});

const defaultScreen = new Map({
    name: "Default Screen",
    minX: 0,
    minY: 0,
    maxX: 100,
    maxY: 100,
    isScreen: true
});

class Coordinates {
    constructor(x, y, map) {
        this.x = x;
        this.y = y;
        this.map = map;
    }

    transform(relativeMap){
        const relativeCoord = new Coordinates('', '', relativeMap);
        const newX = (this.x - this.map.minX) * (relativeMap.maxX - relativeMap.minX) / (this.map.maxX - this.map.minX);
        relativeCoord.x = newX + relativeMap.minX;        
       
        const newY = (this.y - this.map.minY) * (relativeMap.maxY - relativeMap.minY) / (this.map.maxY - this.map.minY);
       
        if (this.map.isScreen === relativeMap.isScreen) {
            relativeCoord.y = newY;
        } else {
            relativeCoord.y = ((relativeMap.maxY - relativeMap.minY) - newY) + relativeMap.minY;
        };
        return relativeCoord;
    }
}

// let coords1 = new Coordinates(80, 20, defaultMap);
// let coords2 = new Coordinates(80, 80, defaultScreen);

const coord3 = new Coordinates(10, 18, defaultMap);

let relative_coord = coord3.transform(defaultScreen);

// console.log(coord3);
// console.log(relative_coord);

// console.log(coords1.transform(defaultScreen));
// console.log(coords2.transform(defaultMap));



module.exports = { Map, Coordinates, defaultMap, defaultScreen };