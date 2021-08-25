var $vid01Btn = $('.vid01Btn img');
var $vid02Btn = $('.vid02Btn img');
var $vid03Btn = $('.vid03Btn img');

var $posterBG = $('.poster-bg');
var $text00 = $('.text-00');
var $text01 = $('.text-01');
var $text02 = $('.text-02');
var $text03 = $('.text-03');
var blankTxt = $('.text-blank');


$text01.hide();
$text02.hide();
$text03.hide();




function hideStuff(){
    $text01.hide();
    $text02.hide();
    $text03.hide();
    $text00.hide();
    blankTxt.hide();
    $posterBG.css('visibility', 'hidden');
}



function swapVidSource(z){


	if(z == 1){
        $text01.show();

	}else if(z == 2){
        $text02.show();

	}else if(z == 3){
        $text03.show();

	}

}




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

