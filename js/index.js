$(window).load( function() {
		$('#portfolio').BlocksIt({
			numOfCol: 4,
			offsetX: 0,
			offsetY: 5,
      blockElement:".grid"
		});

    var header_img = document.getElementsByClassName("headerimgholder");
    var width = $(window).width() -55;
    var howmany = (width/150 -1)*2;
    for(var i=0; i<howmany; i++){
      header_img[i].style.display = "inline-block";
    }
	});

//window resize
$(window).resize(function() {
  $('#portfolio').BlocksIt({
    numOfCol: 4,
    offsetX: 0,
    offsetY: 5,
    blockElement:".grid"
  });
  var header_img = document.getElementsByClassName("headerimgholder");
  var width = $(window).width() -55;
  var howmany = (width/150 -1)*2;
  for(var j=0;j<header_img.length;j++){
    header_img[j].style.display = "none";
  }
  for(var i=0; i<howmany; i++){
    header_img[i].style.display = "inline-block";
  }
});

//button active mode
$('.button').click(function(){
    $('.button').removeClass('btn_active');
    $(this).addClass('btn_active');
});
function select_ALL(){
  var all = document.getElementsByClassName("ALL");
  for(var a=0; a<all.length; a++){
    all[a].classList.add("grid");
    all[a].style.display = "block";
  }
  $('#portfolio').BlocksIt({
    numOfCol: 4,
    offsetX: 0,
    offsetY: 5,
    blockElement:".grid"
  });
}

function select_University(){
  var all = document.getElementsByClassName("ALL");
  var university = document.getElementsByClassName("university");

  for(var a=0; a<all.length; a++){
    all[a].classList.remove("grid");
    all[a].style.display = "none";
  }

  for(var b=0; b<university.length; b++){
    university[b].classList.add("grid");
    university[b].style.display = "block";
  }
  $('#portfolio').BlocksIt({
    numOfCol: 4,
    offsetX: 0,
    offsetY: 5,
    blockElement:".grid"
  });
}
function select_Activity(){
  var all = document.getElementsByClassName("ALL");
  var activity = document.getElementsByClassName("activity");

  for(var a=0; a<all.length; a++){
    all[a].classList.remove("grid");
    all[a].style.display = "none";
  }

  for(var b=0; b<activity.length; b++){
    activity[b].classList.add("grid");
    activity[b].style.display = "block";
  }
  $('#portfolio').BlocksIt({
    numOfCol: 4,
    offsetX: 0,
    offsetY: 5,
    blockElement:".grid"
  });
}
function select_Devlop(){
  var all = document.getElementsByClassName("ALL");
  var develop = document.getElementsByClassName("develop");

  for(var a=0; a<all.length; a++){
    all[a].classList.remove("grid");
    all[a].style.display = "none";
  }

  for(var b=0; b<develop.length; b++){
    develop[b].classList.add("grid");
    develop[b].style.display = "block";
  }
  $('#portfolio').BlocksIt({
    numOfCol: 4,
    offsetX: 0,
    offsetY: 5,
    blockElement:".grid"
  });
}
function select_LikeLion(){
  var all = document.getElementsByClassName("ALL");
  var LikeLion_active = document.getElementsByClassName("LikeLion_active");

  for(var a=0; a<all.length; a++){
    all[a].classList.remove("grid");
    all[a].style.display = "none";
  }

  for(var b=0; b<LikeLion_active.length; b++){
    LikeLion_active[b].classList.add("grid");
    LikeLion_active[b].style.display = "block";
  }
  $('#portfolio').BlocksIt({
    numOfCol: 4,
    offsetX: 0,
    offsetY: 5,
    blockElement:".grid"
  });
}


// modal
function display_modal(i){
  var modal = document.getElementsByClassName('modal');
  var body = document.body;
  modal[i].style.display = "block";
  body.style.overflow = "hidden";

}
function close_modal(j){
  var modal = document.getElementsByClassName('modal');
  var body = document.body;
  modal[j].style.display = "none";
  body.style.overflow = "auto";
}


//header
setimer();
function setimer(){
  var hover_infinite = setTimeout(
    function(){ hoverfunc();
      console.log();
   }, 3000);
 }

function hoverfunc(){
  var header_img = document.getElementsByClassName("headerimgholder");
  var width = $(window).width() -55;
  var howmany = (width/150 -1)*2;
  for(var j=0;j<header_img.length;j++){
    header_img[j].classList.remove("header_active");
  }
  var index = Math.floor((Math.random() * howmany));
  header_img[index].classList.add("header_active");
  setimer();
}

window.onhashchange = function() {
  window.history.back();
};
