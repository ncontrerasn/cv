## Sergio Gonzalez

Estudiante de novena matrícula. Cursando el semestre final de materias. El siguiente será como pasante. 

### **Pasatiempos**
Tocar el piano, jugar Ultimate y bailar cuando es posible. Odio estar encerrado y me gusta salir con amigos. 

### **Experiencias con los leguajes usados en la materia**

Gran conocimiento en Java como lenguaje de programacion de Backend. Conocimiento en JavaScript en el uso de frameworks de desarrollo web. Manejo del motor gráfico Unity 3D con librerias como Vuforia para la realida Aumentada. Poco conocimineto en otros aspectos de los gráficos. 

## **Ilusión de Café Wall**

La ilusión de Café Wall es una ilusión de distorsión en la que las líneas paralelas de una figura similar a un tablero de ajedrez que consta únicamente de elementos de líneas paralelas y perpendiculares parecen converger en filas alternas, creando una distorsión en cuña similar a la de la conocida ilusión de Zöllner. Gregory y Heard han formulado una explicación para la ilusión de Café Wall que se basa en el funcionamiento de un "mecanismo de bloqueo de bordes" en el sistema visual. Los resultados del presente experimento sugieren una explicación alternativa en la que la operación de inducción de brillo dentro de las regiones  del Café Wall produce una serie de 'trazas retorcidas' o elementos de línea inclinados similares a los de las figuras de Fraser o Zöllner. Se muestra que una serie de tales 'trazas retorcidas' es capaz por sí misma de producir una convergencia ilusoria como la del Café Wall. Las manipulaciones de la luminancia de regiones discretas en las líneas de mortero del Café Wall, diseñadas para aumentar o cancelar los efectos de la inducción de brillo en la producción de estos elementos de línea inclinada, logran mejorar o reducir, respectivamente, la distorsión en cuña de este ilusión visual. 

<br/>

{{< details title="p5-global-iframe markdown" open=false >}}
```js
{{</* p5-global-iframe id="Dynamic Kanizsa Illusion" width="600" height="500" >}}

  Idea base tomada de https://naziafakhruddin.medium.com/creating-illusions-in-p5-js-dynamic-kanizsa-illusion-part-4-af9fe72c5ec7

var colors = [];

function setup() {
  createCanvas(570, 470);
}

function draw() {
  background(255);
  x_jump = 55;
  y_jump = 55;
  stroke('grey');
  strokeWeight(3.3);

    for (var j = 0 ; j < 30; j++) {
      for (var i = 0; i < 30; i++) {
        if (j % 2 == 0) {
          fill(0);
        } else {
          fill(255);
        };if (i % 2 == 0) {
          fill(0);
        } else {
          fill(255);
        };
        if (j % 3 == 0){
          rect(i * x_jump - 10, j * y_jump, 80, 90);
        } else if (j % 2 == 0){
          rect(i * x_jump - 30, j * y_jump, 100, 60);
        } else {
          rect(i * x_jump - 50, j * y_jump, 90, 60);
        }
      }
    }


}
{{< /p5-global-iframe */>}}
```
{{< hint warning >}}
Note that `p5` should be the name to be used for the sketch object variable.
{{< /hint >}}
{{< /details >}}

<br/>

<div align = "center">

{{< p5-global-iframe id="Dynamic Kanizsa Illusion" width="600" height="500" >}}

  var colors = [];

function setup() {
  createCanvas(570, 470);
}

function draw() {
  background(255);
  x_jump = 55;
  y_jump = 55;
  stroke('grey');
  strokeWeight(3.3);

    for (var j = 0 ; j < 30; j++) {
      for (var i = 0; i < 30; i++) {
        if (j % 2 == 0) {
          fill(0);
        } else {
          fill(255);
        };if (i % 2 == 0) {
          fill(0);
        } else {
          fill(255);
        };
        if (j % 3 == 0){
          rect(i * x_jump - 10, j * y_jump, 80, 90);
        } else if (j % 2 == 0){
          rect(i * x_jump - 30, j * y_jump, 100, 60);
        } else {
          rect(i * x_jump - 50, j * y_jump, 90, 60);
        }
      }
    }


}

{{< /p5-global-iframe >}}


</div>



## **Historia**

Fue descrita por primera vez con el nombre de ilusión de la Guardería en 1898, y redescubierta en 1973 por Richard Gregory.1​2​ Según Gregory, este efecto fue observado por un miembro de su laboratorio, Steve Simpson, en los azulejos de la pared de una cafetería de la colina de Saint Michael, en Brístol (Reino Unido). Es una variante de la ilusión del tablero de ajedrez cambiado ideada por Hugo Münsterberg.3​ 




## **Rompiendo la ilusión**
 Para demostar con mayor aproximación el efecto visual, podemos comparar con la misma imagen pero esta vez sin desplazamiento alguno. Se aprecia que el efecto anteriormente mencionado no aparece
<br/>

{{< details title="p5-global-iframe markdown" open=false >}}
```js
{{</* p5-global-iframe id="Dynamic Kanizsa Illusion" width="600" height="500" >}}

  Idea base tomada de https://naziafakhruddin.medium.com/creating-illusions-in-p5-js-dynamic-kanizsa-illusion-part-4-af9fe72c5ec7

var colors = [];

function setup() {
  createCanvas(570, 470);
}

function draw() {
  background(255);
  x_jump = 55;
  y_jump = 55;
  stroke('grey');
  strokeWeight(3.3);

    for (var j = 0 ; j < 30; j++) {
      for (var i = 0; i < 30; i++) {
        if (j % 2 == 0) {
          fill(0);
        } else {
          fill(255);
        };if (i % 2 == 0) {
          fill(0);
        } else {
          fill(255);
        };
        if (j % 3 == 0){
          rect(i * x_jump, j * y_jump, 80, 90);
        } else if (j % 2 == 0){
          rect(i * x_jump, j * y_jump, 100, 60);
        } else {
          rect(i * x_jump, j * y_jump, 90, 60);
        }
      }
    }


}
{{< /p5-global-iframe */>}}
```
{{< hint warning >}}
Note that `p5` should be the name to be used for the sketch object variable.
{{< /hint >}}
{{< /details >}}

<br/>

<div align = "center">

{{< p5-global-iframe id="Dynamic Kanizsa Illusion" width="600" height="500" >}}

  var colors = [];

function setup() {

  createCanvas(570, 470);
}

function draw() {
  background(255);
  x_jump = 55;
  y_jump = 55;
  stroke('grey');
  strokeWeight(3.3);

    for (var j = 0 ; j < 30; j++) {
      for (var i = 0; i < 30; i++) {
        if (j % 2 == 0) {
          fill(0);
        } else {
          fill(255);
        };if (i % 2 == 0) {
          fill(0);
        } else {
          fill(255);
        };
        if (j % 3 == 0){
          rect(i * x_jump, j * y_jump, 80, 90);
        } else if (j % 2 == 0){
          rect(i * x_jump, j * y_jump, 100, 60);
        } else {
          rect(i * x_jump, j * y_jump, 90, 60);
        }
      }
    }


}

{{< /p5-global-iframe >}}


</div>

## **Aplicaciones**

### **Turismo**

La historia que hace parte de esta ilusión ha conseguido que su lugar de origen sea un atractivo de turismo para las personas. Podemos ver la pared original en la colina de Saint Michael, Bristol.
<div align="center">
  <img src="../cafe1.jpg">
</div>
 Adicionalmente otra arquitectura conocida por implementar la ilusión  queda en Melbourne Docklands.

<div align="center">
  <img src="../cafe2.jpg">
</div>

Esto significa que podemos aprovechar el deseo de las personas por conocer la historia sobre distintas ilusiones y usarlas en arquitecturas o sitios turisticos para incrementar el flujo de visitantes en nuestras ciudades o territorios. 

### **Neuropsicología**

Debido a que aún hay ciertas dudas entre los científicos sobre el efecto de esta ilusión sobre el cebrero, la ilusión de la pared del café ha ayudado a los neuropsicólogos a estudiar la forma en que el cerebro procesa la información visual. Se puede seguir investigando en esta área del conocimiento, más específicamente en el sistema nervioso y su comportamiento.

<p align="center">
  <img src="../neuro.jpg">
</p>