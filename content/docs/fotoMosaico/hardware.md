## **Hardware Rendering**
Este proceso consiste en renderizar utilizando el hardware de una GPU (Graphic Processing Unit) en vez de la CPU, lo cual permite una renderización más veloz a comparación de hacerlo con la CPU. Las tarjetas gráficas se crearon precisamente para manejar procesos que son muy intensos gráficamente hablando, lo que da una ventaja grande frente a las CPU.

Como todo, esto tiene sus pros:
- Se puede lograr una gran escalabilidad en una infraestructura con varias tarjetas gráficas a disposición.
- La paralelización que se puede lograr a través de este hardware mejora no solo el rendimiento del render si no que permite que la CPU se encargue de otras tareas, mejorando la armonía del sistema.

Las partes no tan positivas serían:

- Las tarjetas gráficas no tienen un acceso directo a la memoria del sistema principal, por lo que tiene que lograr esta comunicación por medio de la CPU.
- Es más complicado lograr la compatibilidad de las tarjetas graficas con el render puesto que no solo depende de los fabricantes de estas si no de los controladores que el sistema tenga instalados para interactuar con estas.

<div align = "center">

{{< p5-iframe sketch="/cv/sketches/ui-mosaic.js" width="700" height="700" lib1="https://cdn.jsdelivr.net/gh/objetos/p5.quadrille.js/p5.quadrille.min.js" lib2="https://cdn.jsdelivr.net/gh/VisualComputing/p5.shaderbox/p5.shaderbox.min.js" >}}

{{< p5-global-iframe id="Dynamic Kanizsa Illusion" width="800" height="800" >}}


let theShader;
let video;
let planeSide = 1000;
let button;
let debug;
let slider;
let Grayimgs = new Array(10);

function imgArraySortLuma(imagesArray){
  let lumaMediaArray = [];
  let index = 0;

  imagesArray.forEach(function(image) {
    lumaMediaArray[index] = calculateLuma(image);
    index ++;
  });
  bubbleSort(lumaMediaArray, imagesArray, lumaMediaArray.length);
  return imagesArray;
}

function swap(lumaArray, imagesArray, xp, yp){
    var temp = lumaArray[xp];
    lumaArray[xp] = lumaArray[yp];
    lumaArray[yp] = temp;

    var temp2 = imagesArray[xp];
    imagesArray[xp] = imagesArray[yp];
    imagesArray[yp] = temp2;
}

// An optimized version of Bubble Sort
function bubbleSort(lumaArray, imagesArray, n){
var i, j;
for (i = 0; i < n - 1; i++){
    for (j = 0; j < n - i - 1; j++){
        if (lumaArray[j] < lumaArray[j + 1])
          swap(lumaArray, imagesArray, j, j + 1);
    }
  }
}

function calculateLuma(image){
  var sum = 0;
  image.loadPixels();

  for (let i = 0; i < 4 * (image.width * image.height / 2); i += 4) 
    sum += 0.333 * image.pixels[i] + 0.333 * image.pixels[i+1] + 0.333 * image.pixels[i+2];
  
  return sum / (image.width * image.height);
}

function preload(){
  // load the shader
  theShader = loadShader('/cv/docs/fotoMosaico/texture.vert','/cv/docs/fotoMosaico/texture.frag');
  video = createVideo(['/cv/docs/fotoMosaico/picnic.mp4']);
  video.hide();
  var k = 0;
  for (let i=0; i<15; i++){
    Grayimgs[k] = loadImage("/cv/docs/fotoMosaico/imgDes/"+(i+1)+".jpg");
    k = k + 1;
  }

  Grayimgs = imgArraySortLuma(Grayimgs);
}

function setup() {
  // shaders require WEBGL mode to work
  createCanvas(1000, 1000, WEBGL);
  textureMode(NORMAL);
  video.loop();
  //video.hide();
  video.volume(0);
  noStroke();
  shader(theShader);
  // here we're using setUniform() to send our uniform values to the shader
  var str = ""
  for (var i=0 ; i<15 ; i++){
    str = "Gr"+String(15-i);
    theShader.setUniform(str, Grayimgs[i]);
  }
  theShader.setUniform("resolution", 100);
  debug = true;
  theShader.setUniform("debug", debug);

  //Slider Config
  slider = createSlider(10,500,100,10);
  slider.position( 100, 30);
  slider.style('width', '200px');
  showPixel = createElement('h2', 'px '+100);
  showPixel.position( 30, 0);
}

function draw() {
  theShader.setUniform("image", video);
  theShader.setUniform("resolution", slider.value());
  showPixel.html('px '+slider.value());
  background(0);
  beginShape();
  vertex(-planeSide/2, -planeSide/2, 0, 0); // esquina inferior izquierda
  vertex(planeSide/2, -planeSide/2, 1, 0); // esquina inferior derecha
  vertex(planeSide/2, planeSide/2, 1, 1); // esquina superior derecha
  vertex(-planeSide/2, planeSide/2, 0, 1); // esquina superior izquierda
  endShape(CLOSE);
}

