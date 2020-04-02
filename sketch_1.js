
let mobilenet;

let video;
let nameLabel = '';
let nameConfidence = '';

function modelReady() {

    console.log('Model is ready!!!');
    mobilenet.predict(gotResults);
}


function gotResults(error, results) {

    if(error) {

        console.error(error)
    }

    else {

        // console.log(results);

        nameLabel = results[0].label;
        nameConfidence = results[0].confidence;

        mobilenet.predict(gotResults);

    }


}

// function imageReady() {

//     image(puffin, 0, 0, width, height - 40);
// }

function setup() {

    createCanvas(640, 520);

    video = createCapture(VIDEO);
    video.hide();

    mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);

}

function draw() {
    
    background(0);
    image(video, 0, 0);

    fill(255);
    textSize(16);
    text(nameConfidence, 10, height - 5);
    text(nameLabel, 10, height - 21);
}