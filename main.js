var previous_result="";
function preload(){
    img = loadImage('water_bottle.jpg');
}
function setup() {
 
  classifier=ml5.imageClassifier("MobileNet", modelLoaded)
}
function draw(){
 
  classifier.classify(img,gotResult)
}
function modelLoaded(){
  console.log("Model IS loaded")
}
function gotResult(error,results){
if (error) {
  console.error(error)
} else {
  console.log(results[0].label)
document.getElementById("mobile").innerHTML=results[0].label
}
}
