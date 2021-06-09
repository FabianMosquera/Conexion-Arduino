// Declara el objeto de "SerialPort" que se va a utilizar
var serial;
var port = 'COM9'; // variable que indica el puerto serial utilizado por el Arduino
var backgroundColor = 'rgb(0, 0, 0)'; // variable donde se almacena el color de fondo
var Escenarios;
var Aly = 0;
var gif_loadImg, gif_createImg;
var Laura = [];
var Stanley = [];
var Sidney = [];
var Personajes =[Laura, Stanley, Sidney]
var personaje;
var i = 0;
const element = document.getElementById('per');
let mic, recorder, soundFile;
let state = 0;

function preload(){

   Laura[0] = createImg("./images/Contenido Multimedia/Personajes/Laura/Caminar-DER/Caminar.gif");
   Laura[1] = createImg("./images/Contenido Multimedia/Personajes/Laura/Caminar-IZQ/Caminar-IZQ.gif");
   Laura[2] = createImg("./images/Contenido Multimedia/Personajes/Laura/Saltar/Saltar.gif");

   Stanley[0] = createImg("./images/Contenido Multimedia/Personajes/Stanley/Walk-R/Caminar-DER.gif");
   Stanley[1] = createImg("./images/Contenido Multimedia/Personajes/Stanley/Walk-L/Caminar-IZQ.gif");
   Stanley[2] = createImg("./images/Contenido Multimedia/Personajes/Stanley/Jump-R/Saltar-DER.gif");
   Stanley[3] = createImg("./images/Contenido Multimedia/Personajes/Stanley/Jump-L/Saltar-IZQ.gif");

   Sidney[0] = createImg("./images/Contenido Multimedia/Personajes/Sidney/Walking R/Caminar-DER.gif");
   Sidney[1] = createImg("./images/Contenido Multimedia/Personajes/Sidney/Walking L/Caminar-IZQ.gif");
   Sidney[2] = createImg("./images/Contenido Multimedia/Personajes/Sidney/Jump-R/Saltar-DER.gif");
   Sidney[3] = createImg("./images/Contenido Multimedia/Personajes/Sidney/Jump-L/Saltar-IZQ.gif");


 
 Escenarios= backgroundColor;
 //gif_loadImg = loadImage("./images/Contenido Multimedia/Personajes/Laura/Caminar-DER/Caminar.gif");
  //gif_createImg = createImg("./images/Contenido Multimedia/Personajes/Laura/Caminar-DER/Caminar.gif");


}

function setup() {
   const myCanvas = createCanvas(1000, 450);
   myCanvas.position(180,50);
   myCanvas.parent('canvasDiv');


 // Crea un objeto del tipo SerialPort
 serial = new p5.SerialPort();

 // Determina el método que se llama para listar los puertos seriales conectados
 serial.list();
 serial.on('list', portList);

 // Abre la conexión con el puerto donde está conectado el Arduino
 serial.open(port);

 // Determina el método que se llama cuando hay datos en el puerto
 serial.on('data', getData);
}


// Método que muestra por consola los puertos seriales conectados al PC
function portList(ports) {
 console.log('Listado de puertos seriales:');
 // recorre el listado de puertos seriales y los muestra por consola
 for (var i = 0; i < ports.length; i++) {
 	console.log(ports[i]);
 }
}

// Método que llama al recibir datos desde el puerto serial
function getData() {
   var data = serial.readStringUntil("\r\n");// lee los datos desde el puerto serial
   trim(data);                	// elimina los espacios en blanco al principio y final de los datos, si los hay
   if (!data) return;         	// si los datos leídos están vacíos no hace nada
   console.log(data);         	// muestra los datos leídos
}

function draw() {
 if(data = "Escenas"){
   background(Escenarios);
 }

//Stanley[1].position(600,20);

 
}

function CambiarEscenario(){
   Aly ++;
   if(Aly == 1){
      Escenarios= loadImage("./images/Contenido Multimedia/Escenarios/Escena1.jpg")
   }
   else if(Aly == 2){
      Escenarios= loadImage("./images/Contenido Multimedia/Escenarios/Escena2.jpg")

   }else if (Aly == 3){
      Escenarios= loadImage("./images/Contenido Multimedia/Escenarios/Escena3.jpg")

   }else if(Aly > 3){
      Aly = 1;
      Escenarios= loadImage("./images/Contenido Multimedia/Escenarios/Escena1.jpg")
   }
   
}



