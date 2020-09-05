
function forMobileView() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


var video = document.getElementById("myVideo");
var unmuteBtn = document.querySelector(".unmuteBtn img");
var unMuteBtnImg = "images/unmute_btn.png";
var muteBtnImg = "images/mute_btn.png";
var state = false;

function toggleMute() {
    video.muted = !video.muted;
    if (state == false) {
        unmuteBtn.src = muteBtnImg;
        state = true;
        console.log('mute off');
    } else {
        unmuteBtn.src = unMuteBtnImg;
        state = false;
        console.log('mute on');
    }
}



