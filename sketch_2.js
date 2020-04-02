let puffin;
let salamandra;
let svist;
let button;
let canvas;

function setup() {

    canvas = createCanvas(400, 300);
    background(100);
    
    image(puffin, 0, 0, width, height - 40);
    
    buttonPuffin = createButton("Puffin");
    buttonSalamandra = createButton("Salamandra");
    buttonSvist = createButton("Svist");
    buttonPuffin.mouseClicked(buttonPuffinPressed);
    buttonSalamandra.mouseClicked(buttonSalamandraPressed);
    buttonSvist.mouseClicked(buttonSvistPressed);
    

}

function draw() {

    //background(100);
    //rect(370, 50, 25, 75, 80);
    noStroke();
    //fill(250,200,200,50);
    ellipse(mouseX, mouseY, 25, 25);
    //image(puffin, 0, 0, width - 40, height - 40);

}

function preload() {

    puffin = loadImage('images/puffin.jpg');
    salamandra = loadImage('images/salamandra.jpg');
    svist = loadImage('images/svist.jpg');

}

// function mousePressed() {

//     background(100);
//     //fill(0);
//     rect(390, 50, 25, 75);
//     image(svist, 0, 0, width - 40, height - 40);
    
// }

function buttonPuffinPressed() {

    background(100);
    //fill(0);
    image(puffin, 0, 0, width, height - 40);
    
}

function buttonSalamandraPressed() {

    background(100);
    //fill(0);
    image(salamandra, 0, 0, width, height - 40);
    
}

function buttonSvistPressed() {

    background(100);
    //fill(0);
    image(svist, 0, 0, width, height - 40);
    
}


