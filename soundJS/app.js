
var displayStatus = document.getElementById('status');

createjs.Sound.alternateExtensions = ["mp3"];
createjs.Sound.registerSound("../music/funbill_bgm.mp3");
createjs.Sound.addEventListener("fileload",play);
displayStatus.innerHTML = "waiting for load to complete";

function play(event){
    createjs.Sound.play(event.src);
    displayStatus.innerHTML = 'playing source:'+event.src;


}
