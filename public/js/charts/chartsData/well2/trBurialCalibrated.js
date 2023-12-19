﻿export const graphicAttributes = {
    upperReference: true,
    sideReference: true,
    horizontalLines: false,
    colorMap: true,
    fillPatterns: true,
    extraPoligons: false,
    well:1
}

const proportion = 0.8;
const width = proportion*800;
const height = proportion*600;

const ml = width*50/800;
const mr = width*200/800;
const mt = height*50/600;
const mb = height*150/600;
const alphaName = "TR (%)";

export { proportion,width, height, ml, mr, mt, mb, alphaName };

const datosIniciales = [
    ["Cuaternario Sup",1.8,5,0,"black","black"],
    ["Cuaternario Sup",0,5,0,"black","black"],
    ["Cuaternario Inf",2.7,5,0,"black","black"],
    ["Cuaternario Inf",1.8,5,0,"black","black"],
    ["Cuaternario Inf",0,208,0,"black","black"],
    ["Plioceno Sup2",3.6,5,0,"black","black"],
    ["Plioceno Sup2",2.7,5,0,"black","black"],
    ["Plioceno Sup2",1.8,835,0,"black","black"],
    ["Plioceno Sup2",0,990,0,"black","black"],
    ["Plioceno Sup1",3.8,5,0,"black","black"],
    ["Plioceno Sup1",3.6,5,0,"black","black"],
    ["Plioceno Sup1",2.7,244,0,"black","black"],
    ["Plioceno Sup1",1.8,1041,0,"black","black"],
    ["Plioceno Sup1",0,1190,0,"black","black"],
    ["Plioceno Inf RES",4,5,0,"black","black"],
    ["Plioceno Inf RES",3.8,5,0,"black","black"],
    ["Plioceno Inf RES",3.6,70,0,"black","black"],
    ["Plioceno Inf RES",2.7,296,0,"black","black"],
    ["Plioceno Inf RES",1.8,1090,0,"black","black"],
    ["Plioceno Inf RES",0,1237,0,"black","black"],
    ["Plioceno Inf Base",5.3,5,0,"black","black"],
    ["Plioceno Inf Base",4,5,0,"black","black"],
    ["Plioceno Inf Base",3.8,65,0,"black","black"],
    ["Plioceno Inf Base",3.6,128,0,"black","black"],
    ["Plioceno Inf Base",2.7,349,0,"black","black"],
    ["Plioceno Inf Base",1.8,1139,0,"black","black"],
    ["Plioceno Inf Base",0,1285,0,"black","black"],
    ["Mioceno Sup RES",6.8,5,0,"black","black"],
    ["Mioceno Sup RES",5.3,5,0,"black","black"],
    ["Mioceno Sup RES",4,127,0,"black","black"],
    ["Mioceno Sup RES",3.8,180,0,"black","black"],
    ["Mioceno Sup RES",3.6,238,0,"black","black"],
    ["Mioceno Sup RES",2.7,451,0,"black","black"],
    ["Mioceno Sup RES",1.8,1236,0,"black","black"],
    ["Mioceno Sup RES",0,1379,0,"black","black"],
    ["Mioceno Sup Base",11.6,5,0,"black","black"],
    ["Mioceno Sup Base",6.8,5,0,"black","black"],
    ["Mioceno Sup Base",5.3,176,0,"black","black"],
    ["Mioceno Sup Base",4,289,0,"black","black"],
    ["Mioceno Sup Base",3.8,340,0,"black","black"],
    ["Mioceno Sup Base",3.6,397,0,"black","black"],
    ["Mioceno Sup Base",2.7,601,0,"black","black"],
    ["Mioceno Sup Base",1.8,1380,0,"black","black"],
    ["Mioceno Sup Base",0,1520,0,"black","black"],
    ["Mioceno Medio RES",13,5,0,"black","black"],
    ["Mioceno Medio RES",11.6,5,0,"black","black"],
    ["Mioceno Medio RES",6.8,607,0,"black","black"],
    ["Mioceno Medio RES",5.3,757,0,"black","black"],
    ["Mioceno Medio RES",4,858,0,"black","black"],
    ["Mioceno Medio RES",3.8,907,0,"black","black"],
    ["Mioceno Medio RES",3.6,961,0,"black","black"],
    ["Mioceno Medio RES",2.7,1153,0,"black","black"],
    ["Mioceno Medio RES",1.8,1918,0,"black","black"],
    ["Mioceno Medio RES",0,2047,0,"black","black"],
    ["Mioceno Medio Base",16,5,0,"black","black"],
    ["Mioceno Medio Base",13,5,0,"black","black"],
    ["Mioceno Medio Base",11.6,163,0,"black","black"],
    ["Mioceno Medio Base",6.8,741,0,"black","black"],
    ["Mioceno Medio Base",5.3,890,0,"black","black"],
    ["Mioceno Medio Base",4,989,0,"black","black"],
    ["Mioceno Medio Base",3.8,1038,0,"black","black"],
    ["Mioceno Medio Base",3.6,1092,0,"black","black"],
    ["Mioceno Medio Base",2.7,1282,0,"black","black"],
    ["Mioceno Medio Base",1.8,2044,0,"black","black"],
    ["Mioceno Medio Base",0,2171,0,"black","black"],
    ["Mioceno Inf",23,5,0,"black","black"],
    ["Mioceno Inf",20.3,5,0,"black","black"],
    ["Mioceno Inf",16,5,0,"black","black"],
    ["Mioceno Inf",13,167,0,"black","black"],
    ["Mioceno Inf",11.6,310,0,"black","black"],
    ["Mioceno Inf",6.8,873,0,"black","black"],
    ["Mioceno Inf",5.3,1020,0,"black","black"],
    ["Mioceno Inf",4,1119,0,"black","black"],
    ["Mioceno Inf",3.8,1167,0,"black","black"],
    ["Mioceno Inf",3.6,1221,0,"black","black"],
    ["Mioceno Inf",2.7,1410,0,"black","black"],
    ["Mioceno Inf",1.8,2170,0,"black","black"],
    ["Mioceno Inf",0,2296,0,"black","black"],
    ["Oligoceno",25,5,0,"black","black"],
    ["Oligoceno",23,5,0,"black","black"],
    ["Oligoceno",20.3,503,0,"black","black"],
    ["Oligoceno",16,1185,0,"black","black"],
    ["Oligoceno",13,1317,0,"black","black"],
    ["Oligoceno",11.6,1444,0,"black","black"],
    ["Oligoceno",6.8,1960,0,"black","black"],
    ["Oligoceno",5.3,2100,0,"black","black"],
    ["Oligoceno",4,2193,0,"black","black"],
    ["Oligoceno",3.8,2241,0,"black","black"],
    ["Oligoceno",3.6,2293,0,"black","black"],
    ["Oligoceno",2.7,2476,0,"black","black"],
    ["Oligoceno",1.8,3225,0,"black","black"],
    ["Oligoceno",0,3342,0,"black","black"],
    ["Oligoceno-Eoceno",48.6,5,0,"black","black"],
    ["Oligoceno-Eoceno",37,5,0,"black","black"],
    ["Oligoceno-Eoceno",25,5,0,"black","black"],
    ["Oligoceno-Eoceno",23,203,0,"black","black"],
    ["Oligoceno-Eoceno",20.3,666,0,"black","black"],
    ["Oligoceno-Eoceno",16,1338,0,"black","black"],
    ["Oligoceno-Eoceno",13,1468,0,"black","black"],
    ["Oligoceno-Eoceno",11.6,1593,0,"black","black"],
    ["Oligoceno-Eoceno",6.8,2105,0,"black","black"],
    ["Oligoceno-Eoceno",5.3,2244,0,"black","black"],
    ["Oligoceno-Eoceno",4,2337,0,"black","black"],
    ["Oligoceno-Eoceno",3.8,2384,0,"black","black"],
    ["Oligoceno-Eoceno",3.6,2436,0,"black","black"],
    ["Oligoceno-Eoceno",2.7,2619,0,"black","black"],
    ["Oligoceno-Eoceno",1.8,3366,0,"black","black"],
    ["Oligoceno-Eoceno",0,3482,0,"black","black"],
    ["Eoceno-Paleoceno",65.5,5,0,"black","black"],
    ["Eoceno-Paleoceno",51,5,0,"black","black"],
    ["Eoceno-Paleoceno",50,5,0,"black","black"],
    ["Eoceno-Paleoceno",48.6,5,0,"black","black"],
    ["Eoceno-Paleoceno",37,747,0,"black","black"],
    ["Eoceno-Paleoceno",25,1430,0,"black","black"],
    ["Eoceno-Paleoceno",23,1599,0,"black","black"],
    ["Eoceno-Paleoceno",20.3,2016,0,"black","black"],
    ["Eoceno-Paleoceno",16,2651,0,"black","black"],
    ["Eoceno-Paleoceno",13,2769,0,"black","black"],
    ["Eoceno-Paleoceno",11.6,2889,0,"black","black"],
    ["Eoceno-Paleoceno",6.8,3382,0,"black","black"],
    ["Eoceno-Paleoceno",5.3,3516,0,"black","black"],
    ["Eoceno-Paleoceno",4,3604,0,"black","black"],
    ["Eoceno-Paleoceno",3.8,3651,0,"black","black"],
    ["Eoceno-Paleoceno",3.6,3702,0,"black","black"],
    ["Eoceno-Paleoceno",2.7,3881,0,"black","black"],
    ["Eoceno-Paleoceno",1.8,4622,0,"black","black"],
    ["Eoceno-Paleoceno",0,4732,0,"black","black"],
    ["Cretácico Superior",115,5,0,"black","black"],
    ["Cretácico Superior",100.1,5,0,"black","black"],
    ["Cretácico Superior",81.09,5,0,"black","black"],
    ["Cretácico Superior",70,5,0,"black","black"],
    ["Cretácico Superior",65.5,5,0,"black","black"],
    ["Cretácico Superior",51,1590,0,"black","black"],
    ["Cretácico Superior",50,1694,0,"black","black"],
    ["Cretácico Superior",48.6,1833,0,"black","black"],
    ["Cretácico Superior",37,2448,0,"black","black"],
    ["Cretácico Superior",25,3081,0,"black","black"],
    ["Cretácico Superior",23,3243,0,"black","black"],
    ["Cretácico Superior",20.3,3648,0,"black","black"],
    ["Cretácico Superior",16,4265,0,"black","black"],
    ["Cretácico Superior",13,4374,0,"black","black"],
    ["Cretácico Superior",11.6,4489,0,"black","black"],
    ["Cretácico Superior",6.8,4968,0,"black","black"],
    ["Cretácico Superior",5.3,5099,0,"black","black"],
    ["Cretácico Superior",4,5184,0,"black","black"],
    ["Cretácico Superior",3.8,5230,0,"black","black"],
    ["Cretácico Superior",3.6,5280,0,"black","black"],
    ["Cretácico Superior",2.7,5457,0,"black","black"],
    ["Cretácico Superior",1.8,6192,0,"black","black"],
    ["Cretácico Superior",0,6298,0,"black","black"],
    ["Cretácico Inferior",145,5,0,"black","black"],
    ["Cretácico Inferior",140.9,5,0,"black","black"],
    ["Cretácico Inferior",130,5,0,"black","black"],
    ["Cretácico Inferior",129.9,5,0,"black","black"],
    ["Cretácico Inferior",119.4,5,0,"black","black"],
    ["Cretácico Inferior",115,5,0,"black","black"],
    ["Cretácico Inferior",100.1,415,0,"black","black"],
    ["Cretácico Inferior",81.09,912,0,"black","black"],
    ["Cretácico Inferior",70,1192,0,"black","black"],
    ["Cretácico Inferior",65.5,1303,0,"black","black"],
    ["Cretácico Inferior",51,2805,0,"black","black"],
    ["Cretácico Inferior",50,2906,0,"black","black"],
    ["Cretácico Inferior",48.6,3041,0,"black","black"],
    ["Cretácico Inferior",37,3635,0,"black","black"],
    ["Cretácico Inferior",25,4251,0,"black","black"],
    ["Cretácico Inferior",23,4411,0,"black","black"],
    ["Cretácico Inferior",20.3,4812,0,"black","black"],
    ["Cretácico Inferior",16,5422,0,"black","black"],
    ["Cretácico Inferior",13,5527,0,"black","black"],
    ["Cretácico Inferior",11.6,5642,0,"black","black"],
    ["Cretácico Inferior",6.8,6114,0,"black","black"],
    ["Cretácico Inferior",5.3,6243,0,"black","black"],
    ["Cretácico Inferior",4,6327,0,"black","black"],
    ["Cretácico Inferior",3.8,6372,0,"black","black"],
    ["Cretácico Inferior",3.6,6423,0,"black","black"],
    ["Cretácico Inferior",2.7,6598,0,"black","black"],
    ["Cretácico Inferior",1.8,7331,0,"black","black"],
    ["Cretácico Inferior",0,7435,0,"black","black"],
    ["Titoniano",152,5,0,"black","black"],
    ["Titoniano",150.1,5,0,"black","black"],
    ["Titoniano",150,5,0,"black","black"],
    ["Titoniano",145,5,0,"black","black"],
    ["Titoniano",140.9,56,0,"black","black"],
    ["Titoniano",130,189,0,"black","black"],
    ["Titoniano",129.9,190,0,"black","black"],
    ["Titoniano",119.4,315,0,"black","black"],
    ["Titoniano",115,366,0,"black","black"],
    ["Titoniano",100.1,760,0,"black","black"],
    ["Titoniano",81.09,1243,0.02,"black","black"],
    ["Titoniano",70,1518,0.05,"black","black"],
    ["Titoniano",65.5,1628,0.07,"black","black"],
    ["Titoniano",51,3118,6.51,"black","black"],
    ["Titoniano",50,3219,7.9,"black","black"],
    ["Titoniano",48.6,3353,10.6,"black","black"],
    ["Titoniano",37,3943,37.83,"black","black"],
    ["Titoniano",25,4556,61.48,"black","black"],
    ["Titoniano",23,4715,64.31,"black","black"],
    ["Titoniano",20.3,5115,69.92,"black","black"],
    ["Titoniano",16,5724,81.74,"black","black"],
    ["Titoniano",13,5829,85.74,"black","black"],
    ["Titoniano",11.6,5943,86.75,"black","black"],
    ["Titoniano",6.8,6414,89.78,"black","black"],
    ["Titoniano",5.3,6543,90.46,"black","black"],
    ["Titoniano",4,6627,91,"black","black"],
    ["Titoniano",3.8,6672,91.07,"black","black"],
    ["Titoniano",3.6,6723,91.14,"black","black"],
    ["Titoniano",2.7,6898,91.53,"black","black"],
    ["Titoniano",1.8,7631,92.01,"black","black"],
    ["Titoniano",0,7735,93.84,"black","black"],
    ["Kimmeridgiano",156,5,0,"black","black"],
    ["Kimmeridgiano",155.7,5,0,"black","black"],
    ["Kimmeridgiano",152,5,0,"black","black"],
    ["Kimmeridgiano",150.1,85,0,"black","black"],
    ["Kimmeridgiano",150,89,0,"black","black"],
    ["Kimmeridgiano",145,256,0,"black","black"],
    ["Kimmeridgiano",140.9,277,0,"black","black"],
    ["Kimmeridgiano",130,368,0,"black","black"],
    ["Kimmeridgiano",129.9,369,0,"black","black"],
    ["Kimmeridgiano",119.4,474,0,"black","black"],
    ["Kimmeridgiano",115,520,0,"black","black"],
    ["Kimmeridgiano",100.1,887,0,"black","black"],
    ["Kimmeridgiano",81.09,1357,0,"black","black"],
    ["Kimmeridgiano",70,1628,0,"black","black"],
    ["Kimmeridgiano",65.5,1736,0,"black","black"],
    ["Kimmeridgiano",51,3219,0,"black","black"],
    ["Kimmeridgiano",50,3319,0,"black","black"],
    ["Kimmeridgiano",48.6,3454,0,"black","black"],
    ["Kimmeridgiano",37,4042,0,"black","black"],
    ["Kimmeridgiano",25,4654,0,"black","black"],
    ["Kimmeridgiano",23,4813,0,"black","black"],
    ["Kimmeridgiano",20.3,5213,0,"black","black"],
    ["Kimmeridgiano",16,5822,0,"black","black"],
    ["Kimmeridgiano",13,5926,0,"black","black"],
    ["Kimmeridgiano",11.6,6040,0,"black","black"],
    ["Kimmeridgiano",6.8,6512,0,"black","black"],
    ["Kimmeridgiano",5.3,6640,0,"black","black"],
    ["Kimmeridgiano",4,6724,0,"black","black"],
    ["Kimmeridgiano",3.8,6770,0,"black","black"],
    ["Kimmeridgiano",3.6,6820,0,"black","black"],
    ["Kimmeridgiano",2.7,6995,0,"black","black"],
    ["Kimmeridgiano",1.8,7728,0,"black","black"],
    ["Kimmeridgiano",0,7832,0,"black","black"],
    ["Oxfordiano",165,5,0,"black","black"],
    ["Oxfordiano",162.7,5,0,"black","black"],
    ["Oxfordiano",156,5,0,"black","black"],
    ["Oxfordiano",155.7,10,0,"black","black"],
    ["Oxfordiano",152,66,0,"black","black"],
    ["Oxfordiano",150.1,145,0,"black","black"],
    ["Oxfordiano",150,149,0,"black","black"],
    ["Oxfordiano",145,315,0,"black","black"],
    ["Oxfordiano",140.9,336,0,"black","black"],
    ["Oxfordiano",130,426,0,"black","black"],
    ["Oxfordiano",129.9,427,0,"black","black"],
    ["Oxfordiano",119.4,531,0,"black","black"],
    ["Oxfordiano",115,576,0,"black","black"],
    ["Oxfordiano",100.1,942,0,"black","black"],
    ["Oxfordiano",81.09,1410,0,"black","black"],
    ["Oxfordiano",70,1680,0,"black","black"],
    ["Oxfordiano",65.5,1789,0,"black","black"],
    ["Oxfordiano",51,3270,0,"black","black"],
    ["Oxfordiano",50,3370,0,"black","black"],
    ["Oxfordiano",48.6,3505,0,"black","black"],
    ["Oxfordiano",37,4092,0,"black","black"],
    ["Oxfordiano",25,4703,0,"black","black"],
    ["Oxfordiano",23,4863,0,"black","black"],
    ["Oxfordiano",20.3,5263,0,"black","black"],
    ["Oxfordiano",16,5871,0,"black","black"],
    ["Oxfordiano",13,5975,0,"black","black"],
    ["Oxfordiano",11.6,6089,0,"black","black"],
    ["Oxfordiano",6.8,6561,0,"black","black"],
    ["Oxfordiano",5.3,6689,0,"black","black"],
    ["Oxfordiano",4,6773,0,"black","black"],
    ["Oxfordiano",3.8,6819,0,"black","black"],
    ["Oxfordiano",3.6,6869,0,"black","black"],
    ["Oxfordiano",2.7,7044,0,"black","black"],
    ["Oxfordiano",1.8,7777,0,"black","black"],
    ["Oxfordiano",0,7881,0,"black","black"],
    ["Jurásico Medio",183,5,0,"black","black"],
    ["Jurásico Medio",169.1,5,0,"black","black"],
    ["Jurásico Medio",165,5,0,"black","black"],
    ["Jurásico Medio",162.7,21,0,"black","black"],
    ["Jurásico Medio",156,66,0,"black","black"],
    ["Jurásico Medio",155.7,70,0,"black","black"],
    ["Jurásico Medio",152,126,0,"black","black"],
    ["Jurásico Medio",150.1,205,0,"black","black"],
    ["Jurásico Medio",150,209,0,"black","black"],
    ["Jurásico Medio",145,374,0,"black","black"],
    ["Jurásico Medio",140.9,394,0,"black","black"],
    ["Jurásico Medio",130,484,0,"black","black"],
    ["Jurásico Medio",129.9,485,0,"black","black"],
    ["Jurásico Medio",119.4,588,0,"black","black"],
    ["Jurásico Medio",115,633,0,"black","black"],
    ["Jurásico Medio",100.1,996,0,"black","black"],
    ["Jurásico Medio",81.09,1464,0,"black","black"],
    ["Jurásico Medio",70,1733,0,"black","black"],
    ["Jurásico Medio",65.5,1841,0,"black","black"],
    ["Jurásico Medio",51,3321,0,"black","black"],
    ["Jurásico Medio",50,3421,0,"black","black"],
    ["Jurásico Medio",48.6,3555,0,"black","black"],
    ["Jurásico Medio",37,4142,0,"black","black"],
    ["Jurásico Medio",25,4753,0,"black","black"],
    ["Jurásico Medio",23,4912,0,"black","black"],
    ["Jurásico Medio",20.3,5312,0,"black","black"],
    ["Jurásico Medio",16,5920,0,"black","black"],
    ["Jurásico Medio",13,6024,0,"black","black"],
    ["Jurásico Medio",11.6,6138,0,"black","black"],
    ["Jurásico Medio",6.8,6610,0,"black","black"],
    ["Jurásico Medio",5.3,6738,0,"black","black"],
    ["Jurásico Medio",4,6822,0,"black","black"],
    ["Jurásico Medio",3.8,6868,0,"black","black"],
    ["Jurásico Medio",3.6,6918,0,"black","black"],
    ["Jurásico Medio",2.7,7093,0,"black","black"],
    ["Jurásico Medio",1.8,7826,0,"black","black"],
    ["Jurásico Medio",0,7930,0,"black","black"],
    ["Basamento",200,3,0,"black","black"],
    ["Basamento",190,4,0,"black","black"],
    ["Basamento",183,5,0,"black","black"],
    ["Basamento",169.1,1029,0,"black","black"],
    ["Basamento",165,1301,0,"black","black"],
    ["Basamento",162.7,1304,0,"black","black"],
    ["Basamento",156,1333,0,"black","black"],
    ["Basamento",155.7,1337,0,"black","black"],
    ["Basamento",152,1381,0,"black","black"],
    ["Basamento",150.1,1454,0,"black","black"],
    ["Basamento",150,1458,0,"black","black"],
    ["Basamento",145,1608,0,"black","black"],
    ["Basamento",140.9,1621,0,"black","black"],
    ["Basamento",130,1694,0,"black","black"],
    ["Basamento",129.9,1695,0,"black","black"],
    ["Basamento",119.4,1785,0,"black","black"],
    ["Basamento",115,1825,0,"black","black"],
    ["Basamento",100.1,2160,0,"black","black"],
    ["Basamento",81.09,2601,0,"black","black"],
    ["Basamento",70,2858,0,"black","black"],
    ["Basamento",65.5,2962,0,"black","black"],
    ["Basamento",51,4413,0,"black","black"],
    ["Basamento",50,4511,0,"black","black"],
    ["Basamento",48.6,4644,0,"black","black"],
    ["Basamento",37,5218,0,"black","black"],
    ["Basamento",25,5819,0,"black","black"],
    ["Basamento",23,5977,0,"black","black"],
    ["Basamento",20.3,6376,0,"black","black"],
    ["Basamento",16,6982,0,"black","black"],
    ["Basamento",13,7085,0,"black","black"],
    ["Basamento",11.6,7198,0,"black","black"],
    ["Basamento",6.8,7670,0,"black","black"],
    ["Basamento",5.3,7798,0,"black","black"],
    ["Basamento",4,7882,0,"black","black"],
    ["Basamento",3.8,7928,0,"black","black"],
    ["Basamento",3.6,7978,0,"black","black"],
    ["Basamento",2.7,8153,0,"black","black"],
    ["Basamento",1.8,8886,0,"black","black"],
    ["Basamento",0,8990,0,"black","black"],
    ["Base Basamento",200,505,0,"black","black"],
    ["Base Basamento",190,740,0,"black","black"],
    ["Base Basamento",183,916,0,"black","black"],
    ["Base Basamento",169.1,1942,0,"black","black"],
    ["Base Basamento",165,2220,0,"black","black"],
    ["Base Basamento",162.7,2227,0,"black","black"],
    ["Base Basamento",156,2256,0,"black","black"],
    ["Base Basamento",155.7,2260,0,"black","black"],
    ["Base Basamento",152,2309,0,"black","black"],
    ["Base Basamento",150.1,2374,0,"black","black"],
    ["Base Basamento",150,2377,0,"black","black"],
    ["Base Basamento",145,2530,0,"black","black"],
    ["Base Basamento",140.9,2541,0,"black","black"],
    ["Base Basamento",130,2616,0,"black","black"],
    ["Base Basamento",129.9,2617,0,"black","black"],
    ["Base Basamento",119.4,2708,0,"black","black"],
    ["Base Basamento",115,2747,0,"black","black"],
    ["Base Basamento",100.1,3089,0,"black","black"],
    ["Base Basamento",81.09,3523,0,"black","black"],
    ["Base Basamento",70,3781,0,"black","black"],
    ["Base Basamento",65.5,3873,0,"black","black"],
    ["Base Basamento",51,5341,0,"black","black"],
    ["Base Basamento",50,5433,0,"black","black"],
    ["Base Basamento",48.6,5560,0,"black","black"],
    ["Base Basamento",37,6130,0,"black","black"],
    ["Base Basamento",25,6739,0,"black","black"],
    ["Base Basamento",23,6897,0,"black","black"],
    ["Base Basamento",20.3,7296,0,"black","black"],
    ["Base Basamento",16,7900,0,"black","black"],
    ["Base Basamento",13,8001,0,"black","black"],
    ["Base Basamento",11.6,8117,0,"black","black"],
    ["Base Basamento",6.8,8586,0,"black","black"],
    ["Base Basamento",5.3,8713,0,"black","black"],
    ["Base Basamento",4,8808,0,"black","black"],
    ["Base Basamento",3.8,8850,0,"black","black"],
    ["Base Basamento",3.6,8906,0,"black","black"],
    ["Base Basamento",2.7,9078,0,"black","black"],
    ["Base Basamento",1.8,9808,0,"black","black"],
    ["Base Basamento",0,9913,0,"black","black"]

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
    dominio: [200, 0],
    ticksMajor: d3.range(0, 200, 10),
    ticksMinor: d3.range(0, 200, 5),
    titulo: "Tiempo [Ma]"
};

