## **Algoritmo de visibilidad: Partición Binaria del Espacio**

Es un método para subdividir recursivamente un espacio en elementos convexos
empleando hiperplanos. Esta subdivisión da como resultado a una
representación de la escena mediante una estructura de datos árbol
conocido como el arbol de partición binaria del espacio

El algoritmo comienza insertando en un nodo la región que se desea representar,
luego se divide a la mitad la región, las subregiones resultantes serán los hijos
izquierdo y derecho de la región original y el proceso de división se realiza
para cada una de las subregiones.

Lo anterior puede observarse en la imagen a continuación:

<div align="center">
  <img src="../BSP.png">
</div>

## **Algoritmo del punto medio para circunferencias**

https://es.wikipedia.org/wiki/Algoritmo_del_punto_medio_para_circunferencias

https://en.wikipedia.org/wiki/Midpoint_circle_algorithm

<br/>

{{< details title="p5-global-iframe markdown" open=false >}}
```js
{{</* p5-global-iframe id="Algoritmo del punto medio para circunferencias" width="420" height="405" >}}

var p, x, y, r, ans=false, bandera = false;

function setup() {
  createCanvas(370, 380);
  background(255)

  slider = createSlider(20, 150, 100);
  slider.position(20, 20);
  r=slider.value();

  translate(200,200)
  strokeWeight(2)

  valueDisplayer = createP()
  valueDisplayer.position(160, 0)
  
  button2 = createButton('Dibujar');
  button2.position(25,50);
  button2.mousePressed(resetSketch)
}

function resetSketch(){
  strokeWeight(0)
  rect(-150, -150, 501, 501);
  strokeWeight(2)

  bandera = false
  ans = false

  updateValue()
  loop()
}

function draw() {
  valueDisplayer.html('Radio: '+slider.value());

  if(bandera){
    ans = midPoint()
    if(ans==true){
      noLoop()
      bandera = false
    }
  }
  loop()
}

function updateValue(){
  r=slider.value();
  p=1-r
  x=0
  y=r
  bandera = true
}

function midPoint(){
  x+=1
  if(p<0){
    drawPoints(x,y)
    p=p+2*x+3
  }else if(p>=0){
    y = y - 1
    drawPoints(x,y)
    p = p+2*x-2*y+5
  }

  if(x>=y){
    return true
  }
  return false
}

function drawPoints(x,y){
  translate(200,200)
  point(x, y)
  point(-x, y)
  point(x, -y)
  point(-x, -y)
  point(y, x)
  point(-y, x)
  point(y, -x)
  point(-y, -x)
}

{{< /p5-global-iframe */>}}
```
{{< hint warning >}}
Note that `p5` should be the name to be used for the sketch object variable.
{{< /hint >}}
{{< /details >}}
### **Descripción**

En computación gráfica, el algoritmo del punto medio para circunferencias es un algoritmo usado para determinar los puntos necesarios para rasterizar una circunferencia. El algoritmo se puede generalizar a curvas cónicas. 
<br/>


<div align = "center">



{{< p5-global-iframe id="Algoritmo del punto medio para circunferencias" width="420" height="405" >}}

var p, x, y, r, ans = false, bandera = false;

function setup() {
  createCanvas(370, 380);
  background(255)

  //crear el slider para el radio de la circunferencua
  slider = createSlider(20, 150, 100);
  slider.position(20, 20);
  r = slider.value();

  //mover el centro del plano a 200, 200
  translate(200,200)
  strokeWeight(2)

  //línea de texto que muestra el valor del slider
  valueDisplayer = createP()
  valueDisplayer.position(160, 0)

  //botón para dibujar
  button = createButton('Dibujar');
  button.position(25,50);

  //al presionarlo, se pone en blanco el lienzo
  button.mousePressed(resetSketch)
}

function resetSketch(){
  //dibujar un cuadrilátero blanco para poner blanco el lienzo
  strokeWeight(0)
  rect(-150, -150, 501, 501);
  strokeWeight(2)

  bandera = false
  ans = false

  //obtener valor del radio
  updateValue()

  //volver a iterar en la función draw
  loop()
  col1 = num()
  col2 = num()
  col3 = num()
  stroke(col1, col2, col3)
}

function draw() {
  //texto que muestra el radio
  valueDisplayer.html('Radio: '+slider.value());

  //dibujar la circunferencia
  if(bandera){
    ans = midPoint()
    if(ans==true){
      noLoop()
      bandera = false
    }
  }
  loop()
}

function updateValue(){
  r = slider.value();
  p = 1 - r
  x = 0
  y = r
  bandera = true
}

function num() {
  return Math.floor(Math.random() * 256);
}

function midPoint(){
  x += 1
  if(p < 0){
    drawPoints(x, y)
    p = p + 2 * x + 3
  }else if(p >= 0){
    y = y - 1
    drawPoints(x, y)
    p = p + 2 * x - 2 * y + 5
  }

  if(x >= y){
    return true
  }
  return false
}

