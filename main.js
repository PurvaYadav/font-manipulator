noseX = 0;
noseY = 0;
difference =0;
rightWristX =0;
leftWristX =0;

function setup() {
    video = createCapture(VIDEO);
    video.size(450,400);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' ,gotPoses);
}

function modelLoaded() {
    console.log('PoseNet is Initialised');
}

function draw() {
    background('#96979A');
    document.getElementById("text_side").innerHTML = "Width And Height Of The Text Will Be = "+difference+"px";
    fill('#F90099');
    stroke('#F90099');
    text('Text',noseX ,noseY,difference); 
}

function gotPoses(results) 
{
    if (results.length>0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+noseX+ "noseY"+noseY);
        
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX); 
        
        console.log("leftWristX ="+leftWristX+ "rightWristX ="+rightWristX+ "difference =" +difference);
    }
}