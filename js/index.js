var columnBtn01 = document.querySelector("#col01");
var columnBtn02 = document.querySelector("#col02");
var columnBtn03 = document.querySelector("#col03");

var media_btn = document.querySelector("#media");
var help_btn = document.querySelector("#help");

var submenu_bg = document.querySelector(".submenu-expand-bg");
var media_set = document.querySelector(".submenu-expand .media-set#media-sub");
var help_set = document.querySelector(".submenu-expand .media-set#help-sub");

var found = document.querySelector("#found");
var stu = document.querySelector("#stu");
var tech = document.querySelector("#tech");
var hom = document.querySelector("#hom");

var sub_media_cont = document.querySelector(".media-sub-cont");
var sub_help_cont = document.querySelector(".help-sub-cont");

var media_expand_btn = document.querySelector(".media-expand");
var help_expand_btn = document.querySelector(".help-expand");
var arrow_down_1 = document.querySelector('.arrow-down-1');
var arrow_down_2 = document.querySelector('.arrow-down-2');
var arrow_down_3 = document.querySelector('.arrow-down-3');
var arrow_down_4 = document.querySelector('.arrow-down-4');

var menu_btns = [hom, found, tech, stu];

var prodAdBtn01 = document.querySelector(".prod-ad-1");
// var prodAdBtn02 = document.querySelector(".prod-ad-2");

function forMobileView() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}



function init() {
    columnBtn01.style.cursor = "pointer";
    columnBtn02.style.cursor = "pointer";
    columnBtn03.style.cursor = "pointer";

    // prodAdBtn01.style.cursor = "pointer";
    // prodAdBtn02.style.cursor = "pointer";

    columnBtn01.onclick = function () {
        window.open('https://jacktrip.github.io/jacktrip/', '_blank');
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

var hideSub = () => {
    media_set.style.zIndex = "1";
    help_set.style.zIndex = "1";
    submenu_bg.style.display = "none";
    media_set.style.display = "none";
    help_set.style.display = "none";
    arrow_down_1.style.top = "-2px";
    arrow_down_2.style.top = "-2px";
};


var showMediaSub = () =>{
    hideSub();
    submenu_bg.style.display = "block";
    media_set.style.display = "block";
    media_set.style.zIndex = "100";
    arrow_down_1.style.top = "0px";

};

var showHelpSub = () =>{
    hideSub();
    submenu_bg.style.display = "block";
    help_set.style.display = "block";
    help_set.style.zIndex = "100";
    arrow_down_2.style.top = "0px";
};

var subMediaActive = () =>{
    submenu_bg.style.display = "block";
    media_set.style.display = "block";
    arrow_down_1.style.top = "0px";
};

media_set.addEventListener("mouseover", subMediaActive);
help_set.addEventListener("mouseover", showHelpSub);

media_btn.addEventListener("mouseover", showMediaSub);
help_btn.addEventListener("mouseover", showHelpSub);

media_set.addEventListener("mouseout", hideSub);
help_set.addEventListener("mouseout", hideSub);


menu_btns.forEach(item => {
    item.addEventListener('mouseover', event => {
        hideSub();
    });
});

var m_expand = true;
var h_expand = true;

var expand_media = (x) => {
    if(x){
      sub_media_cont.style.display = "block";
      arrow_down_3.style.transform = 'rotate(180deg)'; 
      m_expand = false;
    }else{
      sub_media_cont.style.display = "none";
      arrow_down_3.style.transform = 'rotate(0deg)'; 
      m_expand = true;
    }
    
};

var expand_help = (x) => {
    if(x){
        sub_help_cont.style.display = "block";
        arrow_down_4.style.transform = 'rotate(180deg)'; 
        h_expand = false;
      }else{
        sub_help_cont.style.display = "none";
        arrow_down_4.style.transform = 'rotate(0deg)'; 
        h_expand = true;
      }
      
};




media_expand_btn.addEventListener("click", function(){
    expand_media(m_expand);
});
help_expand_btn.addEventListener("click", function(){
    expand_help(h_expand);
});

hideSub();




