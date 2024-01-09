export const graphicAttributes = {
    upperReference: false,
    sideReference: true,
    horizontalLines: true,
    colorMap: false,
    fillPatterns: true,
    additionalPoints: false,
    additionalRanges: true,
    well: 0,
    graphType: "rhoProf"
}

const proportion = 1.1;
const width = proportion*500;
const height = proportion*500;

const ml = width*50/500;
const mr = width*200/500;
const mt = height*50/500;
const mb = height*50/500;
const alphaName = "Petróleo (%)";

export { proportion ,width, height, ml, mr, mt, mb, alphaName };


const datosIniciales = [
    ["CAPA",0.2,0,0,"black","black"],
    ["CAPA",0.29,340,0,"black","black"],
    ["CAPA",0.3,697,0,"black","black"],
    ["CAPA",0.32,1054,0,"black","black"],
    ["CAPA",0.34,1411,0,"black","black"],
    ["CAPA",0.36,1738,0,"black","black"],
    ["CAPA",0.4,2067,0,"black","black"],
    ["CAPA",0.42,2397,0,"black","black"],
    ["CAPA",0.45,2726,0,"black","black"],
    ["CAPA",0.48,3055,0,"black","black"],
    ["CAPA",0.5,3176,0,"black","black"],
    ["CAPA",0.51,3230,0,"black","black"],
    ["CAPA",0.52,3375,0,"black","black"],
    ["CAPA",0.55,3624,0,"black","black"],
    ["CAPA",0.58,3872,0,"black","black"],
    ["CAPA",0.64,4162,0,"black","black"],
    ["CAPA",0.65,4200,0,"black","black"],
    ["CAPA",0.65,4220,0,"black","black"],
    ["CAPA",0.7,4450,0,"black","black"]
    
    
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


const rangos = [
    { m: 3900, C1: 0.55, C2: 0.73 },
    { m: 3900, C1: 0.57, C2: 0.72 },
    { m: 3900, C1: 0.59, C2: 0.73 },
    { m: 4000, C1: 0.59, C2: 0.72 },
    { m: 4090, C1: 0.59, C2: 0.7 },
    { m: 4090, C1: 0.58, C2: 0.75 },
    { m: 4110, C1: 0.61, C2: 0.71 },
    { m: 4110, C1: 0.63, C2: 0.8 },
    { m: 4200, C1: 0.63, C2: 0.74 },
    { m: 4300, C1: 0.65, C2: 0.82 },
    { m: 4390, C1: 0.65, C2: 0.82 },
    { m: 4400, C1: 0.7, C2:  0.88 }
];

// Configuración de ejes
const ejeXConfig = {
    dominio: [0, 1],
    ticksMajor: d3.range(0, 200, 50),
    ticksMinor: d3.range(0, 200, 40),
    titulo: "Reflectancia de Vitrinita [%Ro]"
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
    rangos,
    ejeXConfig,
    ejeYConfig,
    datosCapas,
    colorPalette
};

