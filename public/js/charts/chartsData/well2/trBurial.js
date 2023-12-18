﻿export const graphicAttributes = {
    upperReference: true,
    sideReference: true,
    horizontalLines: false,
    colorMap: true,
    fillPatterns: true,
    extraPoligons: false,
    well:1
}

const proportion = 0.65;
const width = proportion*800;
const height = proportion*600;

const ml = width*50/800;
const mr = width*200/800;
const mt = height*50/600;
const mb = height*150/600;
const alphaName = "TR (%)";

export { proportion,width, height, ml, mr, mt, mb, alphaName };

const datosIniciales = [
["Cuaternario Sup",1.8,5,0,"black","black"],				
["Cuaternario Sup",0,5,0,"black","black"],				
["Cuaternario Inf",2.7,5,0,"black","black"],			
["Cuaternario Inf",1.8,5,0,"black","black"],			
["Cuaternario Inf",0,208,0,"black","black"],			
["Plioceno Sup2",3.6,5,0,"black","black"],				
["Plioceno Sup2",2.7,5,0,"black","black"],				
["Plioceno Sup2",1.8,833,0,"black","black"],			
["Plioceno Sup2",0,990,0,"black","black"],				
["Plioceno Sup1",3.8,5,0,"black","black"],				
["Plioceno Sup1",3.6,5,0,"black","black"],				
["Plioceno Sup1",2.7,242,0,"black","black"],			
["Plioceno Sup1",1.8,1038,0,"black","black"],			
["Plioceno Sup1",0,1190,0,"black","black"],				
["Plioceno Inf RES",4,5,0,"black","black"],				
["Plioceno Inf RES",3.8,5,0,"black","black"],				
["Plioceno Inf RES",3.6,70,0,"black","black"],				
["Plioceno Inf RES",2.7,294,0,"black","black"],				
["Plioceno Inf RES",1.8,1087,0,"black","black"],			
["Plioceno Inf RES",0,1237,0,"black","black"],				
["Plioceno Inf Base",5.3,5,0,"black","black"],				
["Plioceno Inf Base",4,5,0,"black","black"],				
["Plioceno Inf Base",3.8,64,0,"black","black"],				
["Plioceno Inf Base",3.6,127,0,"black","black"],			
["Plioceno Inf Base",2.7,346,0,"black","black"],			
["Plioceno Inf Base",1.8,1136,0,"black","black"],			
["Plioceno Inf Base",0,1285,0,"black","black"],				
["Mioceno Sup RES",6.8,5,0,"black","black"],				
["Mioceno Sup RES",5.3,5,0,"black","black"],				
["Mioceno Sup RES",4,126,0,"black","black"],				
["Mioceno Sup RES",3.8,178,0,"black","black"],				
["Mioceno Sup RES",3.6,236,0,"black","black"],				
["Mioceno Sup RES",2.7,447,0,"black","black"],				
["Mioceno Sup RES",1.8,1232,0,"black","black"],				
["Mioceno Sup RES",0,1379,0,"black","black"],				
["Mioceno Sup Base",11.6,5,0,"black","black"],				
["Mioceno Sup Base",6.8,5,0,"black","black"],				
["Mioceno Sup Base",5.3,174,0,"black","black"],				
["Mioceno Sup Base",4,286,0,"black","black"],				
["Mioceno Sup Base",3.8,337,0,"black","black"],				
["Mioceno Sup Base",3.6,393,0,"black","black"],				
["Mioceno Sup Base",2.7,596,0,"black","black"],				
["Mioceno Sup Base",1.8,1376,0,"black","black"],				
["Mioceno Sup Base",0,1519,0,"black","black"],				
["Mioceno Medio RES",13,5,0,"black","black"],				
["Mioceno Medio RES",11.6,5,0,"black","black"],				
["Mioceno Medio RES",6.8,601,0,"black","black"],				
["Mioceno Medio RES",5.3,750,0,"black","black"],				
["Mioceno Medio RES",4,851,0,"black","black"],				
["Mioceno Medio RES",3.8,900,0,"black","black"],				
["Mioceno Medio RES",3.6,954,0,"black","black"],				
["Mioceno Medio RES",2.7,1145,0,"black","black"],				
["Mioceno Medio RES",1.8,1912,0,"black","black"],				
["Mioceno Medio RES",0,2047,0,"black","black"],				
["Mioceno Medio Base",16,5,0,"black","black"],				
["Mioceno Medio Base",13,5,0,"black","black"],				
["Mioceno Medio Base",11.6,161,0,"black","black"],				
["Mioceno Medio Base",6.8,734,0,"black","black"],				
["Mioceno Medio Base",5.3,882,0,"black","black"],				
["Mioceno Medio Base",4,982,0,"black","black"],				
["Mioceno Medio Base",3.8,1031,0,"black","black"],				
["Mioceno Medio Base",3.6,1084,0,"black","black"],				
["Mioceno Medio Base",2.7,1274,0,"black","black"],				
["Mioceno Medio Base",1.8,2038,0,"black","black"],				
["Mioceno Medio Base",0,2171,0,"black","black"],				
["Mioceno Inf",23,5,0,"black","black"],				
["Mioceno Inf",16,5,0,"black","black"],				
["Mioceno Inf",13,166,0,"black","black"],				
["Mioceno Inf",11.6,306,0,"black","black"],				
["Mioceno Inf",6.8,865,0,"black","black"],				
["Mioceno Inf",5.3,1012,0,"black","black"],				
["Mioceno Inf",4,1111,0,"black","black"],				
["Mioceno Inf",3.8,1159,0,"black","black"],				
["Mioceno Inf",3.6,1213,0,"black","black"],				
["Mioceno Inf",2.7,1401,0,"black","black"],				
["Mioceno Inf",1.8,2164,0,"black","black"],				
["Mioceno Inf",0,2295,0,"black","black"],				
["Oligoceno",25,5,0,"black","black"],				
["Oligoceno",23,5,0,"black","black"],				
["Oligoceno",16,1175,0,"black","black"],				
["Oligoceno",13,1310,0,"black","black"],				
["Oligoceno",11.6,1437,0,"black","black"],				
["Oligoceno",6.8,1951,0,"black","black"],				
["Oligoceno",5.3,2092,0,"black","black"],				
["Oligoceno",4,2186,0,"black","black"],				
["Oligoceno",3.8,2233,0,"black","black"],				
["Oligoceno",3.6,2285,0,"black","black"],				
["Oligoceno",2.7,2468,0,"black","black"],				
["Oligoceno",1.8,3218,0,"black","black"],				
["Oligoceno",0,3341,0,"black","black"],				
["Oligoceno-Eoceno",48.6,5,0,"black","black"],				
["Oligoceno-Eoceno",25,5,0,"black","black"],				
["Oligoceno-Eoceno",23,201,0,"black","black"],				
["Oligoceno-Eoceno",16,1327,0,"black","black"],				
["Oligoceno-Eoceno",13,1460,0,"black","black"],				
["Oligoceno-Eoceno",11.6,1586,0,"black","black"],				
["Oligoceno-Eoceno",6.8,2097,0,"black","black"],				
["Oligoceno-Eoceno",5.3,2236,0,"black","black"],				
["Oligoceno-Eoceno",4,2330,0,"black","black"],				
["Oligoceno-Eoceno",3.8,2377,0,"black","black"],				
["Oligoceno-Eoceno",3.6,2428,0,"black","black"],				
["Oligoceno-Eoceno",2.7,2611,0,"black","black"],				
["Oligoceno-Eoceno",1.8,3360,0,"black","black"],				
["Oligoceno-Eoceno",0,3482,0,"black","black"],				
["Eoceno-Paleoceno",65.5,5,0,"black","black"],				
["Eoceno-Paleoceno",48.6,5,0,"black","black"],				
["Eoceno-Paleoceno",25,1424,0,"black","black"],				
["Eoceno-Paleoceno",23,1593,0,"black","black"],				
["Eoceno-Paleoceno",16,2641,0,"black","black"],				
["Eoceno-Paleoceno",13,2763,0,"black","black"],				
["Eoceno-Paleoceno",11.6,2883,0,"black","black"],				
["Eoceno-Paleoceno",6.8,3375,0,"black","black"],				
["Eoceno-Paleoceno",5.3,3509,0,"black","black"],				
["Eoceno-Paleoceno",4,3598,0,"black","black"],				
["Eoceno-Paleoceno",3.8,3644,0,"black","black"],				
["Eoceno-Paleoceno",3.6,3696,0,"black","black"],				
["Eoceno-Paleoceno",2.7,3874,0,"black","black"],				
["Eoceno-Paleoceno",1.8,4615,0,"black","black"],				
["Eoceno-Paleoceno",0,4732,0,"black","black"],				
["Cretácico Superior",115,5,0,"black","black"],				
["Cretácico Superior",65.5,5,0,"black","black"],				
["Cretácico Superior",48.6,1813,0,"black","black"],				
["Cretácico Superior",25,3077,0,"black","black"],				
["Cretácico Superior",23,3240,0,"black","black"],				
["Cretácico Superior",16,4257,0,"black","black"],				
["Cretácico Superior",13,4370,0,"black","black"],				
["Cretácico Superior",11.6,4486,0,"black","black"],				
["Cretácico Superior",6.8,4963,0,"black","black"],				
["Cretácico Superior",5.3,5093,0,"black","black"],				
["Cretácico Superior",4,5179,0,"black","black"],				
["Cretácico Superior",3.8,5225,0,"black","black"],				
["Cretácico Superior",3.6,5275,0,"black","black"],				
["Cretácico Superior",2.7,5451,0,"black","black"],				
["Cretácico Superior",1.8,6186,0,"black","black"],				
["Cretácico Superior",0,6299,0,"black","black"],				
["Cretácico Inferior",145,5,0,"black","black"],				
["Cretácico Inferior",115,5,0,"black","black"],				
["Cretácico Inferior",65.5,1300,0,"black","black"],				
["Cretácico Inferior",48.6,3023,0,"black","black"],				
["Cretácico Inferior",25,4249,0,"black","black"],				
["Cretácico Inferior",23,4409,0,"black","black"],				
["Cretácico Inferior",16,5416,0,"black","black"],				
["Cretácico Inferior",13,5525,0,"black","black"],				
["Cretácico Inferior",11.6,5640,0,"black","black"],				
["Cretácico Inferior",6.8,6111,0,"black","black"],				
["Cretácico Inferior",5.3,6240,0,"black","black"],				
["Cretácico Inferior",4,6324,0,"black","black"],				
["Cretácico Inferior",3.8,6369,0,"black","black"],				
["Cretácico Inferior",3.6,6419,0,"black","black"],				
["Cretácico Inferior",2.7,6594,0,"black","black"],				
["Cretácico Inferior",1.8,7326,0,"black","black"],				
["Cretácico Inferior",0,7437,0,"black","black"],				
["Titoniano",152,5,0,"black","black"],				
["Titoniano",145,5,0,"black","black"],				
["Titoniano",115,366,0,"black","black"],				
["Titoniano",65.5,1625,0,"black","black"],				
["Titoniano",48.6,3335,0.36,"black","black"],				
["Titoniano",25,4555,17.23,"black","black"],				
["Titoniano",23,4715,20.12,"black","black"],				
["Titoniano",16,5720,51.24,"black","black"],				
["Titoniano",13,5828,63.96,"black","black"],				
["Titoniano",11.6,5942,67.59,"black","black"],				
["Titoniano",6.8,6412,79.21,"black","black"],				
["Titoniano",5.3,6540,81.52,"black","black"],				
["Titoniano",4,6624,83.17,"black","black"],				
["Titoniano",3.8,6669,83.37,"black","black"],				
["Titoniano",3.6,6719,83.57,"black","black"],				
["Titoniano",2.7,6894,84.64,"black","black"],				
["Titoniano",1.8,7626,85.84,"black","black"],				
["Titoniano",0,7737,89.38,"black","black"],				
["Kimmeridgiano",156,5,0,"black","black"],				
["Kimmeridgiano",152,5,0,"black","black"],				
["Kimmeridgiano",145,255,0,"black","black"],				
["Kimmeridgiano",115,519,0,"black","black"],				
["Kimmeridgiano",65.5,1733,0,"black","black"],				
["Kimmeridgiano",48.6,3436,0,"black","black"],				
["Kimmeridgiano",25,4654,0,"black","black"],				
["Kimmeridgiano",23,4813,0,"black","black"],				
["Kimmeridgiano",16,5817,0,"black","black"],				
["Kimmeridgiano",13,5926,0,"black","black"],				
["Kimmeridgiano",11.6,6039,0,"black","black"],				
["Kimmeridgiano",6.8,6509,0,"black","black"],				
["Kimmeridgiano",5.3,6637,0,"black","black"],				
["Kimmeridgiano",4,6722,0,"black","black"],				
["Kimmeridgiano",3.8,6767,0,"black","black"],				
["Kimmeridgiano",3.6,6817,0,"black","black"],				
["Kimmeridgiano",2.7,6991,0,"black","black"],				
["Kimmeridgiano",1.8,7724,0,"black","black"],				
["Kimmeridgiano",0,7834,0,"black","black"],				
["Oxfordiano",165,5,0,"black","black"],				
["Oxfordiano",156,5,0,"black","black"],				
["Oxfordiano",152,66,0,"black","black"],				
["Oxfordiano",145,315,0,"black","black"],				
["Oxfordiano",115,576,0,"black","black"],				
["Oxfordiano",65.5,1785,0,"black","black"],				
["Oxfordiano",48.6,3487,0,"black","black"],				
["Oxfordiano",25,4704,0,"black","black"],				
["Oxfordiano",23,4863,0,"black","black"],				
["Oxfordiano",16,5867,0,"black","black"],				
["Oxfordiano",13,5975,0,"black","black"],				
["Oxfordiano",11.6,6089,0,"black","black"],				
["Oxfordiano",6.8,6558,0,"black","black"],				
["Oxfordiano",5.3,6686,0,"black","black"],				
["Oxfordiano",4,6771,0,"black","black"],				
["Oxfordiano",3.8,6816,0,"black","black"],				
["Oxfordiano",3.6,6866,0,"black","black"],				
["Oxfordiano",2.7,7040,0,"black","black"],				
["Oxfordiano",1.8,7773,0,"black","black"],				
["Oxfordiano",0,7883,0,"black","black"],				
["Jurásico Medio",183,5,0,"black","black"],				
["Jurásico Medio",165,5,0,"black","black"],				
["Jurásico Medio",156,66,0,"black","black"],				
["Jurásico Medio",152,126,0,"black","black"],				
["Jurásico Medio",145,373,0,"black","black"],				
["Jurásico Medio",115,632,0,"black","black"],				
["Jurásico Medio",65.5,1838,0,"black","black"],				
["Jurásico Medio",48.6,3538,0,"black","black"],				
["Jurásico Medio",25,4753,0,"black","black"],				
["Jurásico Medio",23,4912,0,"black","black"],				
["Jurásico Medio",16,5916,0,"black","black"],				
["Jurásico Medio",13,6024,0,"black","black"],				
["Jurásico Medio",11.6,6138,0,"black","black"],				
["Jurásico Medio",6.8,6607,0,"black","black"],				
["Jurásico Medio",5.3,6735,0,"black","black"],				
["Jurásico Medio",4,6820,0,"black","black"],				
["Jurásico Medio",3.8,6865,0,"black","black"],				
["Jurásico Medio",3.6,6915,0,"black","black"],				
["Jurásico Medio",2.7,7089,0,"black","black"],				
["Jurásico Medio",1.8,7822,0,"black","black"],				
["Jurásico Medio",0,7932,0,"black","black"],				
["Basamento",183,5,0,"black","black"],				
["Basamento",165,1297,0,"black","black"],				
["Basamento",156,1335,0,"black","black"],				
["Basamento",152,1383,0,"black","black"],				
["Basamento",145,1610,0,"black","black"],				
["Basamento",115,1826,0,"black","black"],				
["Basamento",65.5,2960,0,"black","black"],				
["Basamento",48.6,4629,0,"black","black"],				
["Basamento",25,5823,0,"black","black"],				
["Basamento",23,5981,0,"black","black"],				
["Basamento",16,6979,0,"black","black"],				
["Basamento",13,7086,0,"black","black"],				
["Basamento",11.6,7199,0,"black","black"],				
["Basamento",6.8,7667,0,"black","black"],				
["Basamento",5.3,7795,0,"black","black"],				
["Basamento",4,7880,0,"black","black"],				
["Basamento",3.8,7925,0,"black","black"],				
["Basamento",3.6,7975,0,"black","black"],				
["Basamento",2.7,8149,0,"black","black"],				
["Basamento",1.8,8882,0,"black","black"],				
["Basamento",0,8992,0,"black","black"],				
["Base Basamento",183,926,0,"black","black"],				
["Base Basamento",165,2219,0,"black","black"],				
["Base Basamento",156,2257,0,"black","black"],				
["Base Basamento",152,2303,0,"black","black"],				
["Base Basamento",145,2533,0,"black","black"],				
["Base Basamento",115,2749,0,"black","black"],				
["Base Basamento",65.5,3881,0,"black","black"],				
["Base Basamento",48.6,5542,0,"black","black"],				
["Base Basamento",25,6747,0,"black","black"],				
["Base Basamento",23,6910,0,"black","black"],				
["Base Basamento",16,7905,0,"black","black"],				
["Base Basamento",13,8008,0,"black","black"],				
["Base Basamento",11.6,8117,0,"black","black"],				
["Base Basamento",6.8,8585,0,"black","black"],				
["Base Basamento",5.3,8686,0,"black","black"],				
["Base Basamento",4,8802,0,"black","black"],				
["Base Basamento",3.8,8843,0,"black","black"],				
["Base Basamento",3.6,8903,0,"black","black"],				
["Base Basamento",2.7,9075,0,"black","black"],				
["Base Basamento",1.8,9803,0,"black","black"],				
["Base Basamento",0,9915,0,"black","black"]				
    
];


