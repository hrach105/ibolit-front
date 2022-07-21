$(function(){
    $('.selectpicker').selectpicker();
});


$('.banner-slider').slick({
    dots:true,
    prevArrow:"<img class='a-left control-c prev slick-prev' src='./assets/img/arrow-left.png'>",
    nextArrow:"<img class='a-right control-c next slick-next' src='./assets/img/arrow-right.png'>"
});



$('.slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:"<div class='slick-left-arrow'><img class='a-left control-c arrow prev slick-prev' src='../../assets/img/arrow.png'></div>",
    nextArrow:"<div class='slick-right-arrow'><img class='a-right control-c arrow next slick-next' src='../../assets/img/arrow.png''></div>"
});


$('.brand-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:"<div class='slick-left-arrow'><img class='a-left control-c arrow prev slick-prev' src='../../assets/img/arrow.png'></div>",
    nextArrow:"<div class='slick-right-arrow'><img class='a-right control-c arrow next slick-next' src='../../assets/img/arrow.png''></div>"
});




$('.single-blog-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:true,
    prevArrow:"<div class='slick-left-arrow'><img class='a-left control-c arrow prev slick-prev' src='../../assets/img/arrow.png'></div>",
    nextArrow:"<div class='slick-right-arrow'><img class='a-right control-c arrow next slick-next' src='../../assets/img/arrow.png''></div>"
});


$( document ).ready(function() {
   $('.dropdown-toggle').click(function (){
        $('.drop-down-content').slideToggle()
   })
})



