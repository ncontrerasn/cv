let ogLines = [];
let fnLines = [];


function setup() {
    createCanvas(600, 350);
    background(256);
  }
  
function draw() {
    backLines();
    //frontLines();

    console.log(ogLines);
}

function backLines(){
    
    a = -300;
    b = 0;

    ogLines.push(a);
    fnLines.push(b);

    for(let i = 0; i < 19; i++){       
        strokeWeight(12);
        line(a,-10,b,360);
        a += 75;
        b = a + 300;        
    }   
}

function frontLines(){
    
    strokeWeight(12);
    line(0,0,100,0);
}

/*function recta(form)
  {
  // se calcula la pendiente
  pendiente = (eval(form.y2.value) - eval(form.y1.value)) / (eval(form.x2.value) 
  - eval(form.x1.value));
  // se calcula la interseccion con el eje y
  interseccion = eval(form.y1.value) - pendiente*eval(form.x1.value);
  // se escribe la respuesta
  form.m.value = pendiente;
  form.b.value = interseccion;
  }*/