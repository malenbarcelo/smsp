import { Runtime, Library, Inspector } from "./runtime.js"
import { texturasDeCapas, coloresDeCapas, lineasHorizontales, lineasVerticales1, lineasVerticales2, nombresDeCapas, nombresDeEras, nombresDeEpocas, coloresDeEras, coloresDeEpocas} from './lists.js';
import { definePatterns, defineClips } from './patternsAndClips.js';
import { createHorizontalRectangle, createVerticalRectangle, drawHorizontalLines, drawColorScale} from './graphAttributes.js';

window.addEventListener('load',async()=>{

    const myChart1 = document.getElementById('myChart1')
    
    const idWell = document.getElementById('idWell').innerText
    const chartName1 = document.getElementById('chartName1').innerText
    
    const runtime = new Runtime()

    const rutaArchivo = './chartsData/well' + idWell + '/' + chartName1 + '.js'
    
    const module = await import(rutaArchivo)

    //var {proportion,width,height,mb,ml,mt,mr,graphicAttributes,ejeXConfig,ejeYConfig,colorPalette,datosCapas,puntos,poligono1, lineaY0,alphaName} = module

    var {proportion,width, height, mb, ml, mt, mr, alphaName, graphicAttributes, ejeXConfig, ejeYConfig, colorPalette, datosCapas, poligonos,coloresPoligonos, lineaY0,puntos,rangos} = module

    const widthResolution = window.screen.width
    const heightResolution = window.screen.height

    proportion = proportion * (widthResolution / 1700)

    
    width = width * (widthResolution / 1700)
    height = height * (widthResolution / 1700)
    ml = ml * (widthResolution / 1700)
    mr = mr * (widthResolution / 1700)
    mt = mt * (widthResolution / 1700)
    mb = mb * (widthResolution / 1700)

    

    //////ZommedGraphs//////////////////////////////////////////
    window.xNew;
    window.yNew;


// https://observablehq.com/@wsygzn/zoom-candlesticks@36
function _1(md) {
  return (
    md`# hola`
  )
}

function _d3(require) {
  return (
    require('d3@5')
  )
}


function _4(d3, DOM) {

  let svg = d3.select(DOM.svg(width, height))
  
  let defs

  // Llama a la función para definir los patrones
  if(graphicAttributes.fillPatterns)
  {
    defs = definePatterns(svg);
  }

  let x = d3.scaleLinear()
    .domain(ejeXConfig.dominio)
    .range([ml, width - mr]);

  let y = d3.scaleLinear()
    .domain(ejeYConfig.dominio)
    .range([mt, height - mb]);

  let xNew = x;
  let yNew = y;
  window.xNew = xNew;
  window.yNew = yNew;

  //Crear los gradientes para las capas
  if(graphicAttributes.colorMap)
  {
    datosCapas.forEach((capa, index) => {
      const gradientId = `gradientFor${capa.nombre.replace(/\s+/g, '')}`; // Esto genera un ID único basado en el nombre de la capa
      const gradientDefinition = createDiscreteGradientForLayer(capa.datos, gradientId);
      defs.html(defs.html() + gradientDefinition); // Añadimos la definición del gradiente al contenedor <defs>
    });
  }

  svg.call(zoom)

  let ax = svg.append('g')
  ax.call(draw, datosCapas, x, y);

  //hide d3 bar with info
  document.documentElement.querySelectorAll('.observablehq--inspect').forEach(function(element) {
    element.style.display = 'none';
  })

  //  return svg.node()


  function zoom(svg) {
    svg.call(d3.zoom()
      .extent([[0, 0], [width, height]])
      .translateExtent([[0, 0], [width, height]])
      .scaleExtent([1, 10])
      .on('zoom', zoomed)
    );
  }

  function zoomed() {
    let transform = d3.event.transform;
    let scale = transform.k;

    // Calcula el límite máximo de traslación en X basado en el nivel de zoom
    let maxX = (width-mr) - (width-mr) * scale;
    let maxY = (height-mb) - (height-mb) * scale;
    let minX = ml - ml * scale;
    let minY = mt - mt * scale;

    // Restringe la traslación para que no exceda el límite
    if (transform.x < maxX) transform.x = maxX;
    if (transform.y < maxY) transform.y = maxY;
    if (transform.x > minX) transform.x = minX;
    if (transform.y > minY) transform.y = minY;

    xNew = transform.rescaleX(x);
    yNew = transform.rescaleY(y);
    window.xNew = xNew;
    window.yNew = yNew;

    ax.call(draw, datosCapas, xNew, yNew);
  }


  function draw(g, data, x, y) {
    if (data[0] && data[data.length - 1]) {
      //#region Preparacion de area del gràfico

      g.selectAll('g').remove()

      defineClips(svg,ml,mr,mt,mb,width,height);

      let XticksMajor = ejeXConfig.ticksMajor;
      let XticksMinor = ejeXConfig.ticksMinor;

      let xAxis = g => g.append('g')
        .attr('transform', `translate(0, ${height - mb})`)
        //.call(d3.axisBottom(x).tickValues(XticksMinor.concat(XticksMajor)))
        .call(d3.axisBottom(x).tickFormat(d => d))//d => XticksMajor.includes(d) ? d : ""))
        .call(g => {
          g.selectAll(".tick text")
              .style("font-size", `${proportion * 10}px`)
              .style("font-family", "Arial");
          g.selectAll(".tick line")
            .style("stroke-width", `${proportion*1}px`)
            .attr('y2', proportion * 5);
          g.select(".domain")  // Selecciona la línea principal del eje
            .style("stroke-width", `${proportion*1}px`);  // Ajusta este valor según el grosor deseado            
        })
        .attr("clip-path", "url(#clipX)")
        .append('text')  // Añade un elemento text
        .attr('x', (width - ml - mr) / 2 + ml)  // Posición en x (centrado)
        .attr('y', proportion*40)  // Posición en y (ajústalo según lo necesites)
        .attr('fill', 'black')  // Color del texto
        .attr('text-anchor', 'middle')  // Alineación del texto
        .attr('font-size', `${proportion * 10}px`)
        .text(ejeXConfig.titulo);  // Título del eje X

      let YticksMajor = ejeYConfig.ticksMajor;
      let YticksMinor = ejeYConfig.ticksMinor;

      let yAxis = g => g.append('g')
        .attr('transform', `translate(${ml}, 0)`)
        //.call(d3.axisLeft(y).tickValues(YticksMinor.concat(YticksMajor)))
        //.call(d3.axisLeft(y).tickFormat(null))
        .call(d3.axisLeft(y).tickFormat(d => d))//d => XticksMajor.includes(d) ? d : ""))
        .call(g => {
          g.selectAll(".tick text")
              .style("font-size", `${proportion * 10}px`)
              .style("font-family", "Arial");
              g.selectAll(".tick line")
              .style("stroke-width", `${proportion*1}px`)
              .attr('x2', -proportion * 5);
              g.select(".domain")  // Selecciona la línea principal del eje
              .style("stroke-width", `${proportion*1}px`);  // Ajusta este valor según el grosor deseado
        })
        .attr("clip-path", "url(#clipY)")
        .append('text')  // Añade un elemento text
        .attr('x', - (height - mt - mb) / 2 - mt)  // Posición en x (ajústalo según lo necesites)
        .attr('y', -ml + proportion*8)  // Posición en y (ajústalo según lo necesites)
        .attr('fill', 'black')  // Color
        .attr('text-anchor', 'middle')  // Alineación del texto
        .attr("transform", "rotate(-90)")  // Rota el título 90 grados
        .attr('font-size', `${proportion * 10}px`)
        .text(ejeYConfig.titulo);


      // Añadir ejes al gráfico
      g.append('g')
        .call(xAxis)
        .call(yAxis)
      //#endregion

      //añadir linea derecha
      g.append("line")      // agregar un elemento line al SVG
        .attr("x1", width-mr)    // x1 y x2 son iguales para una línea vertical
        .attr("y1", mt)      // y1 es el punto de inicio de la línea (parte superior)
        .attr("x2", width-mr)    // x2 es igual a x1 para una línea vertical
        .attr("y2", height-mb)    // y2 es el punto final de la línea (parte inferior)
        .attr("stroke", "black")  // color de la línea
        .attr("stroke-width", `${proportion}px`); // grosor de la línea

      //añadir linea arriba
      g.append("line")      // agregar un elemento line al SVG
      .attr("x1", ml)    // x1 y x2 son iguales para una línea vertical
      .attr("y1", mt)      // y1 es el punto de inicio de la línea (parte superior)
      .attr("x2", width-mr)    // x2 es igual a x1 para una línea vertical
      .attr("y2", mt)    // y2 es el punto final de la línea (parte inferior)
      .attr("stroke", "black")  // color de la línea
      .attr("stroke-width", `${proportion*1}px`); // grosor de la línea

 
      if (graphicAttributes.extraPoligons) {
        drawReferenceBox(g)
      }
      
      if(graphicAttributes.horizontalLines)
      {
        drawHorizontalLines(g,lineasHorizontales[graphicAttributes.well], ml, width, mr,y,proportion);
      }
      
      if (graphicAttributes.additionalPoints) {
        drawPlusSigns(g,puntos,x,y,proportion)
      }

      if (graphicAttributes.additionalRanges) {
        drawRanges(g,rangos,x,y,proportion)
      }


      
      // Dibujar líneas y area 
      let line = d3.line()
        .x(d => x(d.C))
        .y(d => y(d.m));

      let area = d3.area()
        .x(d => x(d.C))
        .y0(d => y(d.m))
        .y1(d => y(d.m));  // Esto se ajustará según el conjunto de datos del siguiente item.


        if(graphicAttributes.extraPoligons) // CAMBIO - Todo este IF cambió porque ahora hay varios polígonos
        {
          //drawLine(g,poligono1,"black","line100",line);
          const RayaBaseData = data[data.length-1].datos;
          let [interpolatedData1, interpolatedData2] = interpolateData(poligonos[poligonos.length-1], RayaBaseData);
          paintAreaBetweenLines(g, interpolatedData1, interpolatedData2, coloresPoligonos[coloresPoligonos.length-1], 'FirstPaintedArea', area);

          for(let i=0;i<poligonos.length-1;i++)
          {
              [interpolatedData1, interpolatedData2] = interpolateData(poligonos[i], poligonos[i+1]);
              paintAreaBetweenLines(g, interpolatedData1, interpolatedData2, coloresPoligonos[poligonos.length-i-1], 'PaintedArea'+i, area);
          }
          
          [interpolatedData1, interpolatedData2] = interpolateData(lineaY0, poligonos[0]);
          paintAreaBetweenLines(g, interpolatedData1, interpolatedData2, coloresPoligonos[0], 'LastPaintedArea3', area);
          
        }

      data.forEach((item, index) => {
        const lineName = 'line' + (index + 1);
       drawLine(g, item.datos, item.lineColor, lineName, line);

        if (index < data.length - 1) {
          const nextData = data[index + 1].datos;

          const [interpolatedData1, interpolatedData2] = interpolateData(item.datos, nextData);
          if(graphicAttributes.colorMap)
          drawAreaBetweenLines(g, interpolatedData1, interpolatedData2, `gradientFor${item.nombre.replace(/\s+/g, '')}`, 'gradientArea' + (index + 1), area);//CAMBIO - Para poder ver las capas con nombres que tienen espacios
          if(graphicAttributes.fillPatterns)
            texturizeAreaBetweenLines(g, interpolatedData1, interpolatedData2, findPattern(item.nombre), 'textureArea' + (index + 1), area);
        }
      });

      if(graphicAttributes.extraPoligons)// CAMBIO - Este IF cambió, porque ahora hay varios polígonos
       {
        poligonos.forEach((poligono,indice)=>{
         drawLine(g,poligono,"black","elPoligono"+indice,line,true);
         //drawLine(g,poligonos[1],"black","elPoligono2",line,true);
        });
      }

      if(graphicAttributes.sideReference)
        createHorizontalRectangle(g, lineasHorizontales[graphicAttributes.well], nombresDeCapas[graphicAttributes.well], coloresDeCapas[graphicAttributes.well], texturasDeCapas[graphicAttributes.well], width, mr, mt, height, mb, y, proportion);//CAMBIO - Varias cosas ahora dependen del # de pozo

      if(graphicAttributes.upperReference)
      {
        let rectGroup1 = createVerticalRectangle(g, lineasVerticales1, nombresDeEras, coloresDeEras, mt *.2,mt, proportion);
        let rectGroup2 = createVerticalRectangle(g, lineasVerticales2, nombresDeEpocas, coloresDeEpocas, mt *.6,mt, proportion);
      }
      // drawCircle(g, dataR, 'circleClass', d => x(d.C), d => y(d.m), 'black');
      // drawCircle(g, dataC, 'circleClass2', d => x(d.C), d => y(d.m), 'blue');
      // drawCircle(g, dataS, 'circleClass3', d => x(d.C), d => y(d.m), 'red');

    }
  }

  function drawLine(g, data, color, className, line,dashed) {
    g.selectAll(`path.${className}`)  // Utiliza className para identificar este 'path'
      .data([data])  // Usa .data() en lugar de .datum() y pasa [data] como un array de un elemento
      .join('path')
      .attr('class', className)  // Añade una clase para identificar este 'path'
      .attr('fill', 'none')
      .attr('stroke', color) // Condición para el color
      .attr('stroke-dasharray', dashed ? '3 3' : 'none') // Condición para el patrón punteado
      .attr('stroke-width', `${proportion*1}px`)
      .attr('d', line)
      .attr("clip-path", "url(#clip)")  // Aplica el clip-path
      .on('mouseover', onMouseOverLine)
      .on('mouseout', onMouseOut)
      /*.on('mouseover', function(event,d) {
        myChart.addEventListener('mouseover', function(event) {
          const mx = event.clientX
          const my = event.clientY
        })

        onMouseOverLine.bind(this)(event, d, mx, my)

      })*/
  }


  function drawAreaBetweenLines(g, data1, data2, gradientId, className, area) {
    // Configura la función area para tener en cuenta ambos conjuntos de datos
    area.y0(d => yNew(d.m)).y1(d => yNew(data2[data1.indexOf(d)].m));

    g.selectAll(`path.${className}`)
      .data([data1])
      .join('path')
      .attr('class', className)
      //.attr('fill', d => 'url(#' + texture +')')  // Asumiendo que ya has definido la textura con un ID en el SVG
      .attr('fill', `url(#${gradientId})`)  // Usa el ID del gradiente
      .attr('d', area)
      .attr("clip-path", "url(#clip)");
  }

  function paintAreaBetweenLines(g, data1, data2, color, className, area) {
    // Configura la función area para tener en cuenta ambos conjuntos de datos
    area.y0(d => yNew(d.m)).y1(d => yNew(data2[data1.indexOf(d)].m));

    g.selectAll(`path.${className}`)
      .data([data1])
      .join('path')
      .attr('class', className)
      //.attr('fill', d => 'url(#' + texture +')')  // Asumiendo que ya has definido la textura con un ID en el SVG
      .attr('fill', color)  // Usa el ID del gradiente
      .attr('d', area)
      .attr("clip-path", "url(#clip)");
  }

  function texturizeAreaBetweenLines(g, data1, data2, texture, className, area) {
    // Configura la función area para tener en cuenta ambos conjuntos de datos
    area.y0(d => yNew(d.m)).y1(d => yNew(data2[data1.indexOf(d)].m));

    g.selectAll(`path.${className}`)
      .data([data1])
      .join('path')
      .attr('class', className)
      .attr('fill', d => 'url(#' + texture + ')')  // Asumiendo que ya has definido la textura con un ID en el SVG
      //.attr('fill', `url(#${gradientId})`)  // Usa el ID del gradiente
      .attr('opacity', 0.5)
      .attr('d', area)
      .attr("clip-path", "url(#clip)");
  }

  function drawCircle(g, data, className, xValue, yValue, color) {
    g.selectAll(`circle.${className}`)  // Utiliza className para identificar este 'circle', y cambia `path` por `circle`
      .data(data)  // Aquí cambia [data] por data, ya que estás creando un círculo por cada elemento en data
      .join('circle')
      .attr('class', className)  // Añade una clase para identificar este 'circle'
      .attr('cx', d => xValue(d))  // Usa xValue para extraer el valor de x de los datos
      .attr('cy', d => yValue(d))  // Usa yValue para extraer el valor de y de los datos
      .attr('r', 5)  // Radio del punto
      .attr('fill', color)
      .attr("clip-path", "url(#clip)")  // Aplica el clip-path
      .on('mouseover', onMouseOverCircle)
      .on('mouseout', onMouseOutCircle);
  }

  function drawPlusSigns(g,puntos,x,y,proportion) {
    // Líneas horizontales de los signos más
    g.selectAll('line.horizontal-plus')
      .data(puntos)
      .join('line')
      .attr('class', 'horizontal-plus')
      .attr('x1', d => x(d.C) - width/150)  // Ajusta el valor "5" para cambiar el tamaño del signo más
      .attr('x2', d => x(d.C) + width/150)  // Ajusta el valor "5" para cambiar el tamaño del signo más
      .attr('y1', d => y(d.m))
      .attr('y2', d => y(d.m))
      .attr('stroke', 'black')  // color de la línea
      .attr('stroke-width', `${proportion*2}px`) // grosor de la línea
      .attr("clip-path", "url(#clip)")      

  
    // Líneas verticales de los signos más
    g.selectAll('line.vertical-plus')
      .data(puntos)
      .join('line')
      .attr('class', 'vertical-plus')
      .attr('x1', d => x(d.C))
      .attr('x2', d => x(d.C))
      .attr('y1', d => y(d.m) - width/150)  // Ajusta el valor "5" para cambiar el tamaño del signo más
      .attr('y2', d => y(d.m) + width/150)  // Ajusta el valor "5" para cambiar el tamaño del signo más
      .attr('stroke', 'black')  // color de la línea
      .attr('stroke-width', `${proportion*2}px`)  // grosor de la línea
      .attr("clip-path", "url(#clip)")

      g.selectAll('line.horizontal-plus, line.vertical-plus')
        .on('mouseover', onMouseOverPlus)
        .on('mouseout', () => d3.select("#tooltip").style("visibility", "hidden"));
  }

    function drawRanges(g,randos,x,y,proportion) {
      // Línea horizontal
      g.selectAll('line.horizontal-plus')
        .data(rangos)
        .join('line')
        .attr('class', 'horizontal-plus')
        .attr('x1', d => x(d.C1) - width/150)  // Ajusta el valor "5" para cambiar el tamaño del signo más
        .attr('x2', d => x(d.C2) + width/150)  // Ajusta el valor "5" para cambiar el tamaño del signo más
        .attr('y1', d => y(d.m))
        .attr('y2', d => y(d.m))
        .attr('stroke', 'black')  // color de la línea
        .attr('stroke-width', `${proportion*2}px`) // grosor de la línea
        .attr("clip-path", "url(#clip)")      

    
      // Líneas verticales del primer y segundo valor
      g.selectAll('line.vertical-r1')
        .data(rangos)
        .join('line')
        .attr('class', 'vertical-r1')
        .attr('x1', d => x(d.C1))
        .attr('x2', d => x(d.C1))
        .attr('y1', d => y(d.m) - width/150)  // Ajusta el valor "5" para cambiar el tamaño del signo más
        .attr('y2', d => y(d.m) + width/150)  // Ajusta el valor "5" para cambiar el tamaño del signo más
        .attr('stroke', 'black')  // color de la línea
        .attr('stroke-width', `${proportion*2}px`)  // grosor de la línea
        .attr("clip-path", "url(#clip)")

        g.selectAll('line.vertical-r2')
        .data(rangos)
        .join('line')
        .attr('class', 'vertical-r2')
        .attr('x1', d => x(d.C2))
        .attr('x2', d => x(d.C2))
        .attr('y1', d => y(d.m) - width/150)  // Ajusta el valor "5" para cambiar el tamaño del signo más
        .attr('y2', d => y(d.m) + width/150)  // Ajusta el valor "5" para cambiar el tamaño del signo más
        .attr('stroke', 'black')  // color de la línea
        .attr('stroke-width', `${proportion*2}px`)  // grosor de la línea
        .attr("clip-path", "url(#clip)")

        g.selectAll('line.vertical-r1, line.vertical-r2,line.horizontal-plus')
          .on('mouseover', onMouseOverRange)
          .on('mouseout', () => d3.select("#tooltip").style("visibility", "hidden"));
    }

  function drawReferenceBox(g)
  {
    const rectContainer = g
          .append('g')
          //.attr('transform', `translate(${-(width-ml-mr)/4}, ${height/2})`); // Ajusta la posición vertical según sea necesario
      
        // Crea un grupo para el rectángulo contenedor
        const containerWidth = (width-ml-mr)/3; // Ancho del rectángulo contenedor
        const containerHeight =(height-mt-mb)/3; // Altura del rectángulo contenedor
        const containerX=ml+width/50;
        const containerY=height-containerHeight-mb-height/50;
        rectContainer
          .append('rect')
          .attr('x', containerX )
          .attr('y', containerY )
          .attr('width', containerWidth)
          .attr('height', containerHeight)
          .attr('fill', 'white')
          .attr('stroke', 'black')
          .attr('stroke-width', `${proportion*0.5}px`);
      
        // Crea cinco rectángulos dentro del contenedor
        const rectWidth = containerWidth/7; // Ancho de cada rectángulo
        const rectHeight = containerHeight/8; // Altura de cada rectángulo
        const rectSpacing = containerHeight/30; // Espacio entre cada rectángulo
      
        const refColor = ["#00FF00","#FFFF00","#F0AA23","#FF5F30","#919191"];
        //const Text = ["Inmaduro","Aceite y Gas","Gas húmedo","Gas seco","Sobremaduro"];
        const Text = ["Inmaduro [0 - 0.55]","Aceite y Gas [0.55 - 0.8]","Gas húmedo [0.8 - 1]","Gas seco [1 - 2.5]","Sobremaduro [>2.5]"]

        rectContainer
        .append('text')
        .attr('x', containerX+width/50) // Ajusta la posición x del texto
        .attr('y', containerY + width/70) // Ajusta la posición y para centrar el texto verticalmente
        .attr('fill', 'black') // Color del texto
        .attr('font-size', `${proportion * 10}px`)
        .attr('font-family', 'Arial Black')
        .attr('text-anchor', 'start') // Alineación del texto a la izquierda
        .attr('dominant-baseline', 'middle') // Alineación vertical del texto
        .text("Reflectancia Vitrinita"); // Cambia el texto según sea necesario

        for (let i = 0; i < 5; i++) {
          rectContainer
            .append('rect')
            .attr('x', containerX+width/50) // Ajusta la posición x del primer rectángulo
            .attr('y', containerY + height/40 + i * (rectHeight + rectSpacing) + 10) // Ajusta la posición y para apilar los rectángulos
            .attr('width', rectWidth)
            .attr('height', rectHeight)
            .attr('fill', refColor[i]); // Cambia el color del rectángulo según tus preferencias
      
          // Añade un texto a la derecha de cada rectángulo
          rectContainer
            .append('text')
            .attr('x', containerX+rectWidth+width/25) // Ajusta la posición x del texto
            .attr('y', containerY + height/40 + i * (rectHeight + rectSpacing) + 10 + rectHeight / 2) // Ajusta la posición y para centrar el texto verticalmente
            .attr('fill', 'black') // Color del texto
            .attr('font-size', `${proportion * 10}px`)
            .attr('font-family', 'Arial')
            .attr('text-anchor', 'start') // Alineación del texto a la izquierda
            .attr('dominant-baseline', 'middle') // Alineación vertical del texto
            .text(Text[i]); // Cambia el texto según sea necesario
        }

  }
  

  // Definición de las funciones de mouseover y mouseout
  function onMouseOverLine(event, d ) {

    let [mx, my] = d3.mouse(this);  // Usa d3.mouse en lugar de d3.pointer

    //mx = mx + myChart.offsetLeft
    //my = my + myChart.offsetTop

    let xValue = xNew.invert(mx);
    let yValue = yNew.invert(my);

    d3.select("#tooltip")
      .style("left", (mx + myChart1.offsetLeft - width/10) + "px")
      .style("top", (my + myChart1.offsetTop - height/30) + "px")
      .style("visibility", "visible")
      .style('background-color', 'white')
      .style('font-size', `${proportion*12}px`)
      .style('font-family', 'Arial')
      .text("(" + xValue.toFixed(2) + " , " + yValue.toFixed(2)+")");
      
  }

  function onMouseOverPlus(event, d) {
    let [mx, my] = d3.mouse(this);  // Usa d3.pointer en lugar de d3.mouse si estás usando D3 v6 o superior
  
    d3.select("#tooltip")
      .style("left", (mx + myChart1.offsetLeft - width/10) + "px")
      .style("top", (my + myChart1.offsetTop - height/30) + "px")
      .style("visibility", "visible")
      .style('background-color', 'white')
      .style('font-size', `${proportion*12}px`)
      .style('font-family', 'Arial')
      .text("(" +  event.C.toFixed(2) + " , " + event.m.toFixed(2)+")");
  }

  function onMouseOverRange(event, d) {
    let [mx, my] = d3.mouse(this);  // Usa d3.pointer en lugar de d3.mouse si estás usando D3 v6 o superior
  
    d3.select("#tooltip")
      .style("left", (mx - width/10) + "px")
      .style("top", (my - height/30) + "px")
      .style("visibility", "visible")
      .style('background-color', 'white')
      .style('font-size', `${proportion*12}px`)
      .style('font-family', 'Arial')
      .text("(" +  event.C1.toFixed(2) + " - " + event.C2.toFixed(2) + ", " + event.m.toFixed(2)+")");
  }

  function onMouseOut(event, d) {
    d3.select("#tooltip").style("visibility", "hidden");  // Oculta el tooltip
  }

  function onMouseOverCircle(event, d) {
    d3.select(this)  // Selecciona el círculo actual
      //.attr('fill', 'red')  // Cambia el color a rojo
      .attr('r', '10');



    let [mx, my] = d3.mouse(this);  // Obtén las coordenadas del mouse
    let xValue = x.invert(mx);  // Invierte la escala x para obtener el valor de x
    let yValue = y.invert(my);  // Invierte la escala y para obtener el valor de y

    d3.select("#tooltip")
      .style("left", (mx - width/10) + "px")
      .style("top", (my - height/30) + "px")
      .style("visibility", "visible")
      .text("(T[Ma]:) " + event.C.toFixed(2) + " , " + event.m.toFixed(2))+")";  // Utiliza los valores de los datos en lugar de las coordenadas del mouse
  }

  function onMouseOutCircle(event, d) {
    d3.select(this)  // Selecciona el círculo actual
      //.attr('fill', 'blue')  // Cambia el color de vuelta a azul
      .attr('r', '5');

    d3.select("#tooltip").style("visibility", "hidden");  // Oculta el tooltip
  }

  if (graphicAttributes.colorMap)
  {
    drawColorScale(svg,ml, mr, mb, height, width, colorPalette,alphaName,proportion);
  }
    return svg.node()
}



function interpolateData(data1, data2) {
  // Obtener todos los valores x únicos de ambos conjuntos de datos
  let allXValues = [...new Set([...data1.map(d => d.C), ...data2.map(d => d.C)])].sort((a, b) => a - b);

  let interpolatedData1 = [];
  let interpolatedData2 = [];

  allXValues.forEach(xValue => {
    let data1Point = data1.find(d => d.C === xValue);
    let data2Point = data2.find(d => d.C === xValue);

    if (!data1Point) {
      data1Point = {
        C: xValue,
        m: interpolateYValue(data1, xValue)
      };
    }

    if (!data2Point) {
      data2Point = {
        C: xValue,
        m: interpolateYValue(data2, xValue)
      };
    }

    interpolatedData1.push(data1Point);
    interpolatedData2.push(data2Point);
  });

  return [interpolatedData1, interpolatedData2];
}

function interpolateYValue(data, xValue) {
  // Encuentra los dos puntos más cercanos a xValue
  let leftPoint = null;
  let rightPoint = null;
  for (let i = 0; i < data.length - 1; i++) {
    if (data[i].C >= xValue && data[i + 1].C <= xValue) {
      leftPoint = data[i];
      rightPoint = data[i + 1];
      break;
    }
  }
  if (!leftPoint || !rightPoint) {
    return null;
  }
  // Interpolación lineal
  let slope = (rightPoint.m - leftPoint.m) / (rightPoint.C - leftPoint.C);
  return leftPoint.m + slope * (xValue - leftPoint.C);
}


function findPattern(capa) {
  // Encuentra el índice de la capa en la lista de nombres de capas
  let index = nombresDeCapas[graphicAttributes.well].indexOf(capa);//CAMBIO - nombres de capas depende del #de pozo

  // Si la capa se encuentra en la lista, devuelve la textura correspondiente
  if (index !== -1) {
    return texturasDeCapas[graphicAttributes.well][index];//CAMBIO - texturas de capas depende del # de pozo
  }

  // Si la capa no se encuentra en la lista, devuelve una textura predeterminada o null
  return null;
}


function createGradientForLayer(data, gradientId) {
  // Suponemos que data es un array de objetos con propiedades C, m y alpha

  // Ordenamos los datos por la propiedad C para asegurarnos de que el gradiente vaya de izquierda a derecha
  data.sort((a, b) => -a.C + b.C);

  // Calculamos los stops del gradiente
  const stops = data.map((d, index, array) => {
    // Encuentra el color correspondiente al valor alpha usando colorPalette
    const color = findColorForValue(d.alpha);

    // Calcula el offset como la posición relativa de d.C en el rango total
    const offset = (d.C - array[0].C) / (array[array.length - 1].C - array[0].C) * 100;

    return `<stop offset="${offset}%" style="stop-color:${color};stop-opacity:1" />`;
  }).join('');

  // Crea el elemento SVG del gradiente
  const gradient = `
      <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="0%">
          ${stops}
      </linearGradient>
  `;

  return gradient;
}


function createDiscreteGradientForLayer(data, gradientId) {
  // Asegurando que los datos estén ordenados correctamente
  data.sort((a, b) =>  - a.C + b.C);

  // Calculamos el rango total de valores C para normalizar los offsets
  const totalRange = data[0].C - data[data.length - 1].C;

  const stopsData = [];
  data.forEach((d, index, array) => {
      if (index < array.length - 1) {
          const nextD = array[index + 1];
          const startIdx = colorPalette.findIndex(entry => entry.min <= d.alpha && entry.max >= d.alpha);
          const endIdx = colorPalette.findIndex(entry => entry.min <= nextD.alpha && entry.max >= nextD.alpha);
          const segmentLength = (d.C - nextD.C) / totalRange;
          const steps = endIdx - startIdx;
          const step = segmentLength / (steps + 1);

          for (let i = 0; i <= steps; i++) {
              const paletteIdx = startIdx + i;
              const color = colorPalette[paletteIdx].color;
              const offsetStart = ((array[0].C-d.C) / totalRange + step * i) * 100;
              const offsetEnd = ((array[0].C-d.C) / totalRange + step * (i + 1)) * 100;
              stopsData.push(
                  { offset: `${Math.abs(100-offsetStart)}%`, color: `rgb(${color.join(',')})` },
                  { offset: `${Math.abs(100-offsetEnd)}%`, color: `rgb(${color.join(',')})` }  // Dos stops con el mismo color y offset para un color sólido
              );
          }
      }
  });

  stopsData.reverse();
  // Crea el elemento SVG del gradiente
  const gradient = `
      <defs>
          <linearGradient id="${gradientId}" x1="100%" y1="0%" x2="0%" y2="0%">
              ${stopsData.map(d => `<stop offset="${d.offset}" stop-color="${d.color}" />`).join('')}
          </linearGradient>
      </defs>
  `;

  return gradient;
}

function findColorForValue(value) {
  // Esta función encuentra el color correspondiente a un valor usando colorPalette
  const colorEntry = colorPalette.find(entry => value >= entry.min && value < entry.max);
  if (colorEntry) {
    const [r, g, b] = colorEntry.color;
    return `rgb(${r},${g},${b})`;
  }
  return 'rgb(255,0,0)';  // Color por defecto si no se encuentra una coincidencia
}

function define(runtime, observer) {
  const main = runtime.module();
  //main.variable(observer()).define(["md"], _1);
  main.variable(observer("d3")).define("d3", ["require"], _d3);
  main.variable(observer()).define(["d3", "DOM"], _4);
  return main;
}

    
    /////////////////////////////////////////////////////////////////////////////

    //const xPosition = event.clientX
    
    //const positionX =  myChart.getBoundingClientRect().x 

    
    //divStepComments.style.top = stepComment.getBoundingClientRect().y + window.pageYOffset + 'px'
    

    //console.log(positionX)

    const main = runtime.module(define, Inspector.into(myChart1))
})

/*let previousWidth = document.documentElement.clientWidth;


const resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
        const { width } = entry.contentRect;

        // Verificar si el tamaño ha cambiado significativamente
        if (Math.abs(width - previousWidth) > 20) {

            console.log('Ancho:', width);
            
            // Realizar acciones adicionales según sea necesario
            location.reload();
        }

        // Actualizar los tamaños anteriores
        previousWidth = width;
    }
});

resizeObserver.observe(document.documentElement);*/




/*window.addEventListener('resize',async()=>{

  console.log(window.innerWidth)
  console.log('recarga')
  setTimeout(() => {
    location.reload();
}, 1500);

})*/