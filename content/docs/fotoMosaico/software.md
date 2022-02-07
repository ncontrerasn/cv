## **Software Rendering**
Es el proceso de generar una imagen a partir de un modelo por medio de software, lo que significa que no necesita ningún tipo de hardware para lograr la imagen.

Esta metodología es ampliamente utilizada, ya sea en simuladores, videojuegos, películas y más cosas, lo que permite a las personas tener varias opciones para lograr mostrar el contenido deseado sin tener que invertir en hardware.

Para este método, existen dos formas de render que son:

- Pre-renderizado: Utilizado principalmente en las películas, pues se aprovecha que la limitación de hardware no es un obstáculo puesto que se muestra el resultado más no la producción.
- Renderizado en tiempo real: Enfocado sobre todo en el rendimiento, trata de utilizar ilusiones para lograr su cometido sin utilizar tantos recursos.

Uno de los beneficios del este tipo de renderización es la no dependencia del hardware en caso de que estos fallen por alguna condición física o la amplia cantidad de paquetes que sirven para este fin, como SwiftShadder o WARP.

Desafortunadamente, el rendering tiene limitaciones, como el hecho de que al usar la CPU no tiene todo ese hardware para ese proceso si no que tiene que compartir esos recursos, logrando que sea más lento la renderización. A su vez, está la falta de tecnologías en CPU como RayTracing.

<div align = "center">

{{< p5-global-iframe id="Dynamic Kanizsa Illusion" width="800" height="800" >}}

  let img;
 let img2;
 function preload(){
   img = loadImage('/cv/docs/fotoMosaico/imgSW/torre.jpg');   
}
 function setup() {
   createCanvas(1000, 706);
   image(img, 0, 0,width,height);
 }

function draw(){
   img.resize(1000,706);
}

let imgColor;
let Rimgs = new Array(20);
let Bimgs = new Array(20);
let Gimgs = new Array(20);
let Yimgs = new Array(20);
let Grayimgs = new Array(20);
let total = 0;
//CARACTERISTICAS DE LA IMAGEN PRINCIPAL
let MainImgName = "londres";
let MainImgX = 1000;
let MainImgY = 666;
let pixelSize = 5;
let pixel;
let slider;
let showPixel;

//FUNCION PARA RETORNAR EL INDICE DE LA IMAGEN A UTILIZAR SEGUN SU BRILLO
 function brightlevel(S) {
  if (S<0.05){
    return 20;
  }
  else if (S<0.14){
    return 19;
  }
  else if (S<0.23){
    return 18;
  }
  else if (S<0.32){
    return 17;
  }
  else if (S<0.41){
    return 16;
  }
  else if (S<0.5){
    return 15;
  }
  else if (S<0.59){
    return 14;
  }
  else if (S<0.68){
    return 13;
  }
  else if (S<0.77){
    return 12;
  }
  else if (S<0.86){
    return 11;
  }
  else if (S<0.95){
    return 10;
  }
  else if (S<1.04){
    return 9;
  }
  else if (S<1.13){
    return 8;
  }
  else if (S<1.22){
    return 7;
  }
  else if (S<1.31){
    return 6;
  }
  else if (S<1.4){
    return 5;
  }
  else if (S<1.49){
    return 4;
  }
  else if (S<1.58){
    return 3;
  }
  else if (S<1.67){
    return 2;
  }
  else if (S<=1.76){
    return 1;
  }
  else{
    return 100;
  }
}

