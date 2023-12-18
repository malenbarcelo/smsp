export const graphicAttributes = {
    upperReference: true,
    sideReference: true,
    horizontalLines: false,
    colorMap: true,
    fillPatterns: true,
    well: 0
}

const proportion = 0.65;
const width = proportion*800;
const height = proportion*600;

const ml = width*50/800;
const mr = width*200/800;
const mt = height*50/600;
const mb = height*150/600;
const alphaName = "TR (%)";

export { proportion,width, height, ml, mr, mt, mb, alphaName };

const datosIniciales = [
    ["TERCIARIO",	5.33	,	1	,	0	, "black","black"],
    ["TERCIARIO",	0	,	0	,	0	, "black","black"],
    ["MARANON",	7.35	,	1	,	0	, "black","black"],
    ["MARANON",	5.33	,	1	,	0	, "black","black"],
    ["MARANON",	0	,	340	,	0	, "black","black"],
    ["PEBAS",	13.65	,	1	,	0	, "black","black"],
    ["PEBAS",	7.35	,	1	,	0	, "black","black"],
    ["PEBAS",	5.33	,	1128	,	0	, "black","black"],
    ["PEBAS",	0	,	1411	,	0	, "black","black"],
    ["CHAMBIRA",	28.4	,	3	,	0	, "black","black"],
    ["CHAMBIRA",	13.65	,	1	,	0	, "black","black"],
    ["CHAMBIRA",	7.35	,	412	,	0	, "black","black"],
    ["CHAMBIRA",	5.33	,	1463	,	0	, "black","black"],
    ["CHAMBIRA",	0	,	1738	,	0	, "black","black"],
    ["POZOSHALE",	30	,	3	,	0	, "black","black"],
    ["POZOSHALE",	28.4	,	3	,	0	, "black","black"],
    ["POZOSHALE",	13.65	,	1557	,	0.02	, "black","black"],
    ["POZOSHALE",	7.35	,	1893	,	0.1	, "black","black"],
    ["POZOSHALE",	5.33	,	2809	,	0.21	, "black","black"],
    ["POZOSHALE",	0	,	3055	,	0.96	, "black","black"],
    ["POZOSAND"	,	33.9	,	3	,	0	, "black","black"],
    ["POZOSAND",	30	,	3	,	0	, "black","black"],
    ["POZOSAND",	28.4	,	172	,	0	, "black","black"],
    ["POZOSAND",	13.65	,	1685	,	0	, "black","black"],
    ["POZOSAND",	7.35	,	2019	,	0	, "black","black"],
    ["POZOSAND",	5.33	,	2931	,	0	, "black","black"],
    ["POZOSAND",	0	,	3176	,	0	, "black","black"],
    ["YAHUARANGO",	70.6	,	7	,	0	, "black","black"],
    ["YAHUARANGO",	33.9	,	3	,	0	, "black","black"],
    ["YAHUARANGO",	30	,	80	,	0	, "black","black"],
    ["YAHUARANGO",	28.4	,	246	,	0	, "black","black"],
    ["YAHUARANGO",	13.65	,	1746	,	0	, "black","black"],
    ["YAHUARANGO",	7.35	,	2078	,	0	, "black","black"],
    ["YAHUARANGO",	5.33	,	2986	,	0	, "black","black"],
    ["YAHUARANGO",	0	,	3230	,	0	, "black","black"],
    ["VIVIAN",	83.5	,	8	,	0	, "black","black"],
    ["VIVIAN",	70.6	,	7	,	0	, "black","black"],
    ["VIVIAN",	33.9	,	312	,	0	, "black","black"],
    ["VIVIAN",	30	,	359	,	0	, "black","black"],
    ["VIVIAN",	28.4	,	487	,	0	, "black","black"],
    ["VIVIAN",	13.65	,	1903	,	0	, "black","black"],
    ["VIVIAN",	7.35	,	2230	,	0	, "black","black"],
    ["VIVIAN",	5.33	,	3133	,	0	, "black","black"],
    ["VIVIAN",	0	,	3375	,	0	, "black","black"],
    ["CHONTA",	86	,	9	,	0	, "black","black"],
    ["CHONTA",	83.5	,	8	,	0	, "black","black"],
    ["CHONTA",	70.6	,	642	,	0	, "black","black"],
    ["CHONTA",	33.9	,	925	,	0	, "black","black"],
    ["CHONTA",	30	,	966	,	0	, "black","black"],
    ["CHONTA",	28.4	,	1079	,	0	, "black","black"],
    ["CHONTA",	13.65	,	2415	,	0.01	, "black","black"],
    ["CHONTA",	7.35	,	2732	,	0.04	, "black","black"],
    ["CHONTA",	5.33	,	3634	,	0.08	, "black","black"],
    ["CHONTA",	0	,	3872	,	0.49	, "black","black"],
    ["CHONTASAND",	89.3	,	9	,	0	, "black","black"],
    ["CHONTASAND",	86	,	9	,	0	, "black","black"],
    ["CHONTASAND",	83.5	,	578	,	0	, "black","black"],
    ["CHONTASAND",	70.6	,	1018	,	0	, "black","black"],
    ["CHONTASAND",	33.9	,	1279	,	0	, "black","black"],
    ["CHONTASAND",	30	,	1314	,	0	, "black","black"],
    ["CHONTASAND"	,	28.4	,	1417	,	0	, "black","black"],
    ["CHONTASAND",	13.65	,	2711	,	0	, "black","black"],
    ["CHONTASAND",	7.35	,	3024	,	0	, "black","black"],
    ["CHONTASAND",	5.33	,	3926	,	0	, "black","black"],
    ["CHONTASAND",	0	,	4162	,	0	, "black","black"],
    ["AGUACALIENTE",	99.5	,	10	,	0	, "black","black"],
    ["AGUACALIENTE",	89.3	,	9	,	0	, "black","black"],
    ["AGUACALIENTE",	86	,	59	,	0	, "black","black"],
    ["AGUACALIENTE",	83.5	,	625	,	0	, "black","black"],
    ["AGUACALIENTE",	70.6	,	1061	,	0	, "black","black"],
    ["AGUACALIENTE",	33.9	,	1321	,	0	, "black","black"],
    ["AGUACALIENTE",	30	,	1356	,	0	, "black","black"],
    ["AGUACALIENTE",	28.4	,	1458	,	0	, "black","black"],
    ["AGUACALIENTE",	13.65	,	2749	,	0	, "black","black"],
    ["AGUACALIENTE",	7.35	,	3063	,	0	, "black","black"],
    ["AGUACALIENTE",	5.33	,	3964	,	0	, "black","black"],
    ["AGUACALIENTE",	0	,	4200	,	0	, "black","black"],
    ["RAYA",	100	,	10	,	0	, "black","black"],
    ["RAYA",	99.5	,	10	,	0	, "black","black"],
    ["RAYA",	89.3	,	36	,	0	, "black","black"],
    ["RAYA",	86	,	86	,	0	, "black","black"],
    ["RAYA",	83.5	,	650	,	0	, "black","black"],
    ["RAYA",	70.6	,	1084	,	0	, "black","black"],
    ["RAYA",	33.9	,	1343	,	0	, "black","black"],
    ["RAYA",	30	,	1378	,	0	, "black","black"],
    ["RAYA",	28.4	,	1480	,	0	, "black","black"],
    ["RAYA",	13.65	,	2770	,	0.06	, "black","black"],
    ["RAYA",	7.35	,	3083	,	0.23	, "black","black"],
    ["RAYA",	5.33	,	3984	,	0.39	, "black","black"],
    ["RAYA",	0	,	4220	,	1.2	, "black","black"],
    ["RAYABASE",	100	,	486	,	0	, "black","black"],
    ["RAYABASE",	99.5	,	486	,	0	, "black","black"],
    ["RAYABASE",	89.3	,	493	,	0	, "black","black"],
    ["RAYABASE",	86	,	515	,	0	, "black","black"],
    ["RAYABASE",	83.5	,	976	,	0	, "black","black"],
    ["RAYABASE",	70.6	,	1356	,	0	, "black","black"],
    ["RAYABASE",	33.9	,	1603	,	0	, "black","black"],
    ["RAYABASE",	30	,	1634	,	0	, "black","black"],
    ["RAYABASE",	28.4	,	1736	,	0	, "black","black"],
    ["RAYABASE",	13.65	,	3006	,	0.06	, "black","black"],
    ["RAYABASE",	7.35	,	3315	,	0.23	, "black","black"],
    ["RAYABASE",	5.33	,	4218	,	0.39	, "black","black"],
    ["RAYABASE",	0	,	4450	,	1.2	, "black","black"]
    
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
    { min: 0, max: 0.25, color: [190, 197, 202] },
    { min: 0.25, max: 0.5, color: [181, 165, 187] },
    { min: 0.5, max: 0.75, color: [172, 133, 172] },
    { min: 0.75, max: 1.0, color: [162, 101, 156] },
    { min: 1.0, max: 1.25, color: [153, 70, 141] },
    { min: 1.25, max: 1.5, color: [150, 45, 132] },
    { min: 1.5, max: 1.75, color: [168, 51, 149] },
    { min: 1.75, max: 2.0, color: [187, 56, 166] },
    { min: 2.0, max: 2.25, color: [206, 62, 183] },
    { min: 2.25, max: 2.5, color: [225, 68, 199] },
    { min: 2.5, max: 2.75, color: [237, 78, 197] },
    { min: 2.75, max: 3.0, color: [229, 93, 174] },
    { min: 3.0, max: 3.25, color: [244, 108, 151] },
    { min: 3.25, max: 3.5, color: [248, 123, 128] },
    { min: 3.5, max: 3.75, color: [251, 138, 106] },
    { min: 3.75, max: 4.0, color: [252, 160, 114] },
    { min: 4.0, max: 4.25, color: [252, 183, 134] },
    { min: 4.25, max: 4.5, color: [252, 206, 153] },
    { min: 4.5, max: 4.75, color: [252, 230, 172] },
    { min: 4.75, max: 5.0, color: [252, 253, 191] }
];

// Exporta las configuraciones y datos para que sean accesibles desde otros archivos
export {
    puntos,
    ejeXConfig,
    ejeYConfig,
    datosCapas,
    colorPalette
};

