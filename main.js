noseX = 0
noseY = 0
function preload(){
  mustache = loadImage("https://i.postimg.cc/W3dG66qq/mustache.png")
}
function setup(){
    canvas = createCanvas(395, 300);
    canvas.center()
    video = createCapture(VIDEO);
    video.size(395, 300)
    video.hide();

    PoseNET = ml5.poseNet(video, modelLoaded);
    function modelLoaded(){
        console.log("PoseNET Initialized!");
    }
    PoseNET.on('pose', gotPoses)
    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("nose x =" + noseX);
            console.log("nose y =" + noseY);
        }
    }
}
function draw(){
    image(video, 0, 0, 395, 300);
    image(mustache, noseX, noseY, 30, 30);
}
function take_snapshot(){
    file = document.getElementById("file_name").value;
    save(file);
}
