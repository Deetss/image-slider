sliderInt =1;
sliderNext=2;
/*start slider when page loads*/
$(document).ready(function(){
  $("#slider>img#img1").fadeIn(300);
  startSlider();
});

var count= $("#slider>img").length;

function startSlider(){
  loop = setInterval(function(){

    if(sliderNext>count){
      sliderNext = 1;
      sliderInt = 1;
    }
    $("#slider>img").fadeOut(150);
    $("#slider>img#img" + sliderNext).fadeIn(150);

    sliderInt = sliderNext;
    sliderNext = sliderNext + 1;
    inTransition = false;
  },1500)
};


var inTransition = false;
function prev(){
  if( !inTransition ) {
    inTransition = true;
    newSlide =  sliderInt-1;
    showSlide(newSlide);
  }
};

function next(){
  newSlide =  sliderInt+1;
  showSlide(newSlide);

};

function stopLoop(){
  window.clearInterval(loop);

}

function showSlide(id){
  stopLoop();
  if(id>count){
    id = 1;
  }else if(id<1){
    id=count;
  }
  $("#slider>img").hide();
  $("#slider>img#img" + id).show();


  id = sliderNext;
  sliderNext = id + 1;
  startSlider();
}

$("#slider>img").hover(
  function(){
    stopLoop();
  },
  function(){
    startSlider();
  }
)
