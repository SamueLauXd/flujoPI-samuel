let pantallas = [];
let pantalla1;
let x = 30;
let y = 283;
let largo = 300;
let alto = 50;
let contador;

function preload() {
  pantallas[0] = loadImage("assets/principal.png")
  pantallas[1] = loadImage("assets/2.png")
  pantallas[2] = loadImage("assets/3.png")
  pantallas[3] = loadImage("assets/4.png")
  pantallas[4] = loadImage("assets/5.png")
  pantallas[5] = loadImage("assets/6.png")
  pantallas[6] = loadImage("assets/7.png")
  pantallas[7] = loadImage("assets/8.png")

  contador = 0;
}

function setup() {
  createCanvas(428, 926);
}

function draw() {
  background(220);
  image(pantallas[contador],0,0);
  fill(255);
  //rect(x, y, largo, alto);
}

function mousePressed() {

// pantalla de chat
  if (mouseX > 35 && mouseX < 35 + 380 && mouseY > 260 && mouseY < 260 + 70) { 
    console.log("undido")
    console.log(contador);
    contador = 1;
  }

  if (mouseX > 208 && mouseX < 208 + 40 && mouseY > 870 && mouseY < 870 + 40) { 
    console.log("undido")
    contador = 2;
    console.log(contador);
  }

  if (mouseX > 30 && mouseX < 30 + 380 && mouseY > 160 && mouseY < 160 + 70) { 
    console.log("undido")
    contador = 3;
    console.log(contador);
  }

  if (contador === 3 && mouseX > 28 && mouseX < 28 + 35 && mouseY > 57 && mouseY < 57 + 35) {
    console.log("undido");
    contador = 0;
    console.log(contador);
  }

  if (contador === 1 && mouseX > 28 && mouseX < 28 + 35 && mouseY > 57 && mouseY < 57 + 35) {
    console.log("undido");
    contador = 0;
    console.log(contador);
  }

  if (contador === 2 && mouseX > 28 && mouseX < 28 + 35 && mouseY > 57 && mouseY < 57 + 35) {
    console.log("undido");
    contador = 0;
    console.log(contador);
  }
  // pantalla de solicitudes
  if (contador === 2 && mouseX > 260 && mouseX < 260 + 135 && mouseY > 381 && mouseY < 381 + 50) {
    console.log("undido");
    contador = 4;
    console.log(contador);
  }

  if (contador === 2 && mouseX > 30 && mouseX < 30 + 60 && mouseY > 230 && mouseY < 230 +60) {
    console.log("undido");
    contador = 5;
    console.log(contador);
  }

  if (contador === 4 && mouseX > 170 && mouseX < 170 + 90 && mouseY > 760 && mouseY < 760 +90) {
    console.log("undido");
    contador = 6;
    console.log(contador);
  }

  if (contador === 6 && mouseX > 30 && mouseX < 30 + 300 && mouseY > 283 && mouseY < 282 +50) {
    console.log("undido");
    contador = 7;
    console.log(contador);
  }
}
