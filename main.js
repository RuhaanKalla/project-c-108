Webcam.set({
    png_quality:90,
    width:350,
    height:300,
    image_format:"png"
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log("ml5 version:" + ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/MmSUeRdC4/model.json",modelLoaded);
function modelLoaded(){
    console.log("Model Loaded!")
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img , gotResults);
}

function gotResults(error , results){
if (error){
    console.log(error);
}
else{
    prediction_1 = results[0].label;
    prediction_2 =  results[1].label;
    document.getElementById("result_emotion_name").innerHTML =  results[0].label;
    document.getElementById("result_emotion_name2").innerHTML  = results[1].label;
    if(prediction_1 == "hand raise" ){
        document.getElementById("update_emoji").innerHTML ="&#9995";
    }
    if(prediction_1 == "victory" ){
        document.getElementById("update_emoji").innerHTML ="&#9996";
    }
    if(prediction_1 == "thumbs up" ){
        document.getElementById("update_emoji").innerHTML ="&#128077";
    }
    if(prediction_1 == "thumbs down" ){
        document.getElementById("update_emoji").innerHTML ="&#128078";
    }
    if(prediction_1 == "amazing" ){
        document.getElementById("update_emoji").innerHTML ="&#128076";
    }
    if(prediction_1 == "tick" ){
        document.getElementById("update_emoji").innerHTML ="&#10004";
    }
    if(prediction_1 == "fingers crossed" ){
        document.getElementById("update_emoji").innerHTML ="&#129310";
    }
    if(prediction_2 == "hand raise" ){
        document.getElementById("update_emoji2").innerHTML ="&#9995";
    }
    if(prediction_2 == "victory" ){
        document.getElementById("update_emoji2").innerHTML ="&#9996";
    }
    if(prediction_2 == "thumbs up" ){
        document.getElementById("update_emoji2").innerHTML ="&#128077";
    }
    if(prediction_2 == "thumbs down" ){
        document.getElementById("update_emoji2").innerHTML ="&#128078";
    }
    if(prediction_2 == "amazing" ){
        document.getElementById("update_emoji2").innerHTML ="&#128076";
    }
    if(prediction_2 == "tick" ){
        document.getElementById("update_emoji2").innerHTML ="&#10004";
    }
    if(prediction_2 == "fingers crossed" ){
        document.getElementById("update_emoji2").innerHTML ="&#129310";
    }
}
}