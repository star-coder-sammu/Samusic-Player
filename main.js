song = "";
song2 = "";
song3 = "";

function preload()
{
    song = loadSound("inten.mp3");
	song2 = loadSound("music.mp3");
	song3 = loadSound("wrap.mp3");
}




































function setup() {
	canvas =  createCanvas(600, 500);
	canvas.center();

	video = createCapture(VIDEO);
	video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}