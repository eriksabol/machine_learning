
let mobilenet;

let puffin;
let salamandra;
let svist;

let nameLabel = 'Loading ';
let nameConfidence = 'Loading';

function preload() {

    puffin = loadImage('images/puffin.jpg');
    salamandra = loadImage('images/salamandra.jpg');
    svist = loadImage('images/svist.jpg');
    kamzik = loadImage('images/kamzik.jpg');

}

function setup() {

    canvas = createCanvas(640, 520);
    background(0);

    image(puffin, 0, 0, width, height - 40);

    button1 = createButton('Svist');
    button1.mousePressed(changeSvistImage);

    button2 = createButton('Salamandra');
    button2.mousePressed(changeSalamandraImage);

    button3 = createButton('Puffin');
    button3.mousePressed(changePuffinImage);

    button4 = createButton('Kamzik');
    button4.mousePressed(changeKamzikImage);

    fill(255);
    textSize(16);

    mobilenet = ml5.imageClassifier('MobileNet', modelReady);


}

function draw() {
    
    //background(0);
    //image(puffin, 0, 0, width, height - 40);
    //text(nameLabel, 10, height - 5);
    //text(nameConfidence, 10, height - 21);

}

function modelReady() {

    console.log('Model is ready!!!');
    mobilenet.predict(puffin, gotResults);
    
}

function gotResults(error, results) {

    if(error) {

        console.error(error)
    }

    else {

        console.log(results);

        nameLabel = results[0].label;
        nameConfidence = results[0].confidence;

        text(nameLabel, 10, height - 5);
        text(nameConfidence, 10, height - 21);

    }

}

function changeSvistImage() {

    background(0);
    image(svist, 0, 0, width, height - 40);
    mobilenet.predict(svist, gotResults);
}


function changeSalamandraImage() {

    background(0);
    image(salamandra, 0, 0, width, height - 40);
    mobilenet.predict(salamandra, gotResults);

}

function changePuffinImage() {

    background(0);
    image(puffin, 0, 0, width, height - 40);
    mobilenet.predict(puffin, gotResults);

}

function changeKamzikImage() {

    background(0);
    image(kamzik, 0, 0, width, height - 40);
    mobilenet.predict(kamzik, gotResults);

}

