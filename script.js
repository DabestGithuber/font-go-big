noseX = 0;
noseY = 0;
difference = 0;
leftwristX = 0;
rightwristX = 0;


function preload() {

}

function setup() {
    canvas = createCanvas(800, 600);
    video = createCapture(VIDEO);
    canvas.position(700, 200);

    //PoseNet
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", getPoses)
}

function modelLoaded() {
    console.log("ml5 version: ", ml5.version);
    console.log("ML5 HAS LOADED");
}

function getPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("NOSE X= " + noseX + " NOSE Y= " + noseY);
        rightwristX = results[0].pose.rightWrist.x;
        leftwristX = results[0].pose.leftWrist.x;
        difference = Math.floor(leftwristX - rightwristX);
        console.log("RIGHT WRIST= " + rightwristX + " LEFT WRIST= " + leftwristX);

    }
}


function draw() {
    background('#969A97');
    textSize(difference);
    fill('#F90093');
    stroke('#F90093');
    text("FONT", noseX, noseY);
}