class Capa {
    constructor(nombre) {
        this.nombre = nombre;
        this.datos = [];
        this.lineColor;
    }

    agregarDato(C, m, alpha) {
        this.datos.push({ C, m, alpha });
    }
}


const capas = {};

datosIniciales.forEach(([nombre, C, m, alpha,color_]) => {
    if (!capas[nombre]) {
        capas[nombre] = new Capa(nombre);
    }
    capas[nombre].agregarDato(C, m, alpha);
    capas[nombre].lineColor = color_;
});

const datosCapas = Object.values(capas);

const puntos = [
    { m: 0, C: 30 },
    { m: 3000, C: 100 },
    { m: 3555, C: 125 },
    { m: 4200, C: 140 },
    { m: 4400, C: 130 }
];

// Configuración de ejes
const ejeXConfig = {
    dominio: [183, 0],
    ticksMajor: d3.range(0, 200, 10),
    ticksMinor: d3.range(0, 200, 5),
    titulo: "Tiempo [Ma]"
};

const ejeYConfig = {
    dominio: [0, 9915],
    ticksMajor: d3.range(0, 9915, 500),
    ticksMinor: d3.range(0, 9915, 100),
    titulo: "Profundidad [m]"
};

const colorPalette = [
    { min: 0, max: 5, color: [190, 197, 202] },
    { min: 5, max:  10, color: [181, 165, 187] },
    { min: 10, max: 15, color: [172, 133, 172] },
    { min: 15, max: 20, color: [162, 101, 156] },
    { min: 20, max: 25, color: [153, 70, 141] },
    { min: 25, max: 30, color: [150, 45, 132] },
    { min: 30, max: 35, color: [168, 51, 149] },
    { min: 35, max: 40, color: [187, 56, 166] },
    { min: 40, max: 45, color: [206, 62, 183] },
    { min: 45, max: 50, color: [225, 68, 199] },
    { min: 50, max: 55, color: [237, 78, 197] },
    { min: 55, max: 60, color: [229, 93, 174] },
    { min: 60, max: 65, color: [244, 108, 151] },
    { min: 65, max: 70, color: [248, 123, 128] },
    { min: 70, max: 75, color: [251, 138, 106] },
    { min: 75, max: 80, color: [252, 160, 114] },
    { min: 80, max: 85, color: [252, 183, 134] },
    { min: 85, max: 90, color: [252, 206, 153] },
    { min: 90, max: 95, color: [252, 230, 172] },
    { min: 95, max: 100, color: [252, 253, 191] }
];

// Exporta las configuraciones y datos para que sean accesibles desde otros archivos
export {
    puntos,
    ejeXConfig,
    ejeYConfig,
    datosCapas,
    colorPalette
};

