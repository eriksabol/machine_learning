
var spot = {

    x: 100,
    y: 50

};

var colour = {

    r: 255,
    g: 0,
    b: 0

};


function setup() {

    canvas = createCanvas(600, 400);
    background(255);

}

function draw() {

    spot.x = random(0, width);
    spot.y = random(0, height);

    colour.r = random(100, 255);
    colour.g = random(100, 255);
    colour.b = random(100, 255);
    noStroke();

    fill(colour.r, colour.g, colour.b, 200);

    if (spot.x > width/2) {

        ellipse(spot.x, spot.y, 36, 36);

    }

    else {

        fill(255 - colour.r, 255 - colour.g, 255 - colour.b, 200);
        ellipse(spot.x, spot.y, 36, 36);

    }

    //ellipse(spot.x, spot.y, 36, 36);

    canvas.mouseClicked(resetBackground);

}


function resetBackground() {

    background(random(0, 100));

}