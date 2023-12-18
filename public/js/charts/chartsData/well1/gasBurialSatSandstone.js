export const graphicAttributes = {
    upperReference: true,
    sideReference: true,
    horizontalLines: false,
    colorMap: true,
    fillPatterns: true,
    well: 0
}

const proportion = 0.65;
const width = proportion*800;
const height = proportion*600;

const ml = width*50/800;
const mr = width*200/800;
const mt = height*50/600;
const mb = height*150/600;
const alphaName = "Fracción de Vapor (%)";

export { proportion,width, height, ml, mr, mt, mb, alphaName };

const datosIniciales = [
    ["TERCIARIO",5.33,5,0,"black","black"],
["TERCIARIO",0,0,0,"black","black"],
["MARANON",7.35,0,0,"black","black"],
["MARANON",5.33,5,0,"black","black"],
["MARANON",0,340,0,"black","black"],
["PEBAS",13.65,5,0,"black","black"],
["PEBAS",10,2,0,"black","black"],
["PEBAS",7.35,0,0,"black","black"],
["PEBAS",5.33,1132,0,"black","black"],
["PEBAS",0,1411,0,"black","black"],
["CHAMBIRA",28.4,25,0,"black","black"],
["CHAMBIRA",20,14,0,"black","black"],
["CHAMBIRA",13.65,5,0,"black","black"],
["CHAMBIRA",10,253,0,"black","black"],
["CHAMBIRA",7.35,411,0,"black","black"],
["CHAMBIRA",5.33,1467,0,"black","black"],
["CHAMBIRA",0,1738,0,"black","black"],
["POZOSHALE",30,21,0,"black","black"],
["POZOSHALE",28.4,25,0,"black","black"],
["POZOSHALE",20,958,0,"black","black"],
["POZOSHALE",13.65,1561,0.01,"black","black"],
["POZOSHALE",10,1764,0.01,"black","black"],
["POZOSHALE",7.35,1893,0.01,"black","black"],
["POZOSHALE",5.33,2813,0.03,"black","black"],
["POZOSHALE",0,3055,0.03,"black","black"],
["POZOSAND",33.9,10,0,"black","black"],
["POZOSAND",30,21,0,"black","black"],
["POZOSAND",28.4,193,0,"black","black"],
["POZOSAND",20,1102,0,"black","black"],
["POZOSAND",13.65,1696,0,"black","black"],
["POZOSAND",10,1896,0,"black","black"],
["POZOSAND",7.35,2024,0,"black","black"],
["POZOSAND",5.33,2936,0,"black","black"],
["POZOSAND",0,3176,0,"black","black"],
["YAHUARANGO",70.6,10,0,"black","black"],
["YAHUARANGO",70,10,0,"black","black"],
["YAHUARANGO",65.5,10,0,"black","black"],
["YAHUARANGO",60,10,0,"black","black"],
["YAHUARANGO",55.8,10,0,"black","black"],
["YAHUARANGO",50,10,0,"black","black"],
["YAHUARANGO",40,10,0,"black","black"],
["YAHUARANGO",33.9,10,0,"black","black"],
["YAHUARANGO",30,97,0,"black","black"],
["YAHUARANGO",28.4,267,0,"black","black"],
["YAHUARANGO",20,1166,0,"black","black"],
["YAHUARANGO",13.65,1756,0,"black","black"],
["YAHUARANGO",10,1956,0,"black","black"],
["YAHUARANGO",7.35,2082,0,"black","black"],
["YAHUARANGO",5.33,2991,0,"black","black"],
["YAHUARANGO",0,3230,0,"black","black"],
["VIVIAN",83.5,10,0,"black","black"],
["VIVIAN",80,10,0,"black","black"],
["VIVIAN",70.6,10,0,"black","black"],
["VIVIAN",70,16,0,"black","black"],
["VIVIAN",65.5,61,0,"black","black"],
["VIVIAN",60,112,0,"black","black"],
["VIVIAN",55.8,149,0,"black","black"],
["VIVIAN",50,197,0,"black","black"],
["VIVIAN",40,274,0,"black","black"],
["VIVIAN",33.9,318,0,"black","black"],
["VIVIAN",30,377,0,"black","black"],
["VIVIAN",28.4,506,0,"black","black"],
["VIVIAN",20,1336,0,"black","black"],
["VIVIAN",13.65,1912,0,"black","black"],
["VIVIAN",10,2109,0,"black","black"],
["VIVIAN",7.35,2234,0,"black","black"],
["VIVIAN",5.33,3137,0,"black","black"],
["VIVIAN",0,3375,0,"black","black"],
["CHONTA",86,10,0,"black","black"],
["CHONTA",83.5,10,0,"black","black"],
["CHONTA",80,222,0,"black","black"],
["CHONTA",70.6,716,0,"black","black"],
["CHONTA",70,722,0,"black","black"],
["CHONTA",65.5,760,0,"black","black"],
["CHONTA",60,804,0,"black","black"],
["CHONTA",55.8,836,0,"black","black"],
["CHONTA",50,877,0,"black","black"],
["CHONTA",40,942,0,"black","black"],
["CHONTA",33.9,979,0,"black","black"],
["CHONTA",30,1025,0,"black","black"],
["CHONTA",28.4,1130,0,"black","black"],
["CHONTA",20,1874,0,"black","black"],
["CHONTA",13.65,2423,0,"black","black"],
["CHONTA",10,2615,0,"black","black"],
["CHONTA",7.35,2738,0,"black","black"],
["CHONTA",5.33,3639,0,"black","black"],
["CHONTA",0,3872,0,"black","black"],
["CHONTASAND",89.3,10,0,"black","black"],
["CHONTASAND",86,10,0,"black","black"],
["CHONTASAND",83.5,396,0,"black","black"],
["CHONTASAND",80,595,0,"black","black"],
["CHONTASAND",70.6,1065,0,"black","black"],
["CHONTASAND",70,1070,0,"black","black"],
["CHONTASAND",65.5,1107,0,"black","black"],
["CHONTASAND",60,1150,0,"black","black"],
["CHONTASAND",55.8,1180,0,"black","black"],
["CHONTASAND",50,1220,0,"black","black"],
["CHONTASAND",40,1283,0,"black","black"],
["CHONTASAND",33.9,1319,0,"black","black"],
["CHONTASAND",30,1363,0,"black","black"],
["CHONTASAND",28.4,1461,0,"black","black"],
["CHONTASAND",20,2181,0,"black","black"],
["CHONTASAND",13.65,2720,0,"black","black"],
["CHONTASAND",10,2910,0,"black","black"],
["CHONTASAND",7.35,3031,0,"black","black"],
["CHONTASAND",5.33,3932,0,"black","black"],
["CHONTASAND",0,4163,0,"black","black"],
["AGUACALIENTE",99.5,10,0,"black","black"],
["AGUACALIENTE",90,10,0,"black","black"],
["AGUACALIENTE",89.3,10,0,"black","black"],
["AGUACALIENTE",86,63,0,"black","black"],
["AGUACALIENTE",83.5,445,0,"black","black"],
["AGUACALIENTE",80,643,0,"black","black"],
["AGUACALIENTE",70.6,1110,0,"black","black"],
["AGUACALIENTE",70,1115,0,"black","black"],
["AGUACALIENTE",65.5,1152,0,"black","black"],
["AGUACALIENTE",60,1195,0,"black","black"],
["AGUACALIENTE",55.8,1225,0,"black","black"],
["AGUACALIENTE",50,1264,0,"black","black"],
["AGUACALIENTE",40,1327,0,"black","black"],
["AGUACALIENTE",33.9,1363,0,"black","black"],
["AGUACALIENTE",30,1406,0,"black","black"],
["AGUACALIENTE",28.4,1504,0,"black","black"],
["AGUACALIENTE",20,2221,0,"black","black"],
["AGUACALIENTE",13.65,2759,0,"black","black"],
["AGUACALIENTE",10,2948,0,"black","black"],
["AGUACALIENTE",7.35,3069,0,"black","black"],
["AGUACALIENTE",5.33,3970,0,"black","black"],
["AGUACALIENTE",0,4201,0,"black","black"],
["RAYA",100,10,0,"black","black"],
["RAYA",99.5,10,0,"black","black"],
["RAYA",90,36,0,"black","black"],
["RAYA",89.3,38,0,"black","black"],
["RAYA",86,90,0,"black","black"],
["RAYA",83.5,470,0,"black","black"],
["RAYA",80,668,0,"black","black"],
["RAYA",70.6,1133,0,"black","black"],
["RAYA",70,1138,0,"black","black"],
["RAYA",65.5,1176,0,"black","black"],
["RAYA",60,1218,0,"black","black"],
["RAYA",55.8,1248,0,"black","black"],
["RAYA",50,1288,0,"black","black"],
["RAYA",40,1351,0,"black","black"],
["RAYA",33.9,1386,0,"black","black"],
["RAYA",30,1429,0,"black","black"],
["RAYA",28.4,1527,0,"black","black"],
["RAYA",20,2242,0,"black","black"],
["RAYA",13.65,2779,0,"black","black"],
["RAYA",10,2969,0,"black","black"],
["RAYA",7.35,3090,0,"black","black"],
["RAYA",5.33,3990,0,"black","black"],
["RAYA",0,4221,0,"black","black"],
["RAYABASE",100,472,0,"black","black"],
["RAYABASE",99.5,488,0,"black","black"],
["RAYABASE",90,494,0,"black","black"],
["RAYABASE",89.3,495,0,"black","black"],
["RAYABASE",86,516,0,"black","black"],
["RAYABASE",83.5,977,0,"black","black"],
["RAYABASE",80,1041,0,"black","black"],
["RAYABASE",70.6,1356,0,"black","black"],
["RAYABASE",70,1362,0,"black","black"],
["RAYABASE",65.5,1399,0,"black","black"],
["RAYABASE",60,1441,0,"black","black"],
["RAYABASE",55.8,1472,0,"black","black"],
["RAYABASE",50,1512,0,"black","black"],
["RAYABASE",40,1576,0,"black","black"],
["RAYABASE",33.9,1610,0,"black","black"],
["RAYABASE",30,1652,0,"black","black"],
["RAYABASE",28.4,1753,0,"black","black"],
["RAYABASE",20,2471,0,"black","black"],
["RAYABASE",13.65,3007,0,"black","black"],
["RAYABASE",10,3196,0,"black","black"],
["RAYABASE",7.35,3316,0,"black","black"],
["RAYABASE",5.33,4221,0,"black","black"],
["RAYABASE",0,4450,0,"black","black"]



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
    dominio: [100, 0],
    ticksMajor: d3.range(0, 100, 10),
    ticksMinor: d3.range(0, 100, 5),
    titulo: "Tiempo [Ma]"
};

