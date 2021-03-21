var news_btn_01_select = document.querySelector("#s1 .arrow-left-select");
var news_btn_02_select = document.querySelector("#s2 .arrow-left-select");
var news_btn_03_select = document.querySelector("#s3 .arrow-left-select");
// var news_btn_04_select = document.querySelector("#s4 .arrow-left-select");

var news_btn_01 = document.querySelector("#s1 .news-menu-select");
var news_btn_02 = document.querySelector("#s2 .news-menu-select");
var news_btn_03 = document.querySelector("#s3 .news-menu-select");
// var news_btn_04 = document.querySelector("#s4 .news-menu-select");

var btn_news_left = document.querySelector('.arrow-left-news');
var btn_news_right = document.querySelector('.arrow-right-news');

var feed01 = document.querySelector('#news01.feed');
var feed02 = document.querySelector('#news02.feed');
var feed03 = document.querySelector('#news03.feed');
// var feed04 = document.querySelector('#news04.feed');

var news_menu = document.querySelector('.news-menu');
var feed_cont = document.querySelector('.feed-cont');

var navCount = 1;

var showMe01 = false;
var showMe02 = false;
var showMe03 = false;
// var showMe04 = false;

function openInNewTab(url) {
    var win = window.open(url, '_blank');
    win.focus();
  }

var feedOff = () => {
    console.log('feed-off');
    feed01.style.display = "none";
    feed02.style.display = "none";
    feed03.style.display = "none";
    // feed04.style.display = "none";
};

//reset element state before selecting the next
var reset_submenu = () => {
    showMe01 = false;
    showMe02 = false;
    showMe03 = false;
    // showMe04 = false;
    news_btn_01_select.style.visibility = "hidden";
    news_btn_02_select.style.visibility = "hidden";
    news_btn_03_select.style.visibility = "hidden";
    // news_btn_04_select.style.visibility = "hidden";
    news_btn_01.style.pointerEvents = "auto";
    news_btn_02.style.pointerEvents = "auto";
    news_btn_03.style.pointerEvents = "auto";
    // news_btn_04.style.pointerEvents = "auto";
    news_btn_01.style.fontWeight = "300";
    news_btn_02.style.fontWeight = "300";
    news_btn_03.style.fontWeight = "300";
    // news_btn_04.style.fontWeight = "300";
};

//which element becomes active
var menuset = (submenu) => {
    reset_submenu();
    feedOff();
    if (submenu === 1) {
        console.log('submenu = 1');
        showMe01 = true;
        feed01.style.display = "flex";
        news_btn_01_select.style.visibility = "visible";
        news_btn_01.style.fontWeight = "500";
        news_btn_01.style.pointerEvents = "none";
    } else if (submenu === 2) {
        console.log('submenu = 2');
        showMe02 = true;
        feed02.style.display = "flex";
        news_btn_02_select.style.visibility = "visible";
        news_btn_02.style.fontWeight = "500";
        news_btn_02.style.pointerEvents = "none";
    } else if (submenu === 3) {
        console.log('submenu = 3');
        showMe03 = true;
        feed03.style.display = "flex";
        news_btn_03_select.style.visibility = "visible";
        news_btn_03.style.fontWeight = "500";
        news_btn_03.style.pointerEvents = "none";
    } 
    
    //else if (submenu === 4) {
    //     console.log('submenu = 4');
    //     showMe04 = true;
    //     feed04.style.display = "flex";
    //     news_btn_04_select.style.visibility = "visible";
    //     news_btn_04.style.fontWeight = "500";
    //     news_btn_04.style.pointerEvents = "none";
    // }
};


//event listners 
news_btn_01.addEventListener("click", function () {
    menuset(1);
});
news_btn_02.addEventListener("click", function () {
    menuset(2);
});
news_btn_03.addEventListener("click", function () {
    menuset(3);
});
// news_btn_04.addEventListener("click", function () {
//     menuset(4);
// });


