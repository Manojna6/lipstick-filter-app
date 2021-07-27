ml=0;
noseX=0;
noseY=0;
function preload() {
    lipstick = loadImage("https://i.postimg.cc/NGxmYjsg/image.png");
}
function setup()
{
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400, 400);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPosed);
}
function draw() {
    image(video, 0,0,400,400)
    image(lipstick, noseX-25,noseY+4,60,60);
}
function take_snapshot() {
    
}
function modelLoaded()
{
    console.log("Posenet is initialized!")
}
function gotPosed(results)
{
    if(results.length > 0)
    {
        console.log(results)
        console.log("nose-x = "+results[0].pose.nose.x);
        console.log("nose-y = "+results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}
function take_snapshot()
{
    save("filter-lipstick.png")
}