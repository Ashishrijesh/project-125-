difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position = (560, 150);
    PoseNet = ml5.poseNet(video, modelLoaded)
}
function modelLoaded() {
    console.log('PoseNet is Initialized!');
}


function gotPoses() {
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}


function draw()  {
background('FFE5B4')

textSize(difference);
fill('FF0000')
text('Peter, 50, 400');
}