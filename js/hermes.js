$(document).ready(function(){
    $('.slider').bxSlider({
        mode: 'fade',
        pager: true, 
        auto: true,
        autoHover:true,  
        pause: 3000
    });
    var btn = $('.show_time .show_name ul li');
    btn.click(function(){
        const idx = $(this).index();
        console.log(idx);
        $('.show_video .video').hide();
        $('.show_video .video').eq(idx).stop().show();
    });
});
