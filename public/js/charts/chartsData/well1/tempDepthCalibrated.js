export const graphicAttributes = {
    upperReference: false,
    sideReference: true,
    horizontalLines: true,
    colorMap: false,
    fillPatterns: true,
    additionalPoints: true,
    well: 0,
    graphType: "tempProf"
}

const proportion = 1;
const width = proportion*500;
const height = proportion*500;

const ml = width*50/500;
const mr = width*200/500;
const mt = height*50/500;
const mb = height*50/500;
const alphaName = "Petróleo (%)";

export { proportion ,width, height, ml, mr, mt, mb, alphaName };


const datosIniciales = [
    ["CAPA",    29   ,  0	  ,0,"blue","blue"],
    ["CAPA",    37.38, 340    ,0,"blue","blue"],
    ["CAPA",    45.22, 697    ,0,"blue","blue"],
    ["CAPA", 	52.67 , 1054  ,0,"blue","blue"],
    ["CAPA", 	59.8 , 1411  ,0,"blue","blue"],
    ["CAPA", 	67.26 , 1738  ,0,"blue","blue"],
    ["CAPA", 	74.09 , 2067  ,0,"blue","blue"],
    ["CAPA", 	80.73 , 2397  ,0,"blue","blue"],
    ["CAPA", 	87.21 , 2726  ,0,"blue","blue"],
    ["CAPA", 	93.54 , 3055  ,0,"blue","blue"],
    ["CAPA", 	97.58 , 3176  ,0,"blue","blue"],
    ["CAPA", 	98.5  , 3230  ,0,"blue","blue"],
    ["CAPA", 	102.16 , 3375  ,0,"blue","blue"],
    ["CAPA", 	106.73 , 3624  ,0,"blue","blue"],
    ["CAPA", 	111.21 , 3872  ,0,"blue","blue"],
    ["CAPA", 	121.82, 4162  ,0,"blue","blue"],
    ["CAPA", 	122.58, 4200  ,0,"blue","blue"],
    ["CAPA", 	122.98, 4220  ,0,"blue","blue"],
    ["CAPA", 	131.02, 4450  ,0,"blue","blue"]
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

