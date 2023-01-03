import { SVG } from "@svgdotjs/svg.js";
import { ACTORES361 } from "./actores";
import { ACCIONES361 } from "./acciones";

const diagrama = {
  title: "Anima tu página con SVG, CSS y JavaScript",
  actores: ACTORES361.filter((i) => i.flag_ficticio == 0).sort((a, b) => a.orden - b.orden),
  acciones: ACCIONES361.sort((a, b) => a.orden - b.orden),
};
const accionDrawWidth = 150;
const accionDrawHeight = 60;
const heightActores = 200;
const widthActores = 300 + diagrama.acciones.length * 200; //(x_start_Accion+#Acciones * accionDrawWidth)
const drawHeight = heightActores * diagrama.actores.length;

let x_start_accion = 300;
const lineStroke = { color: "#000", width: 1, linecap: "round" };
let draw = SVG().addTo("#drawing");
draw.size(widthActores + 50, drawHeight);
let accionesDibujadas = []; // guarda el id de la accion y sus coordenadas x,y de su centro {id_flujo,x,y}
drawFlujo();
function drawFlujo() {
  console.log("diagrama", diagrama);
  dibujarActores();
  dibujarTitulo();
  dibujarAcciones();
}

function dibujarTitulo() {
  let group = draw.group();
  group.rect(50, drawHeight).fill("white").stroke({ color: "black", width: 1 }).move(0, 0);
  let texto_autor = group
    .text(diagrama.title)
    .move(15, drawHeight / 2)
    .font({ family: "Arial, sans-serif", size: "12px" })
    .fill("black")
    .stroke("none");
  let texto_height = texto_autor.bbox().height;

  texto_autor.dx(texto_height / 2);
  texto_autor.attr("text-anchor", "middle");
  texto_autor.rotate(-90);
}

function dibujarActores() {
  let hx = 0;
  diagrama.actores.forEach((item) => {
    let group = draw.group();
    group.rect(widthActores, heightActores).fill("white").stroke({ color: "black", width: 1 }).move(50, hx);
    hx += heightActores;
    let texto_autor = group
      .text(jumplineActorNombre(item.descripcion))
      .move(70, hx - 100)
      .font({ family: "Arial, sans-serif", size: "10px" })
      .fill("black")
      .stroke("none");
    let texto_height = texto_autor.bbox().height;
    texto_autor.dx(texto_height / 2);
    texto_autor.attr("text-anchor", "middle");
    texto_autor.rotate(-90);
  });
}
function jumplineActorNombre(descripcion) {
  let resultado = "";
  let contador = 0;
  descripcion.split(" ").forEach((palabra) => {
    if (contador + palabra.length < 25) {
      resultado += (contador == 0 ? "" : " ") + palabra;
      contador += palabra.length + 1;
    } else {
      resultado += "\n" + palabra;
      contador = palabra.length;
    }
  });

  return resultado;
}

function jumplineMaxLength(text) {
  if (!text) {
    return "";
  }
  let resultado = "";
  let contador = 0;
  text.split(" ").forEach((palabra) => {
    if (contador + palabra.length < 20) {
      resultado += " " + palabra;
      contador += palabra.length + 1;
    } else {
      resultado += "\n" + palabra;
      contador = 0;
    }
  });

  return resultado;
}

