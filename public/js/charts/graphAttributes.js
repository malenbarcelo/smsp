//import{} from lineasVerticales1.js

export function createHorizontalRectangle(g, lineasHorizontales, nombresDeCapas, coloresDeCapas, texturasDeCapas, width, mr, mt, height, mb, y, proportion) {
  let rectGroup = g.append('g');

  //  let rectX = width - mr + mr/10;
  //  let rectY = mt;
  //  let rectWidth = mr/6;
  //  let rectHeight = height - mt - mb;

  let rectWidth = width*0.05;
  let rectX = width*0.88;// - (rectWidth+width*0.05);
  let rectY = mt;
  let rectHeight = height - mt - mb;

  rectGroup.append('rect')
    .attr('x', rectX)
    .attr('y', rectY)
    .attr('width', rectWidth)
    .attr('height', rectHeight);

  // Añadir leyendas a la derecha de cada subdivisión
  rectGroup.selectAll('text.rect-text')
    .data(nombresDeCapas)
    .join('text')
    .attr('class', 'rect-text')
    .attr('x', rectX + rectWidth + mr/30)  // Posición x: a la derecha del rectángulo
    .attr('y', (d, i) => {
      // Para la primera capa, usar 0 como el valor anterior
      let valorAnterior = i === 0 ? 0 : lineasHorizontales[i - 1];
      // Calcular la posición media entre el valor anterior y el valor actual
      let media = (valorAnterior + lineasHorizontales[i]) / 2;
      if (isNaN(y(media))) {
        return 0; // o cualquier otro valor predeterminado que desees
      }
      return y(media);  // Ajuste vertical si es necesario
    })
    .text(d => d)
    .attr('font-size', `${12}px`)
    .attr('font-family', 'Arial')
    .attr('alignment-baseline', 'middle')  // Alineación vertical
    .attr("clip-path", "url(#clipY)");

  // Rectángulos de color
  rectGroup.selectAll('rect.subdivision-color')
    .data(lineasHorizontales)
    .join('rect')
    .attr('class', 'subdivision-color')
    .attr('x', rectX)
    .attr('width', rectWidth)
    .attr('y', (d, i) => {
      let valorAnterior = i === 0 ? 0 : lineasHorizontales[i - 1];
      return y(valorAnterior);
    })
    .attr('height', (d, i) => {
      let valorAnterior = i === 0 ? 0 : lineasHorizontales[i - 1];
      return y(d) - y(valorAnterior);
    })
    .attr('fill', (d, i) => coloresDeCapas[i])
    .attr("clip-path", "url(#clipY)");

  // Rectángulos de patrón
  rectGroup.selectAll('rect.subdivision-pattern')
    .data(lineasHorizontales)
    .join('rect')
    .attr('class', 'subdivision-pattern')
    .attr('x', rectX)
    .attr('width', rectWidth)
    .attr('y', (d, i) => {
      let valorAnterior = i === 0 ? 0 : lineasHorizontales[i - 1];
      return y(valorAnterior);
    })
    .attr('height', (d, i) => {
      let valorAnterior = i === 0 ? 0 : lineasHorizontales[i - 1];
      return y(d) - y(valorAnterior);
    })
    .attr('fill', (d, i) => `url(#${texturasDeCapas[i]})`)
    .attr('opacity', 0.5)
    .attr("clip-path", "url(#clipY)");


  // Subdividir el rectángulo con líneas horizontales  
  rectGroup.selectAll('line.rect-line')
    .data(lineasHorizontales)
    .join('line')
    .attr('class', 'rect-line')
    .attr('x1', rectX)
    .attr('x2', rectX + rectWidth)
    .attr('y1', d => y(d))
    .attr('y2', d => y(d))
    // .attr('y1', (d,i) => y(lineasHorizontales[i]))
    // .attr('y2', (d,i) => y(lineasHorizontales[i]))
    .attr('stroke', 'black')
    .attr('stroke-width', `${proportion*1}px`)
    .attr("clip-path", "url(#clipY)");

  return rectGroup;  // esto permitirá que otras partes de tu código interactúen con rectGroup si es necesario
}

