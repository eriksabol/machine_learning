
let mobilenet;

let puffin;

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

        let namelabel = results[0].label;
        let nameConfidence = results[0].confidence;
        fill(255);
        textSize(16);
        text(namelabel, 10, height - 5);
        text(nameConfidence, 10, height - 21);

    }


}

function imageReady() {

    image(puffin, 0, 0, width, height - 40);
}

function setup() {

    createCanvas(640, 520);
    background(0)

    puffin = createImg('images/salamandra.jpg', imageReady);
    puffin.hide();

    mobilenet = ml5.imageClassifier('MobileNet', modelReady);

}