function dibujarAcciones() {
  //se encuentran las acciones ficticias y a quien perteneces y los dibuja
  let accion_inicial = diagrama.acciones.find((accion) => accion.tipo_flujo_ca == "I");

  if (!accion_inicial) {
    //NO HAY ACCION INICIAL
    throw "No se encontro accion de inicio";
  }

  //dibuja la primera accion de inicio
  let indexActorInicial = diagrama.actores.findIndex((actor) => actor.codigo == accion_inicial.nodo_fin);

  if (indexActorInicial == -1) {
    //EN CASO EL FORMATO ESTE MAL
    throw "Error en el formato de data";
  }
  showCuadricula();
  //dibuja nodo inicial
  //se empieza a graficar a partir de las COORDENADAS 200,0
  let groupInicio = draw.group();

  diagrama.acciones.forEach((accion, i) => {
    if (accionesDibujadas.find((item) => item.id_flujo == accion.id_flujo)) {
      return;
    }
    if (i == 0) {
      //dibuja circulo inicio
      groupInicio.circle().radius(25).stroke({ color: "#70b22c", width: 2 }).fill("#e6ff97");
      let index_actor = diagrama.actores.findIndex((item) => item.codigo == accion.nodo_fin);
      groupInicio.move(175, 100 + index_actor * 200 - 25);
    } else {
      switch (accion.tipo_flujo_ca) {
        case "E":
          let index_actor_inicio = diagrama.actores.findIndex((item) => item.codigo == accion.nodo_inicio);
          let index_actor_fin = diagrama.actores.findIndex((item) => item.codigo == accion.nodo_fin);
          dibujarRectAccion(accion, i,index_actor_inicio,index_actor_fin);
          break;
        case "F":
          // draw circulo final
          dibujarFinal(accion);
          break;
        case "COND":
          dibujarCondicional(accion,i);
          break;
        default:
          break;
      }
    }
  });
  groupInicio.forward();
  console.log("dibujadosTodos", accionesDibujadas);
}
function dibujarFinal(accion) {
  //console.log('accionesDibujadas',accionesDibujadas);
  let accion_proveniente = accion.flujos_provenientes[0];
  //console.log('accion_proveniente',accion_proveniente);

  const { x, y } = accionesDibujadas.find((x) => x.id_flujo == accion_proveniente);
  draw
    .circle(50)
    .stroke({ color: "#861e20", width: 2 })
    .fill("#f5d1cf")
    .center(x + 150, y);
  //conectorProveniente(x + 125, y, accion.flujos_provenientes);
}
/**
 * Dibuja la punta de la flecha
 * @param x
 * @param y
 * @param orientacion (rigth,top,bottom)
 */
function drawConectorLeft(x, y, tipo_para_nom) {
  //dibuja una -> horizontal apunta a la accion + texto en el
  //linea
  let conectorLeft = draw.line(x - 125, y, x, y).stroke(lineStroke);
  //triangulo (flecha)
  draw
    .polygon("9,5 0,0 0,10")
    .fill("#000")
    .move(x - 9, y - 5);
  //text
  if (tipo_para_nom) {
    let texto_autor = draw
      .text(tipo_para_nom)
      .move(x - 75, y)
      .font({ family: "Arial, sans-serif", size: "10px" })
      .fill("#777")
      .stroke("none");
    texto_autor.attr("text-anchor", "start");
  }

  conectorLeft.backward();
}

/** DIBUJO DEL CUADRO DE ACCIONES */
function dibujarRectAccion(accion, i,index_actor_inicio,index_actor_fin,text_proveniente='') {
  let y_start_accion = 100 + index_actor_inicio * 200;

  drawConectorLeft(x_start_accion, y_start_accion, i == 1 ? "" : accion.tipo_para_nom);
  //dibuja cuadro y texto de la accion
  let accionDraw = draw.group();
  accionDraw.rect(accionDrawWidth, accionDrawHeight).radius(8).stroke({ color: "#10709f", width: 2 }).fill("#eceeff");
  let texto_autor = accionDraw
    .text(jumplineMaxLength(accion.id_flujo + " - " + accion.descripcion))
    .font({ family: "Arial, sans-serif", size: "10px" })
    .fill("black")
    .stroke("none")
    .move(75, 15);
  texto_autor.attr("text-anchor", "middle");
  texto_autor.attr("dominant-baseline", "central");
  accionDraw.move(x_start_accion, y_start_accion - accionDrawHeight / 2);
  accionesDibujadas.push({ id_flujo: accion.id_flujo, x: x_start_accion + accionDrawWidth / 2, y: y_start_accion });

  conectorProveniente(x_start_accion - 125, y_start_accion, accion.flujos_provenientes,text_proveniente);

  x_start_accion += 200 + (index_actor_inicio == index_actor_fin ? accionDrawWidth / 2 : 0);// si la sgte accion esta en el mismo actor se suma el espacio
  if (index_actor_inicio == index_actor_fin) {
    console.log('iguales: ',accion.id_flujo + " - " + accion.descripcion);
  }
}
function conectorProveniente(x_start, y_start, flujos_provenientes = [], text = "", color = "#000") {
  //dibuja los conectores provenientes a la accion

  flujos_provenientes.forEach((element) => {
    const accion = accionesDibujadas.find((item) => item.id_flujo == element);
    if (accion) {
      const { x, y } = accion;
      let conector = draw.line(x_start, y_start, x, y).stroke({ color, width: 1, linecap: "round" });
      conector.backward(); //atras del texto +cuadro accion linea ....
      conector.backward();
      conector.backward();
      conector.backward();
      conector.backward();
      conector.backward();
      conector.backward();
      conector.backward();
      conector.backward();
      if (text) {
        const x_punto_medio = (x_start + x) / 2;
        const y_punto_medio = (y_start + y) / 2;
        let accionDraw = draw.group();
        let texto = accionDraw
          .text(text)
          .font({ family: "Arial, sans-serif", size: "14px" })
          .fill("black")
          .stroke("none")
          .move(75, 15);
        texto.attr("text-anchor", "middle");
        texto.attr("dominant-baseline", "central");
        accionDraw.move(x_punto_medio, y_punto_medio);
      }
    }
  });
}

