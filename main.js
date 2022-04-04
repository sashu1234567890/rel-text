rightWristX = 0;
leftWristX = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO)
    video.size(550, 500)

    canvas = createCanvas(555, 550)
    canvas.position(560, 160)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPose)
}

function draw() {
    background("#00307d")
    textSize(difference)
    fill("red")
    text("Sashu", 100, 100)

    document.getElementById("text_side").innerHTML = "Size of the text = " + difference + "px"
}

function modelLoaded() {
    console.log("PoseNet is Intialized !")
}

function gotPose(result) {
    if (result > 0) {
        console.log(result)

        rightWristX = result[0].pose.rightWrist.x
        leftWristX = result[0].pose.leftWrist.x
        difference = floor(leftWristX - rightWristX);
    }
}