## Juan Sebastian Reina

Estudiante de novena matricula, conocimiento de algunas funcionalidades de la libreria OpenCV para manipulacion de imagenes respecto a computacion visual.

### Pasatiempos
Tocar la guitarra, videojuegos retro, resolver problemas de programacion y el futbol freestyle

### Experiencias con los lenguajes usados en la materia

Conocimiento en el lenguaje Java uso de librerias como javaFX y swing,y muy poco de Javascript.

## **Ilusión de Movimiento Periferico**

Esta ilusion se basa en la impresion del movimiento aparente en espacios perifericos de vista, esta apoyada en el uso de colores claros y oscuros.

<p align="center">
  <img src="../peripheralDriftIlussion.jpg">
</p>

## **Programa Visual de ejemplo:**

<br/>

{{< details title="p5-global-iframe markdown" open=false >}}
```js
{{</* p5-global-iframe id="Dynamic Kanizsa Illusion" width="625" height="625" >}}

  let d = 5;
function setup() {
  createCanvas(1000, 1000);
  colorMode(RGB,1);
}

function draw() {
  background(0,220,0);
  let theta = 0.0;
  for(let i = 50; i < 1000-20; i += 70){
    for(let j = 50; j < 1000-20; j += 70){
      drawCircles(i,j,color(0,0,1),50,theta);
      theta += 0.125;
    }
  }
}

function drawCircles(x,y,tint,diameter,theta){
  push();
  noStroke();
  fill(color(0,0,0));
  circle(x-d*cos(theta),y-d*sin(theta),diameter);
  pop();
  push();
  noStroke();
  fill(color(1,1,1));
  circle(x+d*cos(theta),y+d*sin(theta),diameter);
  pop();
  push();
  noStroke();
  fill(tint);
  circle(x,y,diameter);
  pop();
}

{{< /p5-global-iframe */>}}
```
{{< hint warning >}}
Note that `p5` should be the name to be used for the sketch object variable.
{{< /hint >}}
{{< /details >}}

<br/>

<div align = "center">

{{< p5-global-iframe id="Dynamic Kanizsa Illusion" width="420" height="430" >}}

  let d = 5;
function setup() {
  createCanvas(1000, 1000);
  colorMode(RGB,1);
}

function draw() {
  background(0,220,0);
  let theta = 0.0;
  for(let i = 50; i < 1000-20; i += 70){
    for(let j = 50; j < 1000-20; j += 70){
      drawCircles(i,j,color(0,0,1),50,theta);
      theta += 0.125;
    }
  }
}

function drawCircles(x,y,tint,diameter,theta){
  push();
  noStroke();
  fill(color(0,0,0));
  circle(x-d*cos(theta),y-d*sin(theta),diameter);
  pop();
  push();
  noStroke();
  fill(color(1,1,1));
  circle(x+d*cos(theta),y+d*sin(theta),diameter);
  pop();
  push();
  noStroke();
  fill(tint);
  circle(x,y,diameter);
  pop();
}

{{< /p5-global-iframe >}}