//hide elements that are active in mobile
var hideSubLinks = () => {
    news_btn_01_select.style.visibility = "hidden";
    news_btn_02_select.style.visibility = "hidden";
    news_btn_03_select.style.visibility = "hidden";
    // news_btn_04_select.style.visibility = "hidden";
    news_btn_01.style.visibility = "hidden";
    news_btn_02.style.visibility = "hidden";
    news_btn_03.style.visibility = "hidden";
    // news_btn_04.style.visibility = "hidden";
};


//check if in mobile or desktop mode
var mediaQuery = window.matchMedia('(max-width: 749px)');

var handleMobile = (e) => {

    hideSubLinks();

    if (e.matches) {
        btn_news_left.style.display = "block";
        btn_news_right.style.display = "block";

        if (showMe01 === true) {
            news_btn_01.style.visibility = "visible";
            news_btn_01.style.fontWeight = "500";
        } else if (showMe02 === true) {
            news_btn_02.style.visibility = "visible";
            news_btn_02.style.fontWeight = "500";
        }else if (showMe03 === true) {
            news_btn_03.style.visibility = "visible";
            news_btn_03.style.fontWeight = "500";
        }
        // } else if (showMe04 === true) {
        //     news_btn_04.style.visibility = "visible";
        //     news_btn_04.style.fontWeight = "500";
        // }
    }else{
        btn_news_left.style.display = "none";
        btn_news_right.style.display = "none";

        news_btn_01.style.visibility = "visible";
        news_btn_02.style.visibility = "visible";
        news_btn_03.style.visibility = "visible";
        // news_btn_04.style.visibility = "visible";

        if (showMe01 === true) {
            news_btn_01_select.style.visibility = "visible";
            news_btn_01.style.fontWeight = "500";
        } else if (showMe02 === true) {
            news_btn_02_select.style.visibility = "visible";
            news_btn_02.style.fontWeight = "500";
        } else if (showMe03 === true) {
            news_btn_03_select.style.visibility = "visible";
            news_btn_03.style.fontWeight = "500";
        }
        // } else if (showMe04 === true) {
        //     news_btn_04_select.style.visibility = "visible";
        //     news_btn_04.style.fontWeight = "500";
        // }
    }  
};



btn_news_left.addEventListener("click", () => {
    console.log("navCount =" + navCount);
    news_btn_01.style.visibility = "hidden";
    news_btn_02.style.visibility = "hidden";
    news_btn_03.style.visibility = "hidden";

    if(navCount === 1){
        console.log("1");
        menuset(3);
        news_btn_03.style.visibility = "visible";
        news_btn_03.style.fontWeight = "500";
        navCount = 3;
    }else if(navCount === 2){
        console.log("2");
        menuset(1);
        news_btn_01.style.visibility = "visible";
        news_btn_01.style.fontWeight = "500";
        navCount--;
    }
    else if(navCount === 3){
        console.log("3");
        menuset(2);
        news_btn_02.style.visibility = "visible";
        news_btn_02.style.fontWeight = "500";
        navCount--;
    }
    
});


btn_news_right.addEventListener("click", () => {
    console.log(navCount);
    news_btn_01.style.visibility = "hidden";
    news_btn_02.style.visibility = "hidden";
    news_btn_03.style.visibility = "hidden";
    if(navCount === 1){
        menuset(2);
        news_btn_02.style.visibility = "visible";
        news_btn_02.style.fontWeight = "500";
        navCount++;
    }else if(navCount === 2){
        menuset(3);
        news_btn_03.style.visibility = "visible";
        news_btn_03.style.fontWeight = "500";
        navCount++;
    }
    else if(navCount === 3){
        menuset(1);
        news_btn_01.style.visibility = "visible";
        news_btn_01.style.fontWeight = "500";
        navCount = 1;
    }

});