function conectorNext(index_actor_inicio, index_actor_fin, y_start_accion) {
  const resto_indexs = Math.abs(index_actor_inicio - index_actor_fin) - 1;
  const lineHeigth = 200 + resto_indexs * 200;
  let conectorNext = draw.line(0, 0, 0, lineHeigth).stroke(lineStroke);
  if (index_actor_inicio > index_actor_fin) {
    //draw conector TOP (si la siguiente accion esta en la parte superior)
    conectorNext.move(x_start_accion + 75, y_start_accion - lineHeigth);
  } else {
    //draw conector BOTTOM (si la siguiente accion esta en la parte inferior)
    conectorNext.move(x_start_accion + 75, y_start_accion);
  }
  conectorNext.backward();
}

function dibujarCondicional(accion,i) {
  let index_actor_inicio = diagrama.actores.findIndex((item) => item.codigo == accion.nodo_inicio);
  let accion_next_si = diagrama.acciones.find((a) => a.id_flujo == accion.id_flujo_si);
  let index_actor_fin = diagrama.actores.findIndex((item) => item.codigo == accion_next_si.nodo_fin);
  let y_start_accion = 100 + index_actor_inicio * 200;
  drawConectorLeft(x_start_accion, y_start_accion, "");
  // DIBUJA CONDICIONAL
  draw
    .polygon(`0,25 25,50 50,25 25,0`)
    .stroke({ color: "#afb42e", width: 2 })
    .fill("#ffffcb")
    .move(x_start_accion, y_start_accion - 25);
  //x_start_accion -= 50;
  //conectorNext(index_actor_inicio, index_actor_fin, y_start_accion);
  accionesDibujadas.push({
    id_flujo: accion.id_flujo,
    x: x_start_accion + 25,
    y: y_start_accion,
  });

  conectorProveniente(x_start_accion - 125, y_start_accion, accion.flujos_provenientes);
  x_start_accion += 150 + 75;
  const x_start_accion_local = x_start_accion

  //ACCION SI conectorNext
  const accion_si = diagrama.acciones.find((item) => item.id_flujo == accion.id_flujo_si);
  
  if (accion_si) {
    switch (accion_si.tipo_flujo_ca) {
      case "E":
        index_actor_inicio = diagrama.actores.findIndex((item) => item.codigo == accion_si.nodo_fin);
        index_actor_fin = diagrama.actores.findIndex((item) => item.codigo == accion_si.nodo_inicio);
        y_start_accion = 100 + index_actor_inicio * 200;
    
        dibujarRectAccion(accion_si,i,index_actor_inicio,index_actor_fin,'SI')
        
        break;
    
      default:
        break;
    }

  }

  //ACCION NO
  const accion_no = diagrama.acciones.find((item) => item.id_flujo == accion.id_flujo_no);
  if (accion_no?.tipo_flujo_ca == 'E') {
    switch (accion_no.tipo_flujo_ca) {
      case "E":
        index_actor_inicio = diagrama.actores.findIndex((item) => item.codigo == accion_no.nodo_fin);
        index_actor_fin = diagrama.actores.findIndex((item) => item.codigo == accion_no.nodo_inicio);
        dibujarRectAccion(accion_no,i,index_actor_inicio,index_actor_fin,'NO')
        
        break;
    
      default:
        break;
    }
    
  }
}

function showCuadricula() {
  let startX = 200;
  let startY = 50;
  for (let index = 0; index < 4 * diagrama.acciones.length; index++) {
    draw.line(startX, 0, startX, drawHeight).stroke({ color: "#cacaca", width: 1, linecap: "round" });
    startX += 50;
  }
  for (let index = 0; index < 4 * diagrama.actores.length; index++) {
    draw.line(200, startY, widthActores, startY).stroke({ color: "#cacaca", width: 1, linecap: "round" });
    startY += 50;
  }
}
