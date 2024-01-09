export const graphicAttributes = {
    upperReference: true,
    sideReference: false,
    horizontalLines: false,
    colorMap: false,
    fillPatterns: false,
    additionalPoints: false,
    well: 1,
    graphType: "rhoTiempo"
}

const proportion = 1;
const width = proportion*600;
const height = proportion*500;

const ml = width*0.13;
const mr = width*0.05;
const mt = height*0.1;
const mb = height*0.15;
const alphaName = "Petróleo (%)";

export { proportion,width, height, ml, mr, mt, mb, alphaName };


const datosIniciales = [
    ["Titoniano",	150.1	,	0.23	 ,0, "black", "black"],
    ["Titoniano",	150	,	0.23	 ,0, "black", "black"],
    ["Titoniano",	145	,	0.25	 ,0, "black", "black"],
    ["Titoniano",	140.9	,	0.29	 ,0, "black", "black"],
    ["Titoniano",	130	,	0.31	 ,0, "black", "black"],
    ["Titoniano",	129.9	,	0.31	 ,0, "black", "black"],
    ["Titoniano",	119.4	,	0.32	 ,0, "black", "black"],
    ["Titoniano",	115	,	0.32	 ,0, "black", "black"],
    ["Titoniano",	100.1	,	0.34	 ,0, "black", "black"],
    ["Titoniano",	81.09	,	0.37	 ,0, "black", "black"],
    ["Titoniano",	70	,	0.39	 ,0, "black", "black"],
    ["Titoniano",	65.5	,	0.4	 ,0, "black", "black"],
    ["Titoniano",	51	,	0.59	 ,0, "black", "black"],
    ["Titoniano",	50	,	0.6	 ,0, "black", "black"],
    ["Titoniano",	48.6	,	0.62	 ,0, "black", "black"],
    ["Titoniano",	37	,	0.74	 ,0, "black", "black"],
    ["Titoniano",	25	,	0.84	 ,0, "black", "black"],
    ["Titoniano",	23	,	0.86	 ,0, "black", "black"],
    ["Titoniano",	20.3	,	0.9	 ,0, "black", "black"],
    ["Titoniano",	16	,	1.06	 ,0, "black", "black"],
    ["Titoniano",	13	,	1.16	 ,0, "black", "black"],
    ["Titoniano",	11.6	,	1.19	 ,0, "black", "black"],
    ["Titoniano",	6.8	,	1.35	 ,0, "black", "black"],
    ["Titoniano",	5.3	,	1.39	 ,0, "black", "black"],
    ["Titoniano",	4	,	1.43	 ,0, "black", "black"],
    ["Titoniano",	3.8	,	1.43	 ,0, "black", "black"],
    ["Titoniano",	3.6	,	1.44	 ,0, "black", "black"],
    ["Titoniano",	2.7	,	1.47	 ,0, "black", "black"],
    ["Titoniano",	1.8	,	1.5	 ,0, "black", "black"],
    ["Titoniano",	0	,	1.68	 ,0, "black", "black"]
    
    
   

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
    dominio: [150.1, 0],
    ticksMajor: d3.range(0, 100, 10),
    ticksMinor: d3.range(0, 100, 5),
    titulo: "Tiempo [Ma]"
};

const ejeYConfig = {
    dominio: [3, 0],
    ticksMajor: d3.range(0, 1, 0.1),
    ticksMinor: d3.range(0, 1, 0.01),
    titulo: "Reflectancia de Vitrinita [%Ro]"
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

