
var buttonColours =["red","blue","green","yellow"];
var gamepattern=[];
var userClickedPattern=[];

var started = false;
var level= 0;
$(document).keypress(function(){
    if(!started){
    $("#level-title").text("Level" +level);
    nextSequence();
    started=true;
}
    
});



$(".btn").click(function(){
    var userChoosenColour =$(this).attr("id");
    userClickedPattern.push(userChoosenColour);
    playSound(userChoosenColour);
    animatePress(userChoosenColour);
    checkAnswer(userClickedPattern.length-1);


});

function checkAnswer(currentLevel){
    if(gamepattern[currentLevel]=== userClickedPattern[currentLevel]){
        console.log("success");
    if(userClickedPattern.length === gamepattern.length){
        setTimeout(function(){
            nextSequence();
        },1000);
    }
    }else{
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        $("#level-title").text("gameover ,press any other key to continue");
        startOver();
    }

}



function nextSequence(){
    var userClickedPattern=[];
    level++;
    $("#level-title").text("Level"+level);
    var randomNumber =Math.floor(Math.random()*4);
    var randomChoosenColour = buttonColours[randomNumber];
    gamepattern.push(randomChoosenColour);

    $("#" + randomChoosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColour);
    }

function playSound(name){
    var audio =new Audio("sounds/" + name + ".mp3");
    audio.play();

}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+ currentColour).removeClass("pressed");
    
    },100);
}
function startOver(){
    level=0;
    gamepattern=[];
    started=false;
}