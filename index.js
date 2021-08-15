

// for(var i=0;i<document.querySelectorAll(".drum").length;i++){
//   document.querySelectorAll("button")[i].addEventListener("click", function(){
//     alert("I got clicked");
//   });
// }
function playAudio(k){
  var audio = new Audio('sounds/tom-'+k+'.mp3');
  audio.play();
}


function eventOccured(key){
  switch (key)
  {
    case 'w': playAudio(1);break;
    case 'a': playAudio(2);break;
    case 's': playAudio(3);break;
    case 'd': playAudio(4);break;
    case 'j': playAudio(5);break;
    case 'k': playAudio(6);break;
    case 'l': playAudio(7);break;
    default: console.log(key);
  }
}
// Mouse click
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    eventOccured(this.innerHTML);
    animation(this.innerHTML);
  })
}
// keyboardPress
document.addEventListener("keydown",function(event){
  eventOccured(event.key);
  animation(event.key);
})


function animation(currentKey){
var activeButton =  document.querySelector("."+currentKey);
activeButton.classList.add("pressed");

setTimeout(function(){
  activeButton.classList.remove("pressed");
},100);
}
