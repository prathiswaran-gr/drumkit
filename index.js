for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document
    .getElementsByClassName("drum")
    [i].addEventListener("click", function () {
      buttonAnimation(this.textContent);
      playSound(this.textContent);
    });
}

function playSound(key) {
  switch (key) {
    case "a":
      playAudio("tom-2");
      break;
    case "s":
      playAudio("tom-3");
      break;
    case "d":
      playAudio("tom-4");
      break;
    case "w":
      playAudio("tom-1");
      break;
    case "j":
      playAudio("crash");
      break;
    case "k":
      playAudio("kick-bass");
      break;
    case "l":
      playAudio("snare");
      break;

    default:
      console.log(this.textContent);
  }
}
document.addEventListener("keydown", function (event) {
  playSound(event.key);
  buttonAnimation(event.key);
});
function playAudio(src) {
  var audio = new Audio("./sounds/" + src + ".mp3");
  audio.play();
}

function buttonAnimation(keyStroke) {
 
  try{
    var keyStyle = document.querySelector("." + keyStroke).classList;
    keyStyle.add("pressed");
    setTimeout(function () {
      keyStyle.remove("pressed");
    }, 100);
  }
  catch(e){
    console.log(e);
  }
 
}
