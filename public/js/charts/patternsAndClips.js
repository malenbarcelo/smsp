export function definePatterns(svg) {
      
      // Define el patrón
      let defs = svg.append("defs");
      
      let pattern = defs.append("pattern")
          .attr("id", "diagonalHatch")
          .attr("patternUnits", "userSpaceOnUse")
          .attr("width", 8)
          .attr("height", 8);
      
      pattern.append("path")
          .attr("d", "M-1,1 l2,-2 M0,8 l8,-8 M7,9 l1,-1")
          .attr("stroke", "#000000")
          .attr("stroke-width", 1);
      
      // Patrón con círculos
      let circlePattern = defs.append("pattern")
      .attr("id", "circlePattern")
      .attr("patternUnits", "userSpaceOnUse")
      .attr("width", 10)
      .attr("height", 10);
      
      circlePattern.append("circle")
      .attr("cx", 5)
      .attr("cy", 5)
      .attr("r", 3)
      .attr("fill", "#000000");
      
      // Patrón con signos +
      let plusPattern = defs.append("pattern")
      .attr("id", "plusPattern")
      .attr("patternUnits", "userSpaceOnUse")
      .attr("width", 10)
      .attr("height", 10);
      
      plusPattern.append("path")
      .attr("d", "M5,1 v8 M1,5 h8")
      .attr("stroke", "#000000")
      .attr("stroke-width", 1);
      
      let sandstoneTypical = defs.append("pattern")
          .attr("id", "sandstoneTypical")
          .attr("patternUnits", "userSpaceOnUse")
          .attr("width", 18)   // Establece el ancho según lo que desees
          .attr("height", 36); // Establece el alto según lo que desees
      
      // Añadir puntos al patrón
      // Primero, definimos el sub-patrón para el punto.
      let dotPattern = defs.append("pattern")
          .attr("id", "dotPattern")
          .attr("patternUnits", "userSpaceOnUse")
          .attr("width", 3)   // Define el espaciado que deseas entre puntos
          .attr("height", 3);
      
      dotPattern.append("circle")
          .attr("cx", 1)
          .attr("cy", 1)
          .attr("r", 0.5)
          .attr("fill", "black");
      
      // Luego, usamos el sub-patrón dentro del patrón principal.
      sandstoneTypical.append("rect")
          .attr("width", 36)
          .attr("height", 36)
          .attr("fill", "url(#dotPattern)");
      
      // Añadir formas de 'T' al patrón
      sandstoneTypical.append("path")
      .attr("d", "M0,0 h4 M2,0 v4")
      .attr("stroke", "#000000")
      .attr("stroke-width", 1);
      
      // Añadir formas de 'T' al patrón
      sandstoneTypical.append("path")
      .attr("d", "M8,19 h4 M10,19 v4")
      .attr("stroke", "black")
      .attr("stroke-width", 1);

      let shale = defs.append("pattern")
      .attr("id", "shale")
      .attr("patternUnits", "userSpaceOnUse")
      .attr("width", 20)   // Establece el ancho según lo que desees
      .attr("height", 12); // Establece el alto según lo que desees
  
        // Añadir formas al patrón
        shale.append("path")
        .attr("d", "M4,0.5 h12 M0,7 h6 M14,7 h6")
        .attr("stroke", "black")
        .attr("stroke-width", 1);
      
      let shaleSlit = defs.append("pattern")
      .attr("id", "shaleSlit")
      .attr("patternUnits", "userSpaceOnUse")
      .attr("width", 20)   // Establece el ancho según lo que desees
      .attr("height", 12); // Establece el alto según lo que desees
  
        // Añadir formas al patrón
        shaleSlit.append("path")
        .attr("d", "M4,0.5 h12 M0,7 h6 M14,7 h6 M7,9 L10,4 M10,9 L13.5,4")
        .attr("stroke", "black")
        .attr("stroke-width", 1);

        let limestone = defs.append("pattern")
        .attr("id", "limestone")
        .attr("patternUnits", "userSpaceOnUse")
        .attr("width", 12)   // Establece el ancho según lo que desees
        .attr("height", 12); // Establece el alto según lo que desees
    
          // Añadir formas al patrón
          limestone.append("path")
//          .attr("d", "M2,0 v3 M0,2 h6 M2,5 v5 M0,6 h6 M2,6 v2")
            .attr("d", "M0,0.5 h12 M0,6.5 h12 M0.5,0 v7 M6.5,6 v8")
          .attr("stroke", "black")
          .attr("stroke-width", 1);

          let limestoneChalk = defs.append("pattern")
          .attr("id", "limestoneChalk")
          .attr("patternUnits", "userSpaceOnUse")
          .attr("width", 10)   // Establece el ancho según lo que desees
          .attr("height", 10); // Establece el alto según lo que desees
      
                     
           limestoneChalk.append("path")
            .attr("d", "M0,0 A5,5 0 0,0 10,0  M5,5 A5,5 0 0,0 10,10 M0,10 A5,5 0 0,0 5,5 ") // Medio círculo inferior
            .attr("stroke", "black")
            .attr("stroke-width", 1)
            .attr("fill", "none");

            let siltAndSand = defs.append("pattern")
            .attr("id", "siltAndSand")
            .attr("patternUnits", "userSpaceOnUse")
            .attr("width", 10)   // Establece el ancho según lo que desees
            .attr("height", 10); // Establece el alto según lo que desees
        
                       
             siltAndSand.append("path")
              .attr("d", "M0,10 L3,7 M5,5 L8,2 M2,4 v1 M7,9 v1") // Medio círculo inferior
              .attr("stroke", "black")
              .attr("stroke-width", 1)
              .attr("fill", "none");
      
      let patternNo4 = defs.append("pattern")
          .attr("id", "patternNo4")
          .attr("patternUnits", "userSpaceOnUse")
          .attr("width", 36)   // Establece el ancho según lo que desees
          .attr("height", 26); // Establece el alto según lo que desees
      
      // Añadir formas al patrón
      patternNo4.append("path")
      .attr("d", "M0,0 h6 M12,0 h6 M24,0 h6 M3,9 h6 M15,9 h6 M26,9 h6 M18,9 v6 M6,18 h6 M18,18 h6 M31,18 h6 M33,18 v6")
      .attr("stroke", "black")
      .attr("stroke-width", 1);
      
      let sandstoneShaly = defs.append("pattern")
          .attr("id", "sandstoneShaly")
          .attr("patternUnits", "userSpaceOnUse")
          .attr("width", 12)   // Establece el ancho según lo que desees
          .attr("height", 12); // Establece el alto según lo que desees
      
      // Añadir formas al patrón
      sandstoneShaly.append("path")
      .attr("d", "M0,0 h7 M9,6 h5")
      .attr("stroke", "black")
      .attr("stroke-width", 1);
      
      // Luego, usamos el sub-patrón dentro del patrón principal.
      sandstoneShaly.append("rect")
          .attr("width", 36)
          .attr("height", 36)
          .attr("fill", "url(#dotPattern)");
      
        // Definir las escalas inicialmente basadas en los datos completos
      
        // Definir un patrón para el rombo
      let patternNo3 = defs.append("pattern")
      .attr("id", "patternNo3")
      .attr("patternUnits", "userSpaceOnUse")
      .attr("width", 15)  // Define el ancho del espacio que ocupará cada rombo (incluyendo el espaciado)
      .attr("height", 15); // Define el alto
      
      // Añadir el rombo al patrón
      patternNo3.append("rect")
      .attr("x", 1)  // Posición inicial del cuadrado
      .attr("y", 1)
      .attr("width", 5)
      .attr("height", 5)
      .attr("fill", "none")  // Sin relleno
      .attr("stroke", "black")  // Color del contorno
      .attr("stroke-width", 1)  // Grosor del contorno
      .attr("transform", "rotate(45,3.5,3.5)");  // Rotar el cuadrado 45 grados alrededor de su centro
      
      patternNo3.append("rect")
          .attr("width", 36)
          .attr("height", 36)
          .attr("fill", "url(#dotPattern)");
      
      
      let patternNo5 = defs.append("pattern")
        .attr("id", "patternNo5")
        .attr("patternUnits", "userSpaceOnUse")
        .attr("width", 26)   // Establece el ancho según lo que desees
        .attr("height", 30); // Establece el alto según lo que desees
      
      // Añadir formas al patrón
      patternNo5.append("path")
      .attr("d", "M0,0 h10 M0,13 h10 M8,6 h6 M12,2 h6 M12,10 h6 M17,6 h6 M0,21 h6 M4,17 h6 M4,25 h6 M9,21 h6 M14,15 h10 M14,28 h10 M4,1 v12 M5,1 v12 M18,16 v12 M19,16 v12 ")
      .attr("stroke", "black")
      .attr("stroke-width", 1);
      
    return defs;
}

export function defineClips(svg,ml,mr,mt,mb,width,height) {

    let clip = svg.append("defs").append("clipPath")
        .attr("id", "clip")
        .append("rect")
        .attr("x", ml)
        .attr("y", mt )
        .attr("width", width - ml - mr)
        .attr("height", height - mt - mb);

      let clipX = svg.append("defs").append("clipPath")
        .attr("id", "clipX")
        .append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", width - mr + 20)
        .attr("height", 100000);

        let clipX2 = svg.append("defs").append("clipPath")
        .attr("id", "clipX2")
        .append("rect")
        .attr("x", ml)
        .attr("y", mt*.2 )
        .attr("width", width - ml - mr)
        .attr("height", height - mt - mb);

      let clipY = svg.append("defs").append("clipPath")
        .attr("id", "clipY")
        .append("rect")
        .attr("x", 0 - ml)
        .attr("y", mt - 5)
        .attr("width", width)
        .attr("height", height - mt - mb + 5);

}

