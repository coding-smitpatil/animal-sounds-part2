function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/CzAlARDuP/model.json",modelready);
}
    function modelready(){
        classifier.classify(getresults);
    }

    function getresults(error,results){
        if(error){console.error(error)}
        else{console.log(results);}
    }