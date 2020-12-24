var nose_x , nose_y ;
function preload() {
 

}
function setup() {
canvas=createCanvas(400 , 400);
canvas.position(510, 200);
video=createCapture(VIDEO);
video.size(400 , 400);
video.hide();
posenet=ml5.poseNet(video , ModelLoaded);
posenet.on('pose' , gotPoses);

}

function draw() {
image(video , 0 , 0 , 400 , 400);
}
function ModelLoaded()
{
console.error("ModelLoaded");
}
function gotPoses(results)
{
console.log(results);
nose_x=results[0].pose.nose.x;
nose_y=results[0].pose.nose.y;
console.error(nose_x);
console.error(nose_y);
}