function preload(){
  //SE CARGAN LAS IMAGENES RGB
  for (let i=0; i<20; i++){
    Rimgs[i] = loadImage("/cv/docs/fotoMosaico/imgSW/red"+(i+1)+".jpg");
    Gimgs[i] = loadImage("/cv/docs/fotoMosaico/imgSW/green"+(i+1)+".jpg");
    Bimgs[i] = loadImage("/cv/docs/fotoMosaico/imgSW/blue"+(i+1)+".jpg");
    Yimgs[i] = loadImage("/cv/docs/fotoMosaico/imgSW/yellowOrange"+(i+1)+".jpg");
    Grayimgs[i] = loadImage("/cv/docs/fotoMosaico/imgSW/gray"+(i+1)+".jpg");
  }
  //SE CARGA LA IMAGEN CON LA QUE SE TRABAJA 2 VECES PARA TENER UNA VERSION ORIGINAL Y OTRA A ESCALA DE GRISES
  imgColor = loadImage('/cv/docs/fotoMosaico/imgSW/torre.jpg');   
}
 
function setup() {
  createCanvas(1000,706);
  background(255);
  fill(0);

  //Slider Config
  slider = createSlider(1,100,5);
  slider.position(30, MainImgY+10);
  slider.style('width', '200px');
  showPixel = createElement('h2', 'px '+pixelSize);
  showPixel.position(0, MainImgY);
  
  //SE CARGA LA IMAGEN
  imgColor.loadPixels();
  
  let i = 0;
  
  //SE HALLA EL PROMEDIO DE LOS VALORES RGB PARA EL BRILLO
  for (let y = 0; y < imgColor.height; y += 1) {
    for (let x = 0; x < imgColor.width; x += 1) {
      pixel = imgColor.pixels[(y * imgColor.width + x)];
      total = total + brightness(pixel);
      i++;
    }
  }
  total = total / i;

}
  
function draw(){
  
  background(255);
  pixelSize = slider.value();
  showPixel.html('px '+pixelSize);

  imgColor.resize(MainImgX,MainImgY);
  
  for (let i=0; i<20; i++){
    Rimgs[i].resize(pixelSize,pixelSize);
    Gimgs[i].resize(pixelSize,pixelSize);
    Bimgs[i].resize(pixelSize,pixelSize);
    Yimgs[i].resize(pixelSize,pixelSize);
    Grayimgs[i].resize(pixelSize,pixelSize);
  }
  
 //SE RECORRE LA IMAGEN
  for (let y = 0; y < imgColor.height; y += pixelSize) {
    for (let x = 0; x < imgColor.width; x += pixelSize) {
        pixel = imgColor.get(x,y);
        let S=brightness(pixel);
        S = S/total;
        //CON LA IMAGEN A COLOR VERIFICAMOS EL RGB DEL PIXEL
        let r = red(pixel);
        let g = green(pixel);
        let b = blue(pixel);        
        //LLAMAMOS A LA FUNCION PARA EL INDICE CORRESPONDIENTE EL BRILLO
        let bright = brightlevel(S)-1;
        if(r==255 && b==255 && g==255){
         image(Grayimgs[0],x,y);
        }
        //SI RETORNA 99 ES BLANCO ASI QUE SE USA LA IMAGEN BLANCA DEL ELSE
        else if(bright!=99){
          //SE VERIFICA EL COLOR MAYORITARIO Y SE APLICA UNA IMAGEN CON ESE COLOR
          if (r>=g && g>=125 && r>b){
            image(Yimgs[bright],x,y);
          }else if (r>b && r>g){
            image(Rimgs[bright],x,y);
          }else if(b>r && b>g){
            image(Bimgs[bright],x,y);
          }else if(g>b && g>r){
            image(Gimgs[bright],x,y);
          }else{
            image(Grayimgs[bright],x,y);
          }
        }else{
          image(Grayimgs[0],x,y);
        }
    }
  }
}

{{< /p5-global-iframe >}}

</div>

Podemos concluir que el uso de renderizado por software es bastante amplio y muy util, que si bien tiene limitaciones, permite que sea más accesible para el publico el acercamiento a este tipo de render, pero hay que tener muy claro las limitaciones de rendimiento que tiene, por lo que su funcionalidad es inversamente proporcional al tamaño o exigencia del proyecto.

### **Fuentes**

- https://en.wikipedia.org/wiki/Software_rendering
- https://www.omnisci.com/technical-glossary/gpu-rendering