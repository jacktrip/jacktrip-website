var columnBtn01 = document.querySelector("#col01");
var columnBtn02 = document.querySelector("#col02");
var columnBtn03 = document.querySelector("#col03");

var prodAdBtn01 = document.querySelector(".prod-ad-1");
var prodAdBtn02 = document.querySelector(".prod-ad-2");

function init() {
    columnBtn01.style.cursor = "pointer";
    columnBtn02.style.cursor = "pointer";
    columnBtn03.style.cursor = "pointer";

    prodAdBtn01.style.cursor = "pointer";
    prodAdBtn02.style.cursor = "pointer";

    columnBtn01.onclick = function () {
        window.open('https://github.com/jacktrip/jacktrip', '_blank');
        console.log('hit');
    };

    columnBtn02.onclick = function () {
        window.open('foundation.html', '_self');
        console.log('hit');
    };

    columnBtn03.onclick = function () {
        window.open('studio.html', '_self');
        console.log('hit');
    };

    prodAdBtn01.onclick = function () {
        window.open('https://www.amazon.com/dp/B08L9LDW35?ref=myi_title_dp', '_blank');
        console.log('hit');
    };

    prodAdBtn02.onclick = function () {
        window.open('https://www.sweetwater.com/store/detail/LiveOnlineBun--behringer-live-online-essentials-bundle', '_blank');
        console.log('hit');
    };



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

}






