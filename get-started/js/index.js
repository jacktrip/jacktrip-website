function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

$(document).ready(function () {
    
    $(".item").click(function () {
        let youtube_id = $(this).children("img").attr("data-id");
        $(this).children(".youtube_icon")
            .addClass("active").parent()
            .siblings()
            .children(".youtube_icon")
            .removeClass("active")

        let newUrl = `https://www.youtube.com/embed/${youtube_id}`;
        $("#video_id").attr("src", newUrl);
        

    })
    //due to slow connection video is playing slow
    // you can call your playlist using youtube api
})