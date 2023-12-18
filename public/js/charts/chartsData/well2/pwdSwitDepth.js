//this chart is equal to tempDepth
export const graphicAttributes = {
    upperReference: false,
    sideReference: true,
    horizontalLines: true,
    colorMap: false,
    fillPatterns: true,
    additionalPoints: true,
    well: 1
}

const proportion = 0.9;
const width = proportion*500;
const height = proportion*500;

const ml = width*50/500;
const mr = width*200/500;
const mt = height*50/500;
const mb = height*50/500;
const alphaName = "Petróleo (%)";

export { proportion ,width, height, ml, mr, mt, mb, alphaName };


const datosIniciales = [
    ["CAPA",6,5,0,"blue","blue"],
["CAPA",10.62,208,0,"blue","blue"],
["CAPA",19.61,599,0,"blue","blue"],
["CAPA",28.3,990,0,"blue","blue"],
["CAPA",32.77,1190,0,"blue","blue"],
["CAPA",33.83,1237,0,"blue","blue"],
["CAPA",34.66,1285,0,"blue","blue"],
["CAPA",36.76,1379,0,"blue","blue"],
["CAPA",39.19,1519,0,"blue","blue"],
["CAPA",45.01,1783,0,"blue","blue"],
["CAPA",50.83,2047,0,"blue","blue"],
["CAPA",52.98,2171,0,"blue","blue"],
["CAPA",55.7,2295,0,"blue","blue"],
["CAPA",63.33,2644,0,"blue","blue"],
["CAPA",70.95,2993,0,"blue","blue"],
["CAPA",78.56,3341,0,"blue","blue"],
["CAPA",81.17,3482,0,"blue","blue"],
["CAPA",87.96,3794,0,"blue","blue"],
["CAPA",94.75,4107,0,"blue","blue"],
["CAPA",101.55,4420,0,"blue","blue"],
["CAPA",108.35,4732,0.03,"blue","blue"],
["CAPA",116.87,5124,0.11,"blue","blue"],
["CAPA",125.42,5515,0.19,"blue","blue"],
["CAPA",133.98,5907,0.41,"blue","blue"],
["CAPA",142.56,6299,0.94,"blue","blue"],
["CAPA",149.19,6678,0,"blue","blue"],
["CAPA",155.86,7058,0,"blue","blue"],
["CAPA",162.57,7437,0,"blue","blue"],
["CAPA",167.94,7737,0,"blue","blue"],
["CAPA",169.49,7834,0,"blue","blue"],
["CAPA",170.37,7883,0,"blue","blue"],
["CAPA",171.26,7932,0,"blue","blue"],
["CAPA",179.13,8285,0,"blue","blue"],
["CAPA",187.08,8639,0,"blue","blue"],
["CAPA",195.11,8992,0,"blue","blue"],
["CAPA",202.06,9299,0,"blue","blue"],
["CAPA",209.17,9607,0,"blue","blue"],
["CAPA",216.42,9914,0,"blue","blue"]

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
    { m: 1240, C: 49 },
    { m: 1600, C: 51 },
    { m: 1820, C: 59 },
    { m: 1950, C: 64 },
    { m: 2017, C: 71 }
];

// Configuración de ejes
const ejeXConfig = {
    dominio: [0, 400],
    ticksMajor: d3.range(0, 200, 50),
    ticksMinor: d3.range(0, 200, 40),
    titulo: "Temperatura [C]"
};

const ejeYConfig = {
    dominio: [0, 9914],
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

