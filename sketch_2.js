let puffin;
let salamandra;
let svist;
let button;
let canvas;

let animalName = 'Puffin';
let animal = puffin;

function preload() {

    puffin = loadImage('images/puffin.jpg');
    salamandra = loadImage('images/salamandra.jpg');
    svist = loadImage('images/svist.jpg');

}

function setup() {

    canvas = createCanvas(400, 300);
    background(100);
    
    image(puffin, 0, 0, width, height - 40);
    
    fill(255);
    textSize(16);
    text('Puffin', 10, height - 15);
    
    buttonPuffin = createButton("Puffin");
    buttonSalamandra = createButton("Salamandra");
    buttonSvist = createButton("Svist");
    
    buttonPuffin.mouseClicked(buttonPuffinPressed);
    buttonSalamandra.mouseClicked(buttonSalamandraPressed);
    buttonSvist.mouseClicked(buttonSvistPressed);
    

}

function draw() {

    //background(100);
    noStroke();
    //rect(mouseX, mouseY, 25, 75, 80);
    //fill(250,200,200,50);
    //ellipse(mouseX, mouseY, 25, 25);
    //image(animal, 0, 0, width, height - 40);

}


// function mousePressed() {

//     background(100);
//     //fill(0);
//     rect(390, 50, 25, 75);
//     image(svist, 0, 0, width - 40, height - 40);
    
// }

function buttonPuffinPressed() {

    background(100);
    image(puffin, 0, 0, width, height - 40);
    text('Puffin', 10, height - 15);
    
}

function buttonSalamandraPressed() {

    background(100);
    image(salamandra, 0, 0, width, height - 40);
    text('Salamandra', 10, height - 15);

    
}

function buttonSvistPressed() {

    background(100);
    image(svist, 0, 0, width, height - 40);
    text('Svist', 10, height - 15);
       
}


