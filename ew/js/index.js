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

var $galVideo = $('#galVideo');
var vid01 = "video/video_01.mp4"
var vid02 = "video/video_02.mp4"
var vid03 = "video/video_03.mp4"
var emptyVid = '';

$galVideo.hide();
$text01.hide();
$text02.hide();
$text03.hide();


function hideStuff(){
    $galVideo.hide();
    $text01.hide();
    $text02.hide();
    $text03.hide();
    $text00.hide();
    jtLogo.hide();
    blankTxt.hide();
    $posterBG.css('visibility', 'hidden');
}

function pauseGallery(){
    hideStuff();
	if($galVideo.muted){
	  $galVideo.muted = false;
	} else {
	  $galVideo.muted = true;
	}
	$galVideo[0].pause();
	$galVideo[0].currentTime = 0;
}

function playGallery(){
	$galVideo.show();
	$($galVideo)[0].play();
    $($galVideo).attr('controls', '');
	if($galVideo.muted){
	  $galVideo.muted = false;
	} else {
	  $galVideo.muted = true;
	}
}


$($galVideo)[0].onended = function(e) {
  //console.log('video ended');
  hideStuff();
  $text00.show();
  jtLogo.show();
  blankTxt.show();
  $posterBG.css('visibility', 'visible');
  $vid01Btn.attr('src','images/video_thumb_01.jpg');
  $vid02Btn.attr('src','images/video_thumb_02.jpg');
  $vid03Btn.attr('src','images/video_thumb_03.jpg');
};


function swapVidSource(z){
	//console.log('z = ' + z);
    pauseGallery();

	if(z == 1){
        $text01.show();
		$($galVideo).attr('src', vid01);
		$($galVideo)[0].load();
		playGallery();

	}else if(z == 2){
        $text02.show();
		$($galVideo).attr('src', vid02);
		$($galVideo)[0].load();
        playGallery();
		
	}else if(z == 3){
        $text03.show();
		$($galVideo).attr('src', vid03);
		$($galVideo)[0].load();
        playGallery();
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
    hideStuff();
    $vid01Btn.attr('src','images/video_thumb_01_np.jpg');
    $vid02Btn.attr('src','images/video_thumb_02.jpg');
    $vid03Btn.attr('src','images/video_thumb_03.jpg');
    swapVidSource(1);
});

$vid02Btn.click(function() {
    hideStuff();
    $vid01Btn.attr('src','images/video_thumb_01.jpg');
    $vid02Btn.attr('src','images/video_thumb_02_np.jpg');
    $vid03Btn.attr('src','images/video_thumb_03.jpg');
    swapVidSource(2);
});

$vid03Btn.click(function() {
    hideStuff();
    $vid01Btn.attr('src','images/video_thumb_01.jpg');
    $vid02Btn.attr('src','images/video_thumb_02.jpg');
    $vid03Btn.attr('src','images/video_thumb_03_np.jpg');
    swapVidSource(3);
});

