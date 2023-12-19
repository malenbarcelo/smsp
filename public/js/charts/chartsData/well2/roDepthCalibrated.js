export const graphicAttributes = {
    upperReference: false,
    sideReference: true,
    horizontalLines: true,
    colorMap: false,
    fillPatterns: true,
    additionalPoints: true,
    additionalRanges: false,
    well: 1
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
    ["CAPA",	0.2	,	5	,0,"black","black"],
    ["CAPA",	0.25	,	208	,0,"black","black"],
    ["CAPA",	0.27	,	599	,0,"black","black"],
    ["CAPA",	0.3	,	990	,0,"black","black"],
    ["CAPA",	0.31	,	1190	,0,"black","black"],
    ["CAPA",	0.31	,	1237	,0,"black","black"],
    ["CAPA",	0.31	,	1285	,0,"black","black"],
    ["CAPA",	0.32	,	1379	,0,"black","black"],
    ["CAPA",	0.33	,	1520	,0,"black","black"],
    ["CAPA",	0.35	,	1783	,0,"black","black"],
    ["CAPA",	0.37	,	2047	,0,"black","black"],
    ["CAPA",	0.38	,	2171	,0,"black","black"],
    ["CAPA",	0.4	,	2296	,0,"black","black"],
    ["CAPA",	0.43	,	2644	,0,"black","black"],
    ["CAPA",	0.47	,	2993	,0,"black","black"],
    ["CAPA",	0.52	,	3342	,0,"black","black"],
    ["CAPA",	0.54	,	3482	,0,"black","black"],
    ["CAPA",	0.59	,	3794	,0,"black","black"],
    ["CAPA",	0.64	,	4107	,0,"black","black"],
    ["CAPA",	0.68	,	4419	,0,"black","black"],
    ["CAPA",	0.73	,	4732	,0,"black","black"],
    ["CAPA",	0.79	,	5123	,0,"black","black"],
    ["CAPA",	0.88	,	5515	,0,"black","black"],
    ["CAPA",	1.01	,	5906	,0,"black","black"],
    ["CAPA",	1.15	,	6298	,0,"black","black"],
    ["CAPA",	1.26	,	6677	,0,"black","black"],
    ["CAPA",	1.4	,	7057	,0,"black","black"],
    ["CAPA",	1.53	,	7435	,0,"black","black"],
    ["CAPA",	1.66	,	7735	,0,"black","black"],
    ["CAPA",	1.7	,	7832	,0,"black","black"],
    ["CAPA",	1.72	,	7881	,0,"black","black"],
    ["CAPA",	1.74	,	7930	,0,"black","black"],
    ["CAPA",	1.93	,	8284	,0,"black","black"],
    ["CAPA",	2.15	,	8637	,0,"black","black"],
    ["CAPA",	2.36	,	8990	,0,"black","black"],
    ["CAPA",	2.58	,	9298	,0,"black","black"],
    ["CAPA",	2.78	,	9605	,0,"black","black"],
    ["CAPA",	3.03	,	9912	,0,"black","black"]
    

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
    { m: 1700, C: 0.29 },
    { m: 2100, C: 0.33 },
    { m: 2320, C: 0.38 },
    { m: 2355, C: 0.42 },
    { m: 2150, C: 0.6 },
    { m: 2060, C: 0.65 }
];

// Configuración de ejes
const ejeXConfig = {
    dominio: [0,2.5],
    ticksMajor: d3.range(0, 200, 50),
    ticksMinor: d3.range(0, 200, 40),
    titulo: "Reflectancia de Vitrinita [%Ro]"
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

