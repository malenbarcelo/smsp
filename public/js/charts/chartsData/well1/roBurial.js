export const graphicAttributes = {
    upperReference: true,
    sideReference: true,
    horizontalLines: false,
    colorMap: false,
    fillPatterns: true,
    extraPoligons: true,
    well: 0
}

const proportion = 0.65;
const width = proportion*800;
const height = proportion*500;

const ml = width*50/800;
const mr = width*200/800;
const mt = height*50/500;
const mb = height*50/500;
const alphaName = "Petróleo (%)";

export { proportion,width, height, ml, mr, mt, mb, alphaName };

const datosIniciales = [
    ["TERCIARIO",5.33,1,0,"black","black"],
["TERCIARIO",0,0,0,"black","black"],
["MARANON",7.35,1,0,"black","black"],
["MARANON",5.33,1,0,"black","black"],
["MARANON",0,340,0,"black","black"],
["PEBAS",13.65,1,0,"black","black"],
["PEBAS",7.35,1,0,"black","black"],
["PEBAS",5.33,1126,0,"black","black"],
["PEBAS",0,1411,0,"black","black"],
["CHAMBIRA",28.4,3,0,"black","black"],
["CHAMBIRA",13.65,1,0,"black","black"],
["CHAMBIRA",7.35,412,0,"black","black"],
["CHAMBIRA",5.33,1461,0,"black","black"],
["CHAMBIRA",0,1738,0,"black","black"],
["POZOSHALE",30,3,0,"black","black"],
["POZOSHALE",28.4,3,0,"black","black"],
["POZOSHALE",13.65,1546,0.01,"black","black"],
["POZOSHALE",7.35,1887,0.05,"black","black"],
["POZOSHALE",5.33,2806,0.14,"black","black"],
["POZOSHALE",0,3055,0.52,"black","black"],
["POZOSAND",33.9,3,0,"black","black"],
["POZOSAND",30,3,0,"black","black"],
["POZOSAND",28.4,172,0,"black","black"],
["POZOSAND",13.65,1674,0,"black","black"],
["POZOSAND",7.35,2013,0,"black","black"],
["POZOSAND",5.33,2928,0,"black","black"],
["POZOSAND",0,3176,0,"black","black"],
["YAHUARANGO",70.6,7,0,"black","black"],
["YAHUARANGO",33.9,3,0,"black","black"],
["YAHUARANGO",30,80,0,"black","black"],
["YAHUARANGO",28.4,246,0,"black","black"],
["YAHUARANGO",13.65,1735,0,"black","black"],
["YAHUARANGO",7.35,2072,0,"black","black"],
["YAHUARANGO",5.33,2983,0,"black","black"],
["YAHUARANGO",0,3230,0,"black","black"],
["VIVIAN",83.5,8,0,"black","black"],
["VIVIAN",70.6,7,0,"black","black"],
["VIVIAN",33.9,312,0,"black","black"],
["VIVIAN",30,360,0,"black","black"],
["VIVIAN",28.4,487,0,"black","black"],
["VIVIAN",13.65,1892,0,"black","black"],
["VIVIAN",7.35,2224,0,"black","black"],
["VIVIAN",5.33,3130,0,"black","black"],
["VIVIAN",0,3375,0,"black","black"],
["CHONTA",86,9,0,"black","black"],
["CHONTA",83.5,8,0,"black","black"],
["CHONTA",70.6,646,0,"black","black"],
["CHONTA",33.9,929,0,"black","black"],
["CHONTA",30,970,0,"black","black"],
["CHONTA",28.4,1083,0,"black","black"],
["CHONTA",13.65,2404,0,"black","black"],
["CHONTA",7.35,2728,0,"black","black"],
["CHONTA",5.33,3630,0,"black","black"],
["CHONTA",0,3872,0,"black","black"],
["CHONTASAND",89.3,9,0,"black","black"],
["CHONTASAND",86,9,0,"black","black"],
["CHONTASAND",83.5,581,0,"black","black"],
["CHONTASAND",70.6,1023,0,"black","black"],
["CHONTASAND",33.9,1284,0,"black","black"],
["CHONTASAND",30,1319,0,"black","black"],
["CHONTASAND",28.4,1422,0,"black","black"],
["CHONTASAND",13.65,2699,0,"black","black"],
["CHONTASAND",7.35,3021,0,"black","black"],
["CHONTASAND",5.33,3922,0,"black","black"],
["CHONTASAND",0,4162,0,"black","black"],
["AGUACALIENTE",99.5,10,0,"black","black"],
["AGUACALIENTE",89.3,9,0,"black","black"],
["AGUACALIENTE",86,59,0,"black","black"],
["AGUACALIENTE",83.5,628,0,"black","black"],
["AGUACALIENTE",70.6,1066,0,"black","black"],
["AGUACALIENTE",33.9,1327,0,"black","black"],
["AGUACALIENTE",30,1361,0,"black","black"],
["AGUACALIENTE",28.4,1464,0,"black","black"],
["AGUACALIENTE",13.65,2737,0,"black","black"],
["AGUACALIENTE",7.35,3059,0,"black","black"],
["AGUACALIENTE",5.33,3960,0,"black","black"],
["AGUACALIENTE",0,4200,0,"black","black"],
["RAYA",100,10,0,"black","black"],
["RAYA",99.5,10,0,"black","black"],
["RAYA",89.3,36,0,"black","black"],
["RAYA",86,86,0,"black","black"],
["RAYA",83.5,653,0,"black","black"],
["RAYA",70.6,1089,0,"black","black"],
["RAYA",33.9,1349,0,"black","black"],
["RAYA",30,1384,0,"black","black"],
["RAYA",28.4,1486,0,"black","black"],
["RAYA",13.65,2757,0,"black","black"],
["RAYA",7.35,3079,0,"black","black"],
["RAYA",5.33,3980,0,"black","black"],
["RAYA",0,4220,0,"black","black"],
["RAYABASE",100,486,0,"black","black"],
["RAYABASE",99.5,486,0,"black","black"],
["RAYABASE",89.3,493,0,"black","black"],
["RAYABASE",86,515,0,"black","black"],
["RAYABASE",83.5,976,0,"black","black"],
["RAYABASE",70.6,1356,0,"black","black"],
["RAYABASE",33.9,1603,0,"black","black"],
["RAYABASE",30,1634,0,"black","black"],
["RAYABASE",28.4,1736,0,"black","black"],
["RAYABASE",13.65,3006,0,"black","black"],
["RAYABASE",7.35,3315,0,"black","black"],
["RAYABASE",5.33,4218,0,"black","black"],
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

const lineaY0 = [
    {C: 100, m:0, alpha:0},
    {C: 0, m:0, alpha:0},
]

const poligono1 = [
     {C: 100, m:486, alpha:0},
     {C: 99.5, m:486, alpha:0},
     {C: 89.3, m:493, alpha:0},
     {C: 86, m:515, alpha:0},
     {C: 83.5, m:976, alpha:0},
     {C: 70.6, m:1356, alpha:0},
     {C: 33.9, m:1603, alpha:0},
     {C: 30, m:1634, alpha:0},
     {C: 28.4, m:1736, alpha:0},
     {C: 13.65, m:3006, alpha:0},
    {C: 13.42, m:3013, alpha:0},
    {C: 10.57, m:3029, alpha:0},
    {C: 7.33, m:3088, alpha:0},
    {C: 6.7, m:3316, alpha:0},
    {C: 5.3, m:3840, alpha:0},
    {C: 4, m:3811, alpha:0},
    {C: 2.22, m:3770, alpha:0},
    {C: 1.68, m:3720, alpha:0},
    {C: 0, m:3627, alpha:0},
];

const poligonos = [poligono1];
const coloresPoligonos = ['#00FF00','#FFFF00']

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
    poligonos,
    coloresPoligonos,
    lineaY0,
    colorPalette
};