function keyPressed(){
  if (key === 'd'){
    debug = !debug;
    theShader.setUniform("debug", debug);
  }
}

{{< /p5-global-iframe >}}

</div>

<div align = "center">

{{< p5-global-iframe id="Dynamic Kanizsa Illusion" width="800" height="800" >}}


let theShader;
let img;
let planeSide = 1000;
let button;
let debug;
let slider;
let Grayimgs = new Array(10);

function imgArraySortLuma(imagesArray){
  let lumaMediaArray = [];
  let index = 0;

  imagesArray.forEach(function(image) {
    lumaMediaArray[index] = calculateLuma(image);
    index ++;
  });
  console.log(lumaMediaArray);
  bubbleSort(lumaMediaArray, imagesArray, lumaMediaArray.length);
  console.log(lumaMediaArray);
  return imagesArray;
}

function swap(lumaArray, imagesArray, xp, yp){
    var temp = lumaArray[xp];
    lumaArray[xp] = lumaArray[yp];
    lumaArray[yp] = temp;

    var temp2 = imagesArray[xp];
    imagesArray[xp] = imagesArray[yp];
    imagesArray[yp] = temp2;
}

// An optimized version of Bubble Sort
function bubbleSort(lumaArray, imagesArray, n){
var i, j;
for (i = 0; i < n - 1; i++){
    for (j = 0; j < n - i - 1; j++){
        if (lumaArray[j] < lumaArray[j + 1])
          swap(lumaArray, imagesArray, j, j + 1);
    }
  }
}

function calculateLuma(image){
var i = 0, total = 0;
image.loadPixels();

for (let y = 0; y < image.height; y += 1) {
    for (let x = 0; x < image.width; x += 1) {
      pixel = image.pixels[(y * image.width + x)];
      total = total + brightness(pixel);
      i++;
    }
  }
  return total / i;
}

function preload(){
  // load the shader
  theShader = loadShader('/cv/docs/fotoMosaico/texture.vert','/cv/docs/fotoMosaico/texture.frag');
  img = loadImage("/cv/docs/fotoMosaico/imgHW/londres.jpg");
  var k = 0;
  for(let i = 0; i<15; i++){
    Grayimgs[i]=(loadImage(`https://picsum.photos/50?random=${i+1}`));
  }
 // for (let i=0; i<15; i++){
    
   // Grayimgs[k] = loadImage("/cv/docs/fotoMosaico/imgDes/"+(i+1)+".jpg");
   // k = k + 1;
 // }
  //Grayimgs = imgArraySortLuma(Grayimgs);
}

function setup() {
  // shaders require WEBGL mode to work
  Grayimgs = imgArraySortLuma(Grayimgs);
  createCanvas(1000, 1000, WEBGL);
  textureMode(NORMAL);
  shader(theShader);
  // here we're using setUniform() to send our uniform values to the shader
  theShader.setUniform("image", img);
  var str = ""
  for (var i=0 ; i<15 ; i++){
    str = "Gr"+String(15-i);
    theShader.setUniform(str, Grayimgs[i]);
  }
  theShader.setUniform("resolution", 100);
  debug = true;
  theShader.setUniform("debug", debug);

  //Slider Config
  slider = createSlider(10,500,100,10);
  slider.position( 100, 30);
  slider.style('width', '200px');
  showPixel = createElement('h2', 'px '+100);
  showPixel.position( 30, 0);
}

function draw() {
  theShader.setUniform("resolution", slider.value());
  showPixel.html('px '+slider.value());
  background(0);
  beginShape();
  vertex(-planeSide/2, -planeSide/2, 0, 0); // esquina inferior izquierda
  vertex(planeSide/2, -planeSide/2, 1, 0); // esquina inferior derecha
  vertex(planeSide/2, planeSide/2, 1, 1); // esquina superior derecha
  vertex(-planeSide/2, planeSide/2, 0, 1); // esquina superior izquierda
  endShape(CLOSE);
}

function keyPressed(){
  if (key === 'd'){
    debug = !debug;
    theShader.setUniform("debug", debug);
  }
}

{{< /p5-global-iframe >}}

</div>
Podemos concluir que el uso de las GPU para render permite una mayor escala en los proyectos a realizar y un mejor rendimiento, sin embargo, su costoinherente y más ahora en el mercado actual demuestra que esta forma de rendering no es muy viable para un proyecto inicial o una apliación sencilla, por lo cual seria más provechos hacer rendering por medio de software.

### **Fuentes**

- https://develop3d.com/hardware/rendering-hardware/
- https://www.omnisci.com/technical-glossary/gpu-rendering