const ejeYConfig = {
    dominio: [0, 4450],
    ticksMajor: d3.range(0, 4450, 500),
    ticksMinor: d3.range(0, 4450, 100),
    titulo: "Profundidad [m]"
};

const colorPalette = [
    { min: 0, max: 0.05, color: [190, 197, 202] },
    //{ min: 0, max: 0.05, color: [255, 0, 0] },
    { min: 0.05, max: 0.1, color: [181, 165, 187] },
    { min: 0.1, max: 0.15, color: [172, 133, 172] },
    { min: 0.15, max: 0.2, color: [162, 101, 156] },
    { min: 0.2, max: 0.25, color: [153, 70, 141] },
    { min: 0.25, max: 0.3, color: [150, 45, 132] },
    { min: 0.3, max: 0.35, color: [168, 51, 149] },
    { min: 0.35, max: 0.4, color: [187, 56, 166] },
    { min: 0.4, max: 0.45, color: [206, 62, 183] },
    { min: 0.45, max: 0.5, color: [225, 68, 199] },
    { min: 0.5, max: 0.55, color: [237, 78, 197] },
    { min: 0.55, max: 0.6, color: [229, 93, 174] },
    { min: 0.6, max: 0.65, color: [244, 108, 151] },
    { min: 0.65, max: 0.7, color: [248, 123, 128] },
    { min: 0.7, max: 0.75, color: [251, 138, 106] },
    { min: 0.75, max: 0.8, color: [252, 160, 114] },
    { min: 0.8, max: 0.85, color: [252, 183, 134] },
    { min: 0.85, max: 0.9, color: [252, 206, 153] },
    { min: 0.9, max: 0.95, color: [252, 230, 172] },
    { min: 0.95, max: 1, color: [252, 253, 191] }
];

// Exporta las configuraciones y datos para que sean accesibles desde otros archivos
export {
    puntos,
    ejeXConfig,
    ejeYConfig,
    datosCapas,
    colorPalette
};

