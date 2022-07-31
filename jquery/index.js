userclickedpattern=[];
userclickedpattern.push(usercolor);
console.log(userclickedpattern);

buttoncolors=["red","blue","green","yellow"];
var randomchoosencolor=nextsequence();
gamePattern=buttoncolors[randomchoosencolor];

function nextsequence(){
    randomnumber=Math.floor(Math.random()*4);
    return randomnumber
}
$("#blue").click(function(){
    var audio= new Audio("sounds/blue.mp3");
    audio.play();
});
$("#red").click(function(){
    var audio=new Audio("sounds/red.mp3");
    audio.play();
});
$("#green").click(function(){
    audio= new Audio("sounds/green.mp3");
    audio.play();
});
$("#yellow").click(function (){
    audio= new Audio("sounds/yellow.mp3");
    audio.play();
});
$('#'+gamePattern).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
$("button").click(function usercolor(){
    userchosencolor=this.id;
    return userchosencolor;
})
