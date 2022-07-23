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


$('.fix-category-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:"<div class='slick-left-arrow'><img class='a-left control-c arrow prev slick-prev' src='../../assets/img/arrow.png'></div>",
    nextArrow:"<div class='slick-right-arrow'><img class='a-right control-c arrow next slick-next' src='../../assets/img/arrow.png''></div>"
});

$( document ).ready(function() {
   $('.dropdown-toggle').click(function (){
        $('.drop-down-content').slideToggle()
   })
})



$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: true,
    focusOnSelect: true,
    arrows:false
});

$('.discount-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:true,
    prevArrow:"<div class='slick-left-arrow'><img class='a-left control-c arrow prev slick-prev' src='../../assets/img/arrow.png'></div>",
    nextArrow:"<div class='slick-right-arrow'><img class='a-right control-c arrow next slick-next' src='../../assets/img/arrow.png''></div>"
});

$('.fav-prod-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrows:false,
    prevArrow:"<div class='slick-left-arrow'><img class='a-left control-c arrow prev slick-prev' src='../../assets/img/arrow.png'></div>",
    nextArrow:"<div class='slick-right-arrow'><img class='a-right control-c arrow next slick-next' src='../../assets/img/arrow.png''></div>"
});

function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}