/*first slider*/
$(".slider-one")
.not(".slick-intialized")
.slick({
    autoplay:true,
    autoplaySpeed:2000,
    dots:true,

    PrevArrow:".site-slider .slider-btn .prev",
    nextArrow:".site-slider .slider-btn .next",
});


/*second-slider*/
$(".slider-two")
.not(".slick-intialized")
.slick({
    PrevArrow:".slider-two .slider-btn .prev",
    nextArrow:".slider-two .slider-btn .next",
    slidesToShow: 5,
  slidesToScroll: 2,
    autoplay:true,
    autoplaySpeed:2000,
})

/*slider 3*/

$(".slider-three")
.not(".slick-intialized")
.slick({
    PrevArrow:".site-slider-two .slider-btn .prev",
    nextArrow:".site-slider-two .slider-btn .next",
    slidesToShow: 3,
  slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
})




/*fourth-slider*/
$(".slider-four")
.not(".slick-intialized")
.slick({
    PrevArrow:".site-slider-four .slider-btn .prev",
    nextArrow:".site-slider-four .slider-btn .next",
    slidesToShow: 3,
  slidesToScroll: 2,
    autoplay:true,
    autoplaySpeed:2000,
})
