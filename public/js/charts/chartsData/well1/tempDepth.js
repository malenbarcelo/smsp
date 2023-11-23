export const graphicAttributes = {
    upperReference: false,
    sideReference: true,
    horizontalLines: true,
    colorMap: false,
    fillPatterns: true,
    additionalPoints: true
}

const proportion = 1.05;
const width = proportion*500;
const height = proportion*500;

const ml = width*50/500;
const mr = width*200/500;
const mt = height*50/500;
const mb = height*50/500;
const alphaName = "Petróleo (%)";

export { proportion ,width, height, ml, mr, mt, mb, alphaName };


const datosIniciales = [
    ["CAPA",    28   ,  0	  ,0,"blue","blue"],
    ["CAPA",    35.11, 340    ,0,"blue","blue"],
    ["CAPA",    41.75, 697    ,0,"blue","blue"],
    ["CAPA", 	48.05 , 1054  ,0,"blue","blue"],
    ["CAPA", 	54.06 , 1411  ,0,"blue","blue"],
    ["CAPA", 	60.33 , 1738  ,0,"blue","blue"],
    ["CAPA", 	66.07 , 2067  ,0,"blue","blue"],
    ["CAPA", 	71.64 , 2397  ,0,"blue","blue"],
    ["CAPA", 	77.06 , 2726  ,0,"blue","blue"],
    ["CAPA", 	82.34 , 3055  ,0,"blue","blue"],
    ["CAPA", 	85.74 , 3176  ,0,"blue","blue"],
    ["CAPA", 	86.5  , 3230  ,0,"blue","blue"],
    ["CAPA", 	89.59 , 3375  ,0,"blue","blue"],
    ["CAPA", 	93.38 , 3624  ,0,"blue","blue"],
    ["CAPA", 	97.09 , 3872  ,0,"blue","blue"],
    ["CAPA", 	106.22, 4162  ,0,"blue","blue"],
    ["CAPA", 	106.85, 4200  ,0,"blue","blue"],
    ["CAPA", 	107.18, 4220  ,0,"blue","blue"],
    ["CAPA", 	114.06, 4450  ,0,"blue","blue"]
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
    dominio: [0, 200],
    ticksMajor: d3.range(0, 200, 50),
    ticksMinor: d3.range(0, 200, 40),
    titulo: "Temperatura [C]"
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

