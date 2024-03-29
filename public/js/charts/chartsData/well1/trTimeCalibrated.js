﻿export const graphicAttributes = {
    upperReference: true,
    sideReference: false,
    horizontalLines: false,
    colorMap: false,
    fillPatterns: false,
    additionalPoints: false,
    well: 0,
    graphType : "trTiempo"
}

const proportion = 1;
const width = proportion*600;
const height = proportion*500;

const ml = width*0.1;
const mr = width*0.05;
const mt = height*0.1;
const mb = height*0.15;
const alphaName = "Petróleo (%)";

export { proportion,width, height, ml, mr, mt, mb, alphaName };


const datosIniciales = [
    ["POZOSHALE", 28.4, 0, 0, "red", "red"],
    ["POZOSHALE", 20, 0, 0.78, "red", "red"],
    ["POZOSHALE", 13.65, 0.06, 0.01, "red", "red"],
    ["POZOSHALE", 10, 0.21, 0.01, "red", "red"],
    ["POZOSHALE", 7.35, 0.36, 0.05, "red", "red"],
    ["POZOSHALE", 5.33, 0.78, 0.14, "red", "red"],
    ["POZOSHALE", 0, 1.8, 0.52, "red", "red"],
    ["CHONTA", 83.5,    0, 0, "blue", "blue"],
    ["CHONTA", 70.6,    0, 0, "blue", "blue"],
    ["CHONTA", 33.9,    0, 0, "blue", "blue"],
    ["CHONTA", 30,      0, 0, "blue", "blue"],
    ["CHONTA", 28.4,    0.01, 0, "blue", "blue"],
    ["CHONTA", 13.65, 0.06, 0, "blue", "blue"],
    ["CHONTA", 10,    0.17, 0, "blue", "blue"],
    ["CHONTA", 7.35,  0.29, 0, "blue", "blue"],
    ["CHONTA", 5.33,  0.6, 0.01, "blue", "blue"],
    ["CHONTA", 0,     1.89, 0.06, "blue", "blue"],
    ["RAYA",100	,   0, 0, "black", "black"],
    ["RAYA",99.5,	0, 0,"black", "black"],
    ["RAYA",60,	0, 0,"black", "black"],
    ["RAYA",55.8,	0, 0,"black", "black"],
    ["RAYA",50,	0, 0,"black", "black"],
    ["RAYA",40 ,	0.01, 0,"black", "black"],
    ["RAYA",33.9,	0.01, 0,"black", "black"],
    ["RAYA",30,     0.01, 0,"black", "black"],
    ["RAYA",28.4,	0.01, 0,"black", "black"],
    ["RAYA",20, 	0.06, 0.02,"black", "black"],
    ["RAYA",13.65,	0.42, 0.01,"black", "black"],
    ["RAYA",10,	    0.83, 0.02,"black", "black"],
    ["RAYA",7.35,	1.08, 0.02,"black", "black"],
    ["RAYA",5.33,	1.58, 0.02,"black", "black"],
    ["RAYA",0,      4.93, 0.13,"black", "black"],
   

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
    dominio: [6, 0],
    ticksMajor: d3.range(0, 3, 1),
    ticksMinor: d3.range(0, 3, 0.1),
    titulo: "TR Fracción [%]"
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