function drawPoints(x,y){
  //dibujar la cirncunferencia por los 4 puntos de vista
  translate(200,200)
  point(x, y)
  point(-x, y)
  point(x, -y)
  point(-x, -y)
  point(y, x)
  point(-y, x)
  point(y, -x)
  point(-y, -x)
}

{{< /p5-global-iframe >}}

</div>

### **Funcionamiento**

Una circunferencia se define como un conjunto de puntos que se encuentran, en su totalidad, a una distancia determinada r de una posición central. Es posible reducir el cálculo al considerar la simetría de las circunferencias, la forma de la circunferencia es similar entre cuadrantes y simétrica entre octantes.

Para aplicar el método del punto medio, definimos una función de circunferencia como :

<div align="center">
  <img src="../formulas.png">
</div>

<br>

### **Algoritmo**

 1-Se capturan el radio r y el centro de la circunferencia (xc, yc).

 2-Se obtiene el primer punto de la circunferencia centrada en origen (xc, yc) como (0, r).

 3-Se calcula el valor inicial del parámetro de decisión como p0=5/4 - r.

 Para k=0 hasta x>=y incrementa k

    Si pk < 0 
       *Siguiente punto de la circunferencia con centro (0,0) es (xk+1, yk).
       *pk+1=pk+2xk+1+1.
    Sino
        *Siguiente punto de la circunferencia con centro (0,0) es (xk+1, yk-1).
        *pk+1=pk+2xk+1+1-2yk+1.
    //Donde 2xk+1=2xk+2  y  2yk+1=2yk-2
 
 4-Se determinan los puntos de simetría para los otros siete octantes.

 5-Se mueve cada posición del pixel calculada (x,y) a la trayectoria circular centrada en (xc, yc) 
   y trazamos los valores de las coordenadas: x=x+xc y y=y+yc.

 Fin.



## **Algoritmo dibujo de líneas**

{{< details title="p5-global-iframe markdown" open=false >}}
```js
{{</* p5-global-iframe id="Algoritmo dibujo de líneas" width="655" height="505" >}}

var grid;
var res = 5, tam = 1;
var rows, cols;
var pos;
var vel;

//para crear la matriz del lienzo
function Array2D(rows, cols) {
  var arr = new Array(rows);
  for (var i = 0; i < rows; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}

function setup() {
  createCanvas(640, 480);

  //botones para definir el tamaño de la cuadrícula
  bPeq = createButton('Pequeña');
  bPeq.position(500, 25);
  bPeq.mousePressed(peq)

  bMed = createButton('Mediana');
  bMed.position(500, 60);
  bMed.mousePressed(med)

  bGran = createButton('Grande');
  bGran.position(500, 95);
  bGran.mousePressed(gran)

  dibujarCuadricula()
}

function dibujarCuadricula(){
  rows = width / res;
  cols = height / res;

  //crear y llenar la matriz del lienzo
  grid = Array2D(rows, cols);
  for (var x = 0; x < rows; x++) {
    for (var y = 0; y < cols; y++) {
      grid[x][y] = 0;
    }
  }
  pos = createVector(0, 0);
  vel = createVector(3, 5);  
}

function peq(){
  tam = 2;
  res = 2;
  dibujarCuadricula()
}

function med(){
  tam = 1;
  res = 5;
  dibujarCuadricula()
}

function gran(){
  tam = 3;
  res = 8;
  dibujarCuadricula() 
}

function draw() {
  background(255);

  //poner la matriz en blanco
  for (var x = 0; x < rows; x++) {
    for (var y = 0; y < cols; y++) {
      grid[x][y] = 0;
    }
  }

  //llamar la función del algortimo de bresenham con la posición del mouse
  bresenhamLine(mouseX, mouseY, (width - 1) / res, (height - 1) / res);
  for (var x = 0; x < rows; x++) {
    for (var y = 0; y < cols; y++) {
      var px = x * res;
      var py = y * res;
      stroke(0);
      strokeWeight(res / 20);

      //pintar en negro los puntos de la línea
      if (grid[x][y] == 1) {
        fill(0);
      } else {
        noFill();
      }
      square(px, py, res);
    }
  }
  noLoop()

  //dibujar recuadro que enmarca de la animación
  fill(255)
  rect(380, 51, 100, 30);
  
  //texto para indicar el tamaño de la cuadrícula
  textSize(12);
  fill(0)
  text('Cuadrícula', 400, 70)

  //recuadros de la sección para dibujar la línea
  strokeWeight(2)
  noFill()
  rect(1, 1, 638, 478);

  if(tam == 1)
    rect(1, 1, 125, 95);
  if(tam == 2)
    rect(1, 1, 320, 240);
  if(tam == 3)
    rect(1, 1, 80, 62);
}

//al hacer clic, se corre el algoritmo de dibujo
function mousePressed() {
  loop()
}

//algoritmo de Bresenham
function bresenhamLine(x0, y0, x1, y1) {
  var deltaX = x1 - x0;
  var deltaY = y1 - y0;
  var deltaErr = abs(deltaY / deltaX);
  var error = 0;
  var y = y0;
  for (var x = x0; x <= x1; x++) {
    grid[x][y] = 1;
    error += deltaErr;
    if (error >= 0.5) {
      y += (deltaY > 0 ? 1 : -1);
      error -= 1;
    }
  }
}

{{< /p5-global-iframe */>}}
```
{{< hint warning >}}
Note that `p5` should be the name to be used for the sketch object variable.
{{< /hint >}}
{{< /details >}}

