
speedX = 3;
speedY = 3;

var spot = {

    x: 100,
    y: 50

};

var spot1 = {

    x: 100,
    y: 50

};

var colour = {

    r: 255,
    g: 125,
    b: 178

};


function setup() {

    canvas = createCanvas(600, 400);
    background(255);

}

function draw() {

    background(125);
    noStroke();

    fill(colour.r, colour.g, colour.b, 200);
    ellipse(spot.x, spot.y, 25, 25);
    ellipse(spot1.x, spot1.y, 25, 25);
    

    
    if (spot.y >= height || spot.y <= 0) {

        speedY = speedY * -1;

    }

    else if (spot.x >= width || spot.x <= 0) {

        speedX = speedX * -1;

    }

    else {

        speedX = speedX;
        speedY = speedY;

    }


    spot.x = spot.x + speedX;
    spot.y = spot.y + speedY;
    console.log(spot.x, spot.y);

    canvas.mouseClicked(restartBall);

}

function restartBall() {

    spot.x = random(0, width);
    spot.y = random(0, height);

}
