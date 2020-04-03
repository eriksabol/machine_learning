
var circle1 = {

    x: 0,
    y: 0,
    diameter: 0,
    r: 250,
    g: 132,
    b: 250

};

var circle2 = {

    x: 600,
    y: 400,
    diameter: 200,
    r: 250,
    g: 200,
    b: 200

};


function setup() {

    canvas = createCanvas(600, 400);

}

function draw() {

    // fill(circle1.r, circle1.g, circle1.b);
    // ellipse(circle1.x, circle1.y, circle1.diameter, circle1.diameter);

    // circle1.x = circle1.x + 1;
    // circle1.y = circle1.y + 0.5;
    // circle1.diameter = circle1.diameter + 0.2;

    // fill(circle2.r, circle2.g, circle2.b);
    // ellipse(circle2.x, circle2.y, circle2.diameter, circle2.diameter);
    // circle2.x = circle2.x - 1;
    // circle2.y = circle2.y - 0.5;
    // circle2.diameter = circle2.diameter - 0.2;

    r = map(mouseY, 0, 400, 0, 255);
    g = map(mouseX, 0, 600, 255, 0);
    b = map(mouseX, 0, 600, 0, 255);
    
    canvas.mouseClicked(showRGB);

    background(r, g, b);
    fill(200);
    ellipse(mouseX, mouseY, 25, 25);

}

function showRGB() {

    console.log(round(r), round(g), round(b));
}