export function createVerticalRectangle(g, lineasVerticales, nombres, colors, rectY, mt, proportion) {
  let rectGroup = g.append('g');
  //let colors = ['red', 'green', 'blue', 'yellow', 'black'];

  // Coordenadas y dimensiones del rectángulo
  //let rectWidth = width - ml - mr;
  let rectHeight = mt*.4;
  
  //let rectX = ml;

  // Crear los rectángulos entre cada par de líneas verticales
  rectGroup.selectAll('rect.color-rect')
    .data((lineasVerticales).slice(0, -1))
    .join('rect')
    .attr('class', 'color-rect')
    .attr('x', (d, i) => xNew(lineasVerticales[i + 1]))
    .attr('y', rectY)
    .attr('width', (d, i) => -xNew(lineasVerticales[i + 1]) + xNew(d))
    .attr('height', rectHeight)
    .attr('fill', (d, i) => colors[i % colors.length])
    .attr("clip-path", "url(#clipX2)");

  // Subdividir el rectángulo con líneas verticales
  rectGroup.selectAll('line.rect-line')
    .data(lineasVerticales)
    .join('line')
    .attr('class', 'rect-line')
    .attr('y1', rectY)
    .attr('y2', rectY + rectHeight)
    .attr('x1', d => xNew(d))
    .attr('x2', d => xNew(d))
    .attr('stroke', 'black')
    .attr('stroke-width', `${proportion*1}px`)
    .attr("clip-path", "url(#clipX2)");

  // Añadir leyendas dentro de cada subdivisión
  rectGroup.selectAll('text.rect-text')
    .data(nombres)
    .join('text')
    .attr('class', 'rect-text')
    .attr('y', rectY + rectHeight / 2)
    .attr('x', (d, i) => {
      let valorAnterior = i === 0 ? 0 : lineasVerticales[i];
      let media = (valorAnterior + lineasVerticales[i + 1]) / 2;
      return xNew(media);
    })
    .text((d, i) => {
      let ancho = Math.abs(xNew(lineasVerticales[i]) - xNew(lineasVerticales[i + 1]));
      return ancho < 50 ? "" : d;
    })
    .attr('font-size', `${proportion * 12}px`)
    .attr('font-family', 'Arial')
    .attr('text-anchor', 'middle')
    .attr('alignment-baseline', 'middle')
    .attr("clip-path", "url(#clipX2)");

  return rectGroup;  // Retorna el grupo creado para cualquier manipulación futura
}

export function drawHorizontalLines(g, lineasHorizontales, ml, width, mr, y, proportion) {
  g.selectAll('line.horizontal-line')
    .data(lineasHorizontales)
    .join('line')
    .attr('class', 'horizontal-line')
    .attr('x1', ml)
    .attr('x2', width - mr)
    .attr('y1', d => y(d))
    .attr('y2', d => y(d))
    .attr('stroke', 'black')  // color de la línea
    .attr('stroke-width', `${proportion*1}px`)  // grosor de la línea
    .attr("clip-path", "url(#clip)");
}



export function drawColorScale(svg,ml, mr,mb, height, width, colorPalette, alphaName, proportion) {
  let scaleX = 0 + ml;  // Variable para llevar la cuenta de la posición x del rectángulo actual
  const scaleY = height - height*0.15;

   // Calcula el rango completo de la escala
   const fullScaleRange = colorPalette[colorPalette.length - 1].max;

  colorPalette.forEach(d => {
    
    // Calcular el ancho del rectángulo basado en min y max
    const scaleWidth = (d.max - d.min)/fullScaleRange * (width - mr - ml);


    // Crear el rectángulo
    svg.append('rect')
      .attr('x', scaleX)
      .attr('y', scaleY)
      .attr('width', scaleWidth)
      .attr('height', height/40)
      .attr('fill', `rgb(${d.color})`);

    // Actualizar la posición x para el siguiente rectángulo
    scaleX += scaleWidth;
  });

  const xAxisScale = d3.scaleLinear()
    .domain([0, fullScaleRange])
    .range([0, width - mr - ml]);

  const tickValues = colorPalette.map(d => d.min).concat(colorPalette[colorPalette.length - 1].max);

  const xAxis = d3.axisBottom(xAxisScale)
    .tickValues(tickValues)
    .tickFormat(d3.format(".2f"));

// Dibuja el eje en un elemento SVG y guarda una referencia al grupo
const xAxisGroup = svg.append('g')
  .attr('transform', `translate(${ml},${scaleY + height / 40})`)
  .call(xAxis);

// Cambia el tamaño de la fuente de los ticks del eje X
xAxisGroup.selectAll('text')
  .style('font-size', `${proportion * 12}px`);
  
// Modifica el grosor de los ticks
xAxisGroup.selectAll('.tick line')
    .style('stroke-width', `${proportion * 1}px`)
    .attr('y2', proportion * 5);

// Modifica el grosor de la línea principal del eje
xAxisGroup.select('.domain')
    .style('stroke-width', `${proportion * 1}px`);


  // Añadir etiqueta al eje X
  svg.append("text")
    .attr("class", "label")  // Opcional: para estilizar con CSS
    .attr("x", (width - mr + ml) / 2)  // Posición en el eje X (ajustar según necesidad)
    .attr("y", height*0.95)  // Posición en el eje Y (ajustar según necesidad)
    .style("text-anchor", "middle")  // Centrar texto horizontalmente
    .text(alphaName)
    .attr('font-size', `${proportion * 15}px`)
    .attr('font-family', 'Arial');
}