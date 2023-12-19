//this chart is equal to tempDepthCalibrated
export const graphicAttributes = {
    upperReference: false,
    sideReference: true,
    horizontalLines: true,
    colorMap: false,
    fillPatterns: true,
    additionalPoints: true,
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
    ["CAPA",	22	,	5	,0,"blue","blue"],
["CAPA",	26.7	,	208	,0,"blue","blue"],
["CAPA",	35.8	,	599	,0,"blue","blue"],
["CAPA",	44.57	,	990	,0,"blue","blue"],
["CAPA",	49.06	,	1190	,0,"blue","blue"],
["CAPA",	50.12	,	1237	,0,"blue","blue"],
["CAPA",	50.97	,	1285	,0,"blue","blue"],
["CAPA",	53.07	,	1379	,0,"blue","blue"],
["CAPA",	55.54	,	1520	,0,"blue","blue"],
["CAPA",	61.37	,	1783	,0,"blue","blue"],
["CAPA",	67.2	,	2047	,0,"blue","blue"],
["CAPA",	69.37	,	2171	,0,"blue","blue"],
["CAPA",	72.1	,	2296	,0,"blue","blue"],
["CAPA",	79.74	,	2644	,0,"blue","blue"],
["CAPA",	87.37	,	2993	,0,"blue","blue"],
["CAPA",	94.99	,	3342	,0,"blue","blue"],
["CAPA",	97.62	,	3482	,0,"blue","blue"],
["CAPA",	104.42	,	3794	,0,"blue","blue"],
["CAPA",	111.23	,	4107	,0,"blue","blue"],
["CAPA",	118.04	,	4419	,0,"blue","blue"],
["CAPA",	124.86	,	4732	,0,"blue","blue"],
["CAPA",	133.41	,	5123	,0,"blue","blue"],
["CAPA",	141.98	,	5515	,0,"blue","blue"],
["CAPA",	150.58	,	5906	,0,"blue","blue"],
["CAPA",	159.2	,	6298	,0,"blue","blue"],
["CAPA",	165.95	,	6677	,0,"blue","blue"],
["CAPA",	172.75	,	7057	,0,"blue","blue"],
["CAPA",	179.61	,	7435	,0,"blue","blue"],
["CAPA",	185.11	,	7735	,0,"blue","blue"],
["CAPA",	186.68	,	7832	,0,"blue","blue"],
["CAPA",	187.58	,	7881	,0,"blue","blue"],
["CAPA",	188.49	,	7930	,0,"blue","blue"],
["CAPA",	196.44	,	8284	,0,"blue","blue"],
["CAPA",	204.45	,	8637	,0,"blue","blue"],
["CAPA",	212.54	,	8990	,0,"blue","blue"],
["CAPA",	219.8	,	9298	,0,"blue","blue"],
["CAPA",	227.22	,	9605	,0,"blue","blue"],
["CAPA",	234.81	,	9912	,0,"blue","blue"]

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

