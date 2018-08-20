$(document).ready(function(){

  $('.wadu').hover( function() {
    $('.wadu').text("Welcome to Fullstack Bucket!! \n \n Add Any 3 technologies to the bucket to learn a Full Stack development for the chosen stack! ");
  }, function() {
    $( '.wadu' ).text("Wadu Hek??")
  });
  
  $('.dots').hover(function(){
 
    $('.dots').addClass('wowx');
    $('.dots').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {
    // Do something when the transition ends
    // console.log("ended");
    $('.dots').removeClass('wowx');
    $('.dots').addClass('wowy');
    });
    $('.dots').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
         function(event) {
      // Do something when the transition ends
      // console.log("ended");
      $('.dots').removeClass('wowy');
      $('.dots').addClass('wowz');
      });
   
  })

  var stackList=new Set();

  $('.c11').click(function(){
    $('.c11').addClass('curve');
    $('.c11').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {
    // Do something when the transition ends
    // console.log("ended");

    $('.c11').addClass('no');
    stackList.add($('.o11').html());
    // console.log(stackList);
    if(stackList.size===3){
      redirect();
    }
  });
  });

  $('.c21').click(function(){
    $('.c21').addClass('curve');
    $('.c21').one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {
    // Do something when the transition ends
    // console.log("ended");
    $('.c21').off('animationiteration webkitAnimationIteration');
    $('.c21').addClass('no');
    stackList.add($('.o21').html());
    // console.log(stackList);
    
    if(stackList.size===3){
      redirect();
    }
  });
  });

  $('.c31').click(function(){
    $(this).addClass('curve');
    $(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {
    // Do something when the transition ends
    // console.log("ended");
    $('.c31').addClass('no');
    stackList.add($('.o31').html());
    // console.log(stackList);
    if(stackList.size===3){
      redirect();
    }
  });
  });
  $('.c41').click(function(){
    $(this).addClass('curve');
    $(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {
    // Do something when the transition ends
    // console.log("ended");
    $('.c41').addClass('no');
    stackList.add($('.o41').html());
    if(stackList.size===3){
      redirect();
    }
  });
  });

  $('.c12').click(function(){
    $(this).addClass('curve');
    $(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {
    // Do something when the transition ends
    // console.log("ended");
    $('.c12').addClass('no');
    stackList.add($('.o12').html());
    if(stackList.size===3){
      redirect();
    }
  });
  });

  $('.c42').click(function(){
    $(this).addClass('curve');
    $(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {
    // Do something when the transition ends
    // console.log("ended");
    $('.c42').addClass('no');
    stackList.add($('.o42').html());
    if(stackList.size===3){
      redirect();
    }
  });
  });

  $('.c13').click(function(){
    $(this).addClass('curve');
    $(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {
    // Do something when the transition ends
    // console.log("ended");
    $('.c13').addClass('no');
    stackList.add($('.o13').html());
    if(stackList.size===3){
      redirect();
    }
  });
  });
 
  $('.c43').click(function(){
    $(this).addClass('curve');
    $(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {
    // Do something when the transition ends
    // console.log("ended");
    $('.c43').addClass('no');
    stackList.add($('.o43').html());
    if(stackList.size===3){
      redirect();
    }
  });
  });

  $('.c14').click(function(){
    $(this).addClass('curve');
    $(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {
    // Do something when the transition ends
    // console.log("ended");
    $('.c14').addClass('no');
    stackList.add($('.o14').html());
    if(stackList.size===3){
      redirect();
    }
  });
  });
  $('.c44').click(function(){
    $(this).addClass('curve');
    $(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
              function(event) {
    // Do something when the transition ends
    // console.log("ended");
    $('.c44').addClass('no');
    stackList.add($('.o44').html());
    if(stackList.size===3){
      redirect();
    }
  });
  });

  $('.reset').click(function(){
    $('.c11').removeClass('curve');
    $('.c21').removeClass('curve');
    $('.c31').removeClass('curve');
    $('.c41').removeClass('curve');
    $('.c12').removeClass('curve');
    $('.c42').removeClass('curve');
    $('.c13').removeClass('curve');
    $('.c43').removeClass('curve');
    $('.c14').removeClass('curve');
    $('.c44').removeClass('curve');

  });

  function redirect(){
   
    if($('.col').hasClass('no')){


      $(window).attr('location','tutorials.html');
    }
    // var p = new Promise(function(resolve, reject){
    //   $('.bucket').toggleClass('curve');
    //   if(1){
    //     resolve('Yes');
    //   }else{
    //     reject('No');
    //   }

    // });
    // p.then(function(){
    //   $(window).attr('location','http://www.example.com')
    // }).catch(function(){

    // });
  }


});