### **Descripción**

Para la computación gráfica, un algoritmo para dibujar lineas consiste en aproximar un segmento de klinea en un medio discreto, como las pantallas que utilizan pixeles para mostrar una imagen.

<div align = "center">

{{< p5-global-iframe id="Algoritmo dibujo de líneas" width="655" height="505" >}}

var grid;
var res = 5, tam = 1;
var rows, cols;
var pos;
var vel;

//para crear la matriz del lienzo
function Array2D(rows, cols) {
  var arr = new Array(rows);
  for (var i = 0; i < rows; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}

function setup() {
  createCanvas(640, 480);

  //botones para definir el tamaño de la cuadrícula
  bPeq = createButton('Pequeña');
  bPeq.position(500, 25);
  bPeq.mousePressed(peq)

  bMed = createButton('Mediana');
  bMed.position(500, 60);
  bMed.mousePressed(med)

  bGran = createButton('Grande');
  bGran.position(500, 95);
  bGran.mousePressed(gran)

  dibujarCuadricula()
}

function dibujarCuadricula(){
  rows = width / res;
  cols = height / res;

  //crear y llenar la matriz del lienzo
  grid = Array2D(rows, cols);
  for (var x = 0; x < rows; x++) {
    for (var y = 0; y < cols; y++) {
      grid[x][y] = 0;
    }
  }
  pos = createVector(0, 0);
  vel = createVector(3, 5);  
}

function peq(){
  tam = 2;
  res = 2;
  dibujarCuadricula()
}

function med(){
  tam = 1;
  res = 5;
  dibujarCuadricula()
}

function gran(){
  tam = 3;
  res = 8;
  dibujarCuadricula() 
}

function draw() {
  background(255);

  //poner la matriz en blanco
  for (var x = 0; x < rows; x++) {
    for (var y = 0; y < cols; y++) {
      grid[x][y] = 0;
    }
  }

  function num() {
    return Math.floor(Math.random() * 256);
  }

  //llamar la función del algortimo de bresenham con la posición del mouse
  bresenhamLine(mouseX, mouseY, (width - 1) / res, (height - 1) / res);
  col1 = num()
  col2 = num()
  col3 = num()
  for (var x = 0; x < rows; x++) {
    for (var y = 0; y < cols; y++) {
      var px = x * res;
      var py = y * res;
      stroke(0);
      strokeWeight(res / 20);

      //pintar en negro los puntos de la línea
      if (grid[x][y] == 1) {
        fill(col1, col2, col3);
      } else {
        noFill();
      }
      square(px, py, res);
    }
  }
  noLoop()

  //dibujar recuadro que enmarca de la animación
  fill(255)
  rect(380, 51, 100, 30);
  
  //texto para indicar el tamaño de la cuadrícula
  textSize(12);
  fill(0)
  text('Cuadrícula', 400, 70)

  //recuadros de la sección para dibujar la línea
  strokeWeight(2)
  noFill()
  rect(1, 1, 638, 478);

  if(tam == 1)
    rect(1, 1, 125, 95);
  if(tam == 2)
    rect(1, 1, 320, 240);
  if(tam == 3)
    rect(1, 1, 80, 62);
}

//al hacer clic, se corre el algoritmo de dibujo
function mousePressed() {
  loop()
}

//algoritmo de Bresenham
function bresenhamLine(x0, y0, x1, y1) {
  var deltaX = x1 - x0;
  var deltaY = y1 - y0;
  var deltaErr = abs(deltaY / deltaX);
  var error = 0;
  var y = y0;
  for (var x = x0; x <= x1; x++) {
    grid[x][y] = 1;
    error += deltaErr;
    if (error >= 0.5) {
      y += (deltaY > 0 ? 1 : -1);
      error -= 1;
    }
  }
}

{{< /p5-global-iframe >}}

</div>

**Nota:** El recuadro de la esquina superior izquierda es la representación a escala de la zona de la animación de donde va a ir la línea.

### **Algoritmo de línea de Bresenham**
El algoritmo utilizado para la generación de la imagen previa es el algoritmo de Bresenham que determina los puntos que deben ser seleccionados en una representación n-dimensional para lograr una aproximación cercana a una linea recta entre dos puntos.

Usa solamente: 
- Suma de enteros
- Resta
- Cambio de bits

A pesar de la existencia de otros algoritmos que tienen otros acercamientos, diferentes capacidades y tecnologías, el algoritmo de Bresenham se mantiene relevante debido a su simpleza y velocidad.

Es ampliamente usado e implementado en varias cosas, sobretodo en procesadores graficos y tarjetas graficas, ya sea por firmware o hardware.

