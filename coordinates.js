class Map {
    constructor({name, minCoordX = 0, minCoordY = 0, maxCoordX, maxCoordY, isScreen}) {
        this.name = name; 
        this.minCoordX = minCoordX;
        this.minCoordY = minCoordY;
        this.maxCoordX = maxCoordX;
        this.maxCoordY = maxCoordY;
        this.isScreen = isScreen;
    }
}

const defaultMap = new Map({
    name: "Default Map",
    maxCoordX: 100,
    maxCoordY: 100,
    isScreen: false
});

const defaultScreen = new Map({
    name: "Default Screen",
    maxCoordX: 100,
    maxCoordY: 100,
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
        const newX = (this.x - this.map.minCoordX) * (relativeMap.maxCoordX - relativeMap.minCoordX) / (this.map.maxCoordX - this.map.minCoordX);
        relativeCoord.x = newX + relativeMap.minCoordX;        
       
        const newY = (this.y - this.map.minCoordY) * (relativeMap.maxCoordY - relativeMap.minCoordY) / (this.map.maxCoordY - this.map.minCoordY);
       
        if (this.map.isScreen === relativeMap.isScreen) {
            relativeCoord.y = newY;
        } else {
            relativeCoord.y = ((relativeMap.maxCoordY - relativeMap.minCoordY) - newY) + relativeMap.minCoordY;
        };
        return relativeCoord;
    }
}

let coords1 = new Coordinates(80, 20, defaultMap);
let coords2 = new Coordinates(80, 80, defaultScreen);



console.log(coords1.transform(defaultScreen));
console.log(coords2.transform(defaultMap));



