// Variables
let imageCells;
let pg;
let mosaic;
let video_src;
let debugging;
let cols;

// User Interface
let resolution;
let sel;
let video_on;
let p;

const SAMPLE_RES = 30;

function preload() {
    video_src = createVideo(['/cv/sketches/fingers.mov']);
    video_src.hide();

    mosaic = readShader('/cv/sketches/ui-shader.frag');

    p = [];
    for (let i = 1; i <= 6; i++) {
        p.push(loadImage(`https://picsum.photos/50?random=${i+1}`));
        //p.push(loadImage('/cv/sketches/pictures/i0'+i+'.jpg'));
    }
    b = [];
    for (let i = 1; i <= 6; i++) {
        //  p.push(loadImage(`https://picsum.photos/50?random=${i+1}`));
        b.push(loadImage('/cv/sketches/pictures/i0' + i + '.jpg'));
    }
}

function setup() {
    createCanvas(650, 650, WEBGL);
    colorMode(RGB, 1);
    imageCells = createQuadrille(p);
    textureMode(NORMAL);
    noStroke();
    shader(mosaic);
    sel = createSelect();
    sel.position(10, 125);
    sel.option('Keys');
    sel.option('Symbols');
    sel.selected('Symbols');

    sel.changed(() => {
        mosaic.setUniform('debug', sel.value() === 'Keys');
        mosaic.setUniform('color_on', false);
    });

    video_on = createCheckbox('Video', false);
    video_on.style('color', 'magenta');
    video_on.changed(() => {
        if (video_on.checked()) {
            mosaic.setUniform('source', video_src);
            video_src.loop();
        } else {
            mosaic.setUniform('source', random(p));
            video_src.pause();
        }
    });
    video_on.position(10, 80);
    mosaic.setUniform('source', random(b));
    resolution = createSlider(10, 200, SAMPLE_RES, 1);
    resolution.position(10, 100);
    resolution.style('width', '80px');
    resolution.input(() => {
        mosaic.setUniform('resolution', resolution.value());
    });

    mosaic.setUniform('resolution', resolution.value());
    pg = createGraphics(SAMPLE_RES * imageCells.width, SAMPLE_RES);

    mosaic.setUniform('cols', imageCells.width);
    sample();
}

function keyPressed() {
    if (key === 'r' && !video_on.checked()) {
        mosaic.setUniform('source', random(p));
    }
}

function sample() {
    if (pg.width !== SAMPLE_RES * imageCells.width) {
        pg = createGraphics(SAMPLE_RES * imageCells.width, SAMPLE_RES);
        mosaic.setUniform('cols', imageCells.width);
    }

    imageCells.sort({ ascending: true, cellLength: SAMPLE_RES });
    drawQuadrille(imageCells, {
        graphics: pg,
        cellLength: SAMPLE_RES,
        outlineWeight: 0,
    });
    mosaic.setUniform('palette', pg);
}

function draw() {
    cover({ texture: true });
}

function windowResided() {
    resizeCanvas(windowWidth, windowHeight);
}