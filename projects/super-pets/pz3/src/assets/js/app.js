"use strict";

import $ from "jquery";
import "slick-carousel";

$(function(){
 
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
      $('#toTop').fadeIn();
    } else {
      $('#toTop').fadeOut();
    }
  });

  $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });
    

  $('.staff__inner').slick({
    infinite: true,
    prevArrow: '<img class="arrows" src="assets/images/arrow-left.svg" alt="">',
    nextArrow: '<img class="arrows" src="assets/images/arrow-right.svg" alt="">',
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
          breakpoint: 400,
          settings: {
              slidesToShow: 1
          }
      }
    ]
  });




  $('.question').on('click', function(){
        $(this).toggleClass('active')
    });


  const modalCall = $("[data-modal]");
  const modalClose = $("[data-close]");

  modalCall.on("click", function(event) {
      event.preventDefault();

      let $this = $(this);
      let modalId = $this.data('modal');

      $(modalId).addClass('show');
      $("body").addClass('no-scroll');
  });

  modalClose.on("click", function(event) {
      event.preventDefault();

      let $this = $(this);
      let modalParent = $this.parents('.modal');

      modalParent.removeClass('show');
      $("body").removeClass('no-scroll');
  });

  $(".modal").on("click", function(event) {
      $(this).removeClass('show');
      $("body").removeClass('no-scroll');
  });


  $(".modal__dialog").on("click", function(event) {
      event.stopPropagation();
  });

  $('#menu-toggle').click(function(){
    $(this).toggleClass('open');
    $(".menu__list").toggleClass('show-burger');
  })
    
});