//init creative in mobile or desktop
var runOnceMobile = () => {
    // feedOff();
    if (window.matchMedia("(max-width: 749px)").matches) {
        feed01.style.display = "flex";
        news_btn_01.style.visibility = "visible";
        news_btn_02.style.visibility = "hidden";
        news_btn_03.style.visibility = "hidden";
        // news_btn_04.style.visibility = "hidden";
        btn_news_left.style.display = "block";
        btn_news_right.style.display = "block";
        menuset(1);
      } else {
        feed01.style.display = "flex";
        btn_news_left.style.display = "none";
        btn_news_right.style.display = "none";
        menuset(1);
    }
};

runOnceMobile();





mediaQuery.addListener(handleMobile);


// btn_news_left.addEventListener("click", () => {
//     console.log("navCount =" + navCount);
//     news_btn_01.style.visibility = "hidden";
//     news_btn_02.style.visibility = "hidden";
    // news_btn_03.style.visibility = "hidden";
    // news_btn_04.style.visibility = "hidden";
//     if(navCount === 1){
//         console.log("1");
//         menuset(2);
//         news_btn_02.style.visibility = "visible";
//         news_btn_02.style.fontWeight = "500";
//         navCount = 2;
//     }else if(navCount === 2){
//         console.log("1");
//         menuset(1);
//         news_btn_01.style.visibility = "visible";
//         news_btn_01.style.fontWeight = "500";
//         navCount--;
//     }
    
// });


// btn_news_right.addEventListener("click", () => {
//     console.log(navCount);
//     news_btn_01.style.visibility = "hidden";
//     news_btn_02.style.visibility = "hidden";
    // news_btn_03.style.visibility = "hidden";
    // news_btn_04.style.visibility = "hidden";
//     if(navCount === 1){
//         menuset(2);
//         news_btn_02.style.visibility = "visible";
//         news_btn_02.style.fontWeight = "500";
//         navCount++;
//     }else if(navCount === 2){
//         menuset(1);
//         news_btn_01.style.visibility = "visible";
//         news_btn_01.style.fontWeight = "500";
//         navCount = 1;
//     }

// });

// btn_news_left.addEventListener("click", () => {
//     console.log("navCount =" + navCount);
//     news_btn_01.style.visibility = "hidden";
//     news_btn_02.style.visibility = "hidden";
//     // news_btn_03.style.visibility = "hidden";
//     // news_btn_04.style.visibility = "hidden";
//     if(navCount === 1){
//         console.log("1");
//         menuset(4);
//         news_btn_04.style.visibility = "visible";
//         news_btn_04.style.fontWeight = "500";
//         navCount = 4;
//     }else if(navCount === 2){
//         console.log("2");
//         menuset(1);
//         news_btn_01.style.visibility = "visible";
//         news_btn_01.style.fontWeight = "500";
//         navCount--;
//     }
//     else if(navCount === 3){
//         console.log("3");
//         menuset(2);
//         news_btn_02.style.visibility = "visible";
//         news_btn_02.style.fontWeight = "500";
//         navCount--;
//     }else if(navCount === 4){
//         console.log("4");
//         menuset(3);
//         news_btn_03.style.visibility = "visible";
//         news_btn_03.style.fontWeight = "500";
//         navCount--;
//     }
    
// });


// btn_news_right.addEventListener("click", () => {
//     console.log(navCount);
//     news_btn_01.style.visibility = "hidden";
//     news_btn_02.style.visibility = "hidden";
//     news_btn_03.style.visibility = "hidden";
//     news_btn_04.style.visibility = "hidden";
//     if(navCount === 1){
//         menuset(2);
//         news_btn_02.style.visibility = "visible";
//         news_btn_02.style.fontWeight = "500";
//         navCount++;
//     }else if(navCount === 2){
//         menuset(3);
//         news_btn_03.style.visibility = "visible";
//         news_btn_03.style.fontWeight = "500";
//         navCount++;
//     }
//     else if(navCount === 3){
//         menuset(4);
//         news_btn_04.style.visibility = "visible";
//         news_btn_04.style.fontWeight = "500";
//         navCount++;
//     }else if(navCount === 4){
//         menuset(1);
//         news_btn_01.style.visibility = "visible";
//         news_btn_01.style.fontWeight = "500";
//         navCount = 1;
//     }

// });