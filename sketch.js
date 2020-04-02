
let mobilenet;

let puffin;
let salamandra;
let svist;
let nameLabel = '';
let nameConfidence = '';

function preload() {

    puffin = createImg('images/puffin.jpg', 'puffin');
    salamandra = createImg('images/salamandra.jpg', 'salamandra');
    svist = createImg('images/svist.jpg', 'svist');

    puffin.hide();
    salamandra.hide();
    svist.hide();

}

function setup() {

    createCanvas(640, 520);
    background(0);

    image(puffin, 0, 0, width, height - 40);


    button = createButton('Svist');

    button.mousePressed(changeImage);

    mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}

function draw() {
    
    background(0);
    fill(255);
    textSize(16);
    text(nameLabel, 10, height - 5);
    text(nameConfidence, 10, height - 21);

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

    }

}

function imageReady2() {

    
    image(svist, 0, 0, width, height - 40);
    
    console.log("clicking");
}

function changeImage() {

    
    image(salamandra, 0, 0, width, height - 40);
    console.log("changing image");
    mobilenet.predict(salamandra, gotResults);

}