const ejeYConfig = {
    dominio: [0, 9915],
    ticksMajor: d3.range(0, 9915, 500),
    ticksMinor: d3.range(0, 9915, 100),
    titulo: "Profundidad [m]"
};

const colorPalette = [
    { min: 0, max: 5, color: [190, 197, 202] },
    { min: 5, max:  10, color: [181, 165, 187] },
    { min: 10, max: 15, color: [172, 133, 172] },
    { min: 15, max: 20, color: [162, 101, 156] },
    { min: 20, max: 25, color: [153, 70, 141] },
    { min: 25, max: 30, color: [150, 45, 132] },
    { min: 30, max: 35, color: [168, 51, 149] },
    { min: 35, max: 40, color: [187, 56, 166] },
    { min: 40, max: 45, color: [206, 62, 183] },
    { min: 45, max: 50, color: [225, 68, 199] },
    { min: 50, max: 55, color: [237, 78, 197] },
    { min: 55, max: 60, color: [229, 93, 174] },
    { min: 60, max: 65, color: [244, 108, 151] },
    { min: 65, max: 70, color: [248, 123, 128] },
    { min: 70, max: 75, color: [251, 138, 106] },
    { min: 75, max: 80, color: [252, 160, 114] },
    { min: 80, max: 85, color: [252, 183, 134] },
    { min: 85, max: 90, color: [252, 206, 153] },
    { min: 90, max: 95, color: [252, 230, 172] },
    { min: 95, max: 100, color: [252, 253, 191] }
];

// Exporta las configuraciones y datos para que sean accesibles desde otros archivos
export {
    puntos,
    ejeXConfig,
    ejeYConfig,
    datosCapas,
    colorPalette
};

