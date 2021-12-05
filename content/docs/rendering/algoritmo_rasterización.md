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

<br>

## **Algoritmo dibujo de líneas**

{{< details title="p5-global-iframe markdown" open=false >}}
```js
{{</* p5-global-iframe id="Algoritmo dibujo de líneas" width="655" height="505" >}}

var grid;
var res = 5;
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

function draw() {
  background(255);

  //poner la matriz en blanco
  for (var x = 0; x < rows; x++) {
    for (var y = 0; y < cols; y++) {
      grid[x][y] = 0;
    }
  }

  //llamr la función del algortimo con la posición del mouse
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

  //recuadros de la sección para dibujar la línea
  strokeWeight(2)
  noFill()
  rect(1, 1, 125, 95);
  rect(1, 1, 638, 478);
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

https://en.wikipedia.org/wiki/Line_drawing_algorithm

usando el algoritmo de línea de Bresenham

https://en.wikipedia.org/wiki/Bresenham%27s_line_algorithm

<div align = "center">

{{< p5-global-iframe id="Algoritmo dibujo de líneas" width="655" height="505" >}}

var grid;
var res = 5;
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

function draw() {
  background(255);

  //poner la matriz en blanco
  for (var x = 0; x < rows; x++) {
    for (var y = 0; y < cols; y++) {
      grid[x][y] = 0;
    }
  }

  //llamr la función del algortimo con la posición del mouse
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

  //recuadros de la sección para dibujar la línea
  strokeWeight(2)
  noFill()
  rect(1, 1, 125, 95);
  rect(1, 1, 638, 478);
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