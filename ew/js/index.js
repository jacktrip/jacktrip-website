var $vid01Btn = $('.vid01Btn img');
var $vid02Btn = $('.vid02Btn img');
var $vid03Btn = $('.vid03Btn img');

var $posterBG = $('.poster-bg');
var $text00 = $('.text-00');
var $text01 = $('.text-01');
var $text02 = $('.text-02');
var $text03 = $('.text-03');
var jtLogo = $('#jt_logo');
var blankTxt = $('.text-blank');

// var $galVideo = $('#galVideo');
var vid01 = "SJgB5QmyDfU"
var vid02 = "CX9VUVjQ1jo"
var vid03 = "lsSXF2qq4l4"
var emptyVid = '';

// $galVideo.hide();
$text01.hide();
$text02.hide();
$text03.hide();


// function hideStuff(){
//     $galVideo.hide();
//     $text01.hide();
//     $text02.hide();
//     $text03.hide();
//     $text00.hide();
//     jtLogo.hide();
//     blankTxt.hide();
//     $posterBG.css('visibility', 'hidden');
// }

// function pauseGallery(){
//     hideStuff();
// 	if($galVideo.muted){
// 	  $galVideo.muted = false;
// 	} else {
// 	  $galVideo.muted = true;
// 	}
// 	$galVideo[0].pause();
// 	$galVideo[0].currentTime = 0;
// }

// function playGallery(){
// 	$galVideo.show();
// 	$($galVideo)[0].play();
//     $($galVideo).attr('controls', '');
// 	if($galVideo.muted){
// 	  $galVideo.muted = false;
// 	} else {
// 	  $galVideo.muted = true;
// 	}
// }


// $($galVideo)[0].onended = function(e) {
//   //console.log('video ended');
//   hideStuff();
//   $text00.show();
//   jtLogo.show();
//   blankTxt.show();
//   $posterBG.css('visibility', 'visible');
//   $vid01Btn.attr('src','images/video_thumb_01.jpg');
//   $vid02Btn.attr('src','images/video_thumb_02.jpg');
//   $vid03Btn.attr('src','images/video_thumb_03.jpg');
// };
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady(nowplaying) {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: nowplaying,
    playerVars: {
      'playsinline': 1
    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}


function swapVidSource(z){
	//console.log('z = ' + z);
    pauseGallery();

	if(z == 1){
        $text01.show();
        onYouTubeIframeAPIReady(vid01);
	}else if(z == 2){
        $text02.show();
	
		
	}else if(z == 3){
        $text03.show();
		
	}

}



// $vid01Btn.hover(function() {
//     hideStuff();
//     $text01.show();
// });

// $vid02Btn.hover(function() {
//     hideStuff();
//     $text02.show();
// });

// $vid03Btn.hover(function() {
//     hideStuff();
//     $text03.show();
// });


$vid01Btn.click(function() {
    // hideStuff();
    $vid01Btn.attr('src','images/video_thumb_01_np.jpg');
    $vid02Btn.attr('src','images/video_thumb_02.jpg');
    $vid03Btn.attr('src','images/video_thumb_03.jpg');
    swapVidSource(1);
});

$vid02Btn.click(function() {
    // hideStuff();
    $vid01Btn.attr('src','images/video_thumb_01.jpg');
    $vid02Btn.attr('src','images/video_thumb_02_np.jpg');
    $vid03Btn.attr('src','images/video_thumb_03.jpg');
    swapVidSource(2);
});

$vid03Btn.click(function() {
    // hideStuff();
    $vid01Btn.attr('src','images/video_thumb_01.jpg');
    $vid02Btn.attr('src','images/video_thumb_02.jpg');
    $vid03Btn.attr('src','images/video_thumb_03_np.jpg');
    swapVidSource(3);
});

