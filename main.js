nose_x=0;
nose_y=0;
difference=0;
right_wrist_x=0;
left_wrist_x=0;

function setup()
{
canvas=createCanvas(400,400);
canvas.position(1070,150);
video=createCapture(VIDEO);
video.size(550,500);
PoseNet=ml5.poseNet(video,modelLoaded);
PoseNet.on("pose",gotPoses);
image= loadImage("th.jpg");
}

function draw()
{
 background("Gray");
 document.getElementById("square_sides").innerHTML="<p>Width and height of the name will be  " + difference + "  px</p>";
 square(image,nose_x,nose_y,left_wrist_x,right_wrist_x,difference);

}

function gotPoses(results)
{
  if (results.length > 0)
  {
    console.log(results);
    nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    console.log("Nose X =" + nose_x);
    console.log("Nose Y =" + nose_y);

    left_wrist_x=results[0].pose.leftWrist.x;
    right_wrist_x=results[0].pose.rightWrist.x;
    difference=floor(left_wrist_x-right_wrist_x);

    console.log("Left Wrist X =" + left_wrist_x);
    console.log("Right Wrist X =" + right_wrist_x);
  }
}

function modelLoaded()
{
    console.log("PoseNet Initiated!");
}