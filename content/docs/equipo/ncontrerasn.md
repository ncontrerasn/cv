## **Nicolás Contreras**

Estudainte de novena matrícula, con un fugaz acercamiento a la materia mediante Unity.

### **Pasatiempos**
- Ir al gimnasio.
- Cocinar.
- Escuchar música.
- Echar la siesta.

### **Experiencias con los lenguajes usados en la materia**

- Java y JavaScript para el desarrollo de aplicaciones web.
- Processing al realizar un proyecto de la asignatura Programación Orientada a Objetos.

### **Intereses**

1. Desarrollo de software.
2. Bases de datos.

## **Ilusión de Kanizsa**

El Triángulo de Kanizsa es una ilusión óptica descrita por primera vez por el psicólogo italiano Gaetano Kanizsa en 1955. En la figura se percibe un triángulo equilátero blanco, pero de hecho no existe ninguno. Este efecto es conocido como contorno subjetivo o ilusorio. También, este triángulo blanco inexistente parece ser más brillante que el área circundante pero, de hecho, tiene el mismo brillo del fondo.

<p align="center">
  <img src="../triangle.JPG">
</p>

Una de las tantas contribuciones de las ilusiones ópticas al campo científico, ha sido la de demostrar la discusión entre racionalismo y empirismo, nuestros sentidos no siempre son fiables y nuestra mente también puede hacer interpretaciones erróneas.

En este aspecto, la percepción juega un papel crucial, así como también es importante conocer la fisiología del ojo, dado que, en su estructura hay elementos encargados de transmitir información hacia nuestra mente, en donde luego haremos elucubraciones para tratar de comprender la realidad.

Una de las funciones fundamentales de la percepción visual, se encuentra el poder apreciar el contorno de un objeto, y a partir de allí deducir cuál es su forma.

### **Contornos ilusorios**

O contornos subjetivos son ilusiones ópticas que evocan la percepción de una era sin luminancia o cambio de color dentro del borde. El brillo ilusorio y su profundidad ordenados son frecuentemente acompañados de contornos ilusorios. Friedrich Schumann es a menudo acreditado con el descubrimiento de los contornos ilusorios alrededor de los principios del siglo veinte, sin embargo los contornos ilusorios son presentados en un arte de citar a las Edades Medias. La hoja Científica Americana de Gaetano Kanizsa escrita en 1976 marca el resurgimiento de interés en los contornos ilusorios por científicos de visión.

## **Ilusión de Kanizsa dinámica**

<br/>

{{< details title="p5-global-iframe markdown" open=false >}}
```js
{{</* p5-global-iframe id="Dynamic Kanizsa Illusion" width="625" height="625" >}}

  Idea base tomada de https://naziafakhruddin.medium.com/creating-illusions-in-p5-js-dynamic-kanizsa-illusion-part-4-af9fe72c5ec7

  let angle = 0;
  let PI = 3.14;
  let HALF_PI = PI / 2;
  let THIRD_PI = PI / 3;

  function setup() {
    createCanvas(400, 400);
  };

  function draw() {
    background(255);

    if(!mouseIsPressed){
      //cuadrado
      fill(137, 207, 240);
      stroke(0,0,0);
      strokeWeight(2);

      push();
      translate(50, 150);
      rotate(HALF_PI + angle);
      arc(0, 0, 80, 80, PI, HALF_PI);
      pop();

      push();
      strokeWeight(2);
      translate(150, 150);
      rotate(PI - angle);
      arc(0, 0, 80, 80, PI, HALF_PI);
      pop();

      push()
      strokeWeight(2);
      translate(150, 250);
      rotate(HALF_PI * 3 + angle);
      arc(0, 0, 80, 80, PI, HALF_PI);
      pop();

      push();
      strokeWeight(2);
      translate(50, 250);
      rotate(PI * 2 - angle);
      arc(0, 0, 80, 80, PI, HALF_PI);
      pop();

      //triángulo
      fill(255,192,203);

      push();
      strokeWeight(2);
      translate(300, 160);
      rotate(HALF_PI * 0.7 - angle);
      arc(0, 0, 80, 80, THIRD_PI, 2 * PI);
      pop();

      push();
      strokeWeight(2);
      translate(250, 250);
      rotate(HALF_PI * 3.32 - angle);
      arc(0, 0, 80, 80, THIRD_PI, 2 * PI);
      pop();

      push();
      strokeWeight(2);
      translate(350, 250);
      rotate(PI - angle);
      arc(0, 0, 80, 80, THIRD_PI, 2 * PI);
      pop();

      angle += 0.009;
    } 
    else{
      //cuadrado
      fill(137, 207, 240);
      stroke(0,0,0);
      strokeWeight(2);

      push();
      translate(50, 150);//izqierda arriba bien
      rotate(HALF_PI * 3 );
      arc(0, 0, 80, 80, PI, HALF_PI);
      pop();

      push();
      translate(50, 250);
      rotate(PI );
      arc(0, 0, 80, 80, PI, HALF_PI);
      pop();

      push();
      strokeWeight(2);
      translate(150, 250);//abajo derecha bien
      rotate(HALF_PI);
      arc(0, 0, 80, 80, PI, HALF_PI);
      pop();

      push();
      strokeWeight(2);
      translate(150, 150);//abajo
      rotate(PI * 2);
      arc(0, 0, 80, 80, PI, HALF_PI);
      pop();

      //triángulo
      fill(255,192,203);

      push();
      strokeWeight(2);
      translate(300, 160);
      rotate(HALF_PI * 0.7 );
      arc(0, 0, 80, 80, THIRD_PI, 2 * PI);
      pop();

      push();
      strokeWeight(2);
      translate(250, 250);
      rotate(HALF_PI * 3.32 );
      arc(0, 0, 80, 80, THIRD_PI, 2 * PI);
      pop();

      push();
      strokeWeight(2);
      translate(350, 250);
      rotate(PI);
      arc(0, 0, 80, 80, THIRD_PI, 2 * PI);
      pop();
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

{{< p5-global-iframe id="Dynamic Kanizsa Illusion" width="420" height="430" >}}

  let angle = 0;
  let PI = 3.14;
  let HALF_PI = PI / 2;
  let THIRD_PI = PI / 3;

  function setup() {
    createCanvas(400, 400);
  };

  function draw() {
    background(255);

    if(!mouseIsPressed){
      //cuadrado
      fill(137, 207, 240);
      stroke(0,0,0);
      strokeWeight(2);

      push();
      translate(50, 150);
      rotate(HALF_PI + angle);
      arc(0, 0, 80, 80, PI, HALF_PI);
      pop();

      push();
      strokeWeight(2);
      translate(150, 150);
      rotate(PI - angle);
      arc(0, 0, 80, 80, PI, HALF_PI);
      pop();

      push()
      strokeWeight(2);
      translate(150, 250);
      rotate(HALF_PI * 3 + angle);
      arc(0, 0, 80, 80, PI, HALF_PI);
      pop();

      push();
      strokeWeight(2);
      translate(50, 250);
      rotate(PI * 2 - angle);
      arc(0, 0, 80, 80, PI, HALF_PI);
      pop();

      //triángulo
      fill(255,192,203);

      push();
      strokeWeight(2);
      translate(300, 160);
      rotate(HALF_PI * 0.7 - angle);
      arc(0, 0, 80, 80, THIRD_PI, 2 * PI);
      pop();

      push();
      strokeWeight(2);
      translate(250, 250);
      rotate(HALF_PI * 3.32 - angle);
      arc(0, 0, 80, 80, THIRD_PI, 2 * PI);
      pop();

      push();
      strokeWeight(2);
      translate(350, 250);
      rotate(PI - angle);
      arc(0, 0, 80, 80, THIRD_PI, 2 * PI);
      pop();

      angle += 0.009;
    } 
    else{
      //cuadrado
      fill(137, 207, 240);
      stroke(0,0,0);
      strokeWeight(2);

      push();
      translate(50, 150);//izqierda arriba bien
      rotate(HALF_PI * 3 );
      arc(0, 0, 80, 80, PI, HALF_PI);
      pop();

      push();
      translate(50, 250);
      rotate(PI );
      arc(0, 0, 80, 80, PI, HALF_PI);
      pop();

      push();
      strokeWeight(2);
      translate(150, 250);//abajo derecha bien
      rotate(HALF_PI);
      arc(0, 0, 80, 80, PI, HALF_PI);
      pop();

      push();
      strokeWeight(2);
      translate(150, 150);//abajo
      rotate(PI * 2);
      arc(0, 0, 80, 80, PI, HALF_PI);
      pop();

      //triángulo
      fill(255,192,203);

      push();
      strokeWeight(2);
      translate(300, 160);
      rotate(HALF_PI * 0.7 );
      arc(0, 0, 80, 80, THIRD_PI, 2 * PI);
      pop();

      push();
      strokeWeight(2);
      translate(250, 250);
      rotate(HALF_PI * 3.32 );
      arc(0, 0, 80, 80, THIRD_PI, 2 * PI);
      pop();

      push();
      strokeWeight(2);
      translate(350, 250);
      rotate(PI);
      arc(0, 0, 80, 80, THIRD_PI, 2 * PI);
      pop();
    }
  }

{{< /p5-global-iframe >}}

**Nota:** Al presionar el clic izquierdo se detiene la animación para poder apreciar mejor la ilusión, la animación seguirá en movimiento una vez se deje de oprimir el botón. 
</div>

## **Aplicaciones**

### **Publicidad**

En este campo, se aprovecha este concepto en piezas muy importantes tales como los logos, no dejando a la vista del obeservador la idea completa que se quiere transmitir. El primer ejemplo es la C en el logo de Carrefour, y el segundo, es la vaca en la leche del logo de Alquería.

<div align="center">
  <img src="../logos.JPG">
</div>

### **Videojuegos**

Los desarrolladores pueden sacar provecho de este tipo de ilusiones enviando al jugador pistas sobre caminos ocultos alternos que pueden ser tomados para conocer zonas encubiertas de los mapas.

<p align="center">
  <img src="../juego.JPG">
</p>