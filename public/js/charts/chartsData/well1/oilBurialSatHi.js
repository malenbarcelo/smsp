export const graphicAttributes = {
    upperReference: true,
    sideReference: true,
    horizontalLines: false,
    colorMap: true,
    fillPatterns: true,
    well: 0
}

const proportion = 0.8;
const width = proportion*800;
const height = proportion*600;

const ml = width*50/800;
const mr = width*200/800;
const mt = height*50/600;
const mb = height*150/600;
const alphaName = "Petróleo (%)";

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
["POZOSHALE",13.65,1561,0.05,"black","black"],
["POZOSHALE",10,1764,0.13,"black","black"],
["POZOSHALE",7.35,1893,0.15,"black","black"],
["POZOSHALE",5.33,2813,0.32,"black","black"],
["POZOSHALE",0,3055,0.39,"black","black"],
["POZOSAND",33.9,10,0,"black","black"],
["POZOSAND",30,21,0,"black","black"],
["POZOSAND",28.4,194,0,"black","black"],
["POZOSAND",20,1091,0,"black","black"],
["POZOSAND",13.65,1689,0,"black","black"],
["POZOSAND",10,1891,0,"black","black"],
["POZOSAND",7.35,2019,0,"black","black"],
["POZOSAND",5.33,2935,0,"black","black"],
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
["YAHUARANGO",28.4,268,0,"black","black"],
["YAHUARANGO",20,1156,0,"black","black"],
["YAHUARANGO",13.65,1749,0,"black","black"],
["YAHUARANGO",10,1950,0,"black","black"],
["YAHUARANGO",7.35,2077,0,"black","black"],
["YAHUARANGO",5.33,2990,0,"black","black"],
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
["VIVIAN",28.4,509,0,"black","black"],
["VIVIAN",20,1329,0,"black","black"],
["VIVIAN",13.65,1907,0,"black","black"],
["VIVIAN",10,2104,0,"black","black"],
["VIVIAN",7.35,2229,0,"black","black"],
["VIVIAN",5.33,3137,0,"black","black"],
["VIVIAN",0,3375,0,"black","black"],
["CHONTA",86,10,0,"black","black"],
["CHONTA",83.5,10,0,"black","black"],
["CHONTA",80,191,0,"black","black"],
["CHONTA",70.6,645,0,"black","black"],
["CHONTA",70,651,0,"black","black"],
["CHONTA",65.5,693,0,"black","black"],
["CHONTA",60,741,0,"black","black"],
["CHONTA",55.8,775,0,"black","black"],
["CHONTA",50,820,0,"black","black"],
["CHONTA",40,891,0,"black","black"],
["CHONTA",33.9,931,0,"black","black"],
["CHONTA",30,983,0,"black","black"],
["CHONTA",28.4,1101,0,"black","black"],
["CHONTA",20,1866,0,"black","black"],
["CHONTA",13.65,2418,0.01,"black","black"],
["CHONTA",10,2610,0.03,"black","black"],
["CHONTA",7.35,2733,0.05,"black","black"],
["CHONTA",5.33,3639,0.11,"black","black"],
["CHONTA",0,3872,0.41,"black","black"],
["CHONTASAND",89.3,10,0,"black","black"],
["CHONTASAND",86,10,0,"black","black"],
["CHONTASAND",83.5,580,0,"black","black"],
["CHONTASAND",80,666,0,"black","black"],
["CHONTASAND",70.6,1021,0,"black","black"],
["CHONTASAND",70,1027,0,"black","black"],
["CHONTASAND",65.5,1065,0,"black","black"],
["CHONTASAND",60,1110,0,"black","black"],
["CHONTASAND",55.8,1141,0,"black","black"],
["CHONTASAND",50,1183,0,"black","black"],
["CHONTASAND",40,1248,0,"black","black"],
["CHONTASAND",33.9,1286,0,"black","black"],
["CHONTASAND",30,1331,0,"black","black"],
["CHONTASAND",28.4,1439,0,"black","black"],
["CHONTASAND",20,2171,0,"black","black"],
["CHONTASAND",13.65,2714,0,"black","black"],
["CHONTASAND",10,2904,0,"black","black"],
["CHONTASAND",7.35,3026,0,"black","black"],
["CHONTASAND",5.33,3931,0,"black","black"],
["CHONTASAND",0,4162,0,"black","black"],
["AGUACALIENTE",99.5,10,0,"black","black"],
["AGUACALIENTE",90,10,0,"black","black"],
["AGUACALIENTE",89.3,10,0,"black","black"],
["AGUACALIENTE",86,61,0,"black","black"],
["AGUACALIENTE",83.5,627,0,"black","black"],
["AGUACALIENTE",80,712,0,"black","black"],
["AGUACALIENTE",70.6,1065,0,"black","black"],
["AGUACALIENTE",70,1070,0,"black","black"],
["AGUACALIENTE",65.5,1109,0,"black","black"],
["AGUACALIENTE",60,1153,0,"black","black"],
["AGUACALIENTE",55.8,1184,0,"black","black"],
["AGUACALIENTE",50,1225,0,"black","black"],
["AGUACALIENTE",40,1291,0,"black","black"],
["AGUACALIENTE",33.9,1328,0,"black","black"],
["AGUACALIENTE",30,1374,0,"black","black"],
["AGUACALIENTE",28.4,1480,0,"black","black"],
["AGUACALIENTE",20,2211,0,"black","black"],
["AGUACALIENTE",13.65,2753,0,"black","black"],
["AGUACALIENTE",10,2942,0,"black","black"],
["AGUACALIENTE",7.35,3064,0,"black","black"],
["AGUACALIENTE",5.33,3969,0,"black","black"],
["AGUACALIENTE",0,4200,0,"black","black"],
["RAYA",100,10,0,"black","black"],
["RAYA",99.5,10,0,"black","black"],
["RAYA",90,35,0,"black","black"],
["RAYA",89.3,37,0,"black","black"],
["RAYA",86,87,0,"black","black"],
["RAYA",83.5,652,0,"black","black"],
["RAYA",80,736,0,"black","black"],
["RAYA",70.6,1087,0,"black","black"],
["RAYA",70,1093,0,"black","black"],
["RAYA",65.5,1131,0,"black","black"],
["RAYA",60,1175,0,"black","black"],
["RAYA",55.8,1207,0,"black","black"],
["RAYA",50,1248,0,"black","black"],
["RAYA",40,1313,0,"black","black"],
["RAYA",33.9,1350,0,"black","black"],
["RAYA",30,1396,0,"black","black"],
["RAYA",28.4,1502,0,"black","black"],
["RAYA",20,2231,0.01,"black","black"],
["RAYA",13.65,2773,0.07,"black","black"],
["RAYA",10,2963,0.15,"black","black"],
["RAYA",7.35,3084,0.2,"black","black"],
["RAYA",5.33,3990,0.31,"black","black"],
["RAYA",0,4220,1,"black","black"],
["RAYABASE",100,473,0,"black","black"],
["RAYABASE",99.5,488,0,"black","black"],
["RAYABASE",90,494,0,"black","black"],
["RAYABASE",89.3,495,0,"black","black"],
["RAYABASE",86,516,0,"black","black"],
["RAYABASE",83.5,978,0,"black","black"],
["RAYABASE",80,1039,0,"black","black"],
["RAYABASE",70.6,1356,0,"black","black"],
["RAYABASE",70,1361,0,"black","black"],
["RAYABASE",65.5,1399,0,"black","black"],
["RAYABASE",60,1441,0,"black","black"],
["RAYABASE",55.8,1471,0,"black","black"],
["RAYABASE",50,1511,0,"black","black"],
["RAYABASE",40,1573,0,"black","black"],
["RAYABASE",33.9,1609,0,"black","black"],
["RAYABASE",30,1652,0,"black","black"],
["RAYABASE",28.4,1753,0,"black","black"],
["RAYABASE",20,2468,0.01,"black","black"],
["RAYABASE",13.65,3007,0.07,"black","black"],
["RAYABASE",10,3195,0.15,"black","black"],
["RAYABASE",7.35,3316,0.2,"black","black"],
["RAYABASE",5.33,4220,0.31,"black","black"],
["RAYABASE",0,4450,1,"black","black"]
  
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

