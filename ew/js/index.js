var $vid01Btn = $('.vid01Btn img');
var $vid02Btn = $('.vid02Btn img');
var $vid03Btn = $('.vid03Btn img');


var $galVideo = $('#galVideo');
var vid01 = "video/video_01.mp4"
var vid02 = "video/video_02.mp4"
var vid03 = "video/video_03.mp4"
var emptyVid = '';


function pauseGallery(){
	if($galVideo.muted){
	  $galVideo.muted = false;
	} else {
	  $galVideo.muted = true;
	}
	$galVideo[0].pause();
	$galVideo[0].currentTime = 0;
}

function playGallery(){
	
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
  hideVidGallerySlides();
}


function swapVidSource(z){
	//console.log('z = ' + z);
    pauseGallery();

	if(z == 1){
		$($galVideo).attr('src', vid01);
		$($galVideo)[0].load();
		playGallery();

	}else if(z == 2){
		$($galVideo).attr('src', vid02);
		$($galVideo)[0].load();
        playGallery();
		
	}else if(z == 3){
		$($galVideo).attr('src', vid03);
		$($galVideo)[0].load();
        playGallery();
	}

}



$vid01Btn.click(function() {
    
    $vid01Btn.attr('src','images/video_thumb_01_np.jpg');
    $vid02Btn.attr('src','images/video_thumb_02.jpg');
    $vid03Btn.attr('src','images/video_thumb_03.jpg');
    swapVidSource(1);
});

$vid02Btn.click(function() {
    $vid01Btn.attr('src','images/video_thumb_01.jpg');
    $vid02Btn.attr('src','images/video_thumb_02_np.jpg');
    $vid03Btn.attr('src','images/video_thumb_03.jpg');
    swapVidSource(2);
});

$vid03Btn.click(function() {
    $vid01Btn.attr('src','images/video_thumb_01.jpg');
    $vid02Btn.attr('src','images/video_thumb_02.jpg');
    $vid03Btn.attr('src','images/video_thumb_03_np.jpg');
    swapVidSource(3);
});

