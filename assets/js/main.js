$(function() { // waiting for the page to bo be fully loaded
  $('.se-pre-con').fadeOut('slow', function() { // fading out preloader
    $(this).remove(); // removing it from the DOM
  });
});

$(function($) {

  "use strict";

  $(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    // Activate menu
    if (wScroll >50) {
      $('.navbar').addClass('active_sc');
    }
    else {
      $('.navbar').removeClass('active_sc');
    };

  });

  //smooth scrool
   // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});


  // Add smooth scrolling on all links inside the navbar
  $("#xenavhome a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();


      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });

  // Add smooth scrolling on all links inside the navbar
  $("#xenav a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior

  });


  // Add smooth scrolling on all links inside small consulatncy
  $("#consultancy a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });

  // Add smooth scrolling on all links inside small team section
  $("#team a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });

  // Add smooth scrolling on all links inside small about us section
  $("#about a").on('click', function(event) {
    console.log("test")
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });

  // Add smooth scrolling on all links inside small careers section
  $("#careers a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });

  // Add smooth scrolling on banner button
  $("#extra_nav a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });

  //Scrool bottom to top
  $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });



  // Wait for window load
  $(window).on('load', function() {
     $(".se-pre-con").fadeOut("slow");;
  });






    //package slide


     var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        autoplay:false,
        speed: 1000,
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows : false,
        }
    });


    //testimonial slide
     var owls = $("#testi_slide");
    owls.owlCarousel({

        autoplay: true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        items: 1,
        loop: true,
        center: false,
        margin: 40,
        stagePadding: 0,
        dots:true,
        nav:false,


        merge: false,
        mergeFit: true,
        autoWidth: false,
        animateOut:'fadeOutDown',
        animateIn:'fadeInDown',

    });




//popup gallery
  $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      }
  });




  /*------------------------------------------------------------------------
     Javascript Function for Validate and Submit the CONTACT Form Using AJAX
    -------------------------------------------------------------------------*/

    // Get the form.
    var form = $('#contact-form'),
        reg = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{3,4})$/,
        inputs = $(".input-field");

    function validateForm() {

      if ($(this).is("#email")) {

          var email = $(this).val(),
              res = reg.test(email);

          if (res) {
            $(".email-error").html("");
          } else {
            $(".email-error").html("please enter a valid email.");
            return false;
          }

      } else {

          var target = ($(this).attr("id")),
              targetMessage = $("."+target+"-error");

          if ($(this).val() === "") {

            targetMessage.html("please enter a valid "+target+".");
            return false;

          } else {
            targetMessage.html(" ");
          }

      }
    } // End ValidateForm Function

    $.each(inputs, function( i, val ) {
      $(this).on("blur", validateForm);
    });

    // Get the messages div.
    var formMessages = $('#form-message');

    // Set up an event listener for the contact form.
    $(form).on('submit',function(event) {

      // Stop the browser from submitting the form.
      event.preventDefault();

      // Serialize the form data.
      var formData = $(form).serialize();

      // Submit the form using AJAX.
      $.ajax({
          type: 'POST',
          url: form.attr('action'),
          data: formData
      }).done(function(response) {

        // Make sure that the formMessages div has the 'success' class.
        formMessages.removeClass('error');
        formMessages.addClass('success');

        // Set the message text.
        formMessages.text(response);

        // Clear the form.
        $('#name1').val('');
        $('#email').val('');
        $('#phone').val('');
        $('#message').val('');

      }).fail(function(data) {

          // Make sure that the formMessages div has the 'error' class.
          formMessages.removeClass('success');
          formMessages.addClass('error');

          // Set the message text.
          if (data.responseText !== '') {
              formMessages.text(data.responseText);
          } else {
              formMessages.text('Sorry! An error occured and your message could not be sent.');
          }

      });
    });

    // init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
  }
});



// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.filter-button-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});



});




//wow
wow = new WOW(
              {
              boxClass:     'wow',      // default
              animateClass: 'animated', // default
              offset:       0,          // default
              mobile:       true,       // default
              live:         true,        // default
              offset: 100
            }
            )
         wow.init();




// Hamburger

let hamburger = document.getElementById('hamburger-icon');
let menu = document.getElementById('ham-container') 
let close = document.getElementById('ham-close')
let home = document.getElementById('home-link')
let digital = document.getElementById('dig-link')
let news = document.getElementById('news-link')
let demo = document.getElementById('demo-link')
let aboutOne = document.getElementById('about-link-1')
let aboutTwo = document.getElementById('about-link-2')
let aboutThree = document.getElementById('about-link-3')
let ccmOne = document.getElementById('ccm-link-1')
let ccmTwo = document.getElementById('ccm-link-2')
let ccmThree = document.getElementById('ccm-link-3')
let ccmFour = document.getElementById('ccm-link-4')
let ccmFive = document.getElementById('ccm-link-5')
let ccmSix = document.getElementById('ccm-link-6')
let contactBtn = document.getElementById('contact-link')


hamburger.addEventListener('click', () => {
  menu.classList.add('open-ham')

})

close.addEventListener('click', () => {
  menu.classList.remove('open-ham')
})

home.addEventListener('click', () => {
  menu.classList.remove('open-ham')
})

digital.addEventListener('click', () => {
  menu.classList.remove('open-ham')
})

news.addEventListener('click', () => {
  menu.classList.remove('open-ham')
})

demo.addEventListener('click', () => {
  menu.classList.remove('open-ham')
})

aboutOne.addEventListener('click', () => {
  menu.classList.remove('open-ham')
})

aboutTwo.addEventListener('click', () => {
  menu.classList.remove('open-ham')
})

aboutThree.addEventListener('click', () => {
  menu.classList.remove('open-ham')
})

ccmOne.addEventListener('click', () => {
  menu.classList.remove('open-ham')
})

ccmTwo.addEventListener('click', () => {
  menu.classList.remove('open-ham')
})

ccmThree.addEventListener('click', () => {
  menu.classList.remove('open-ham')
})

ccmFour.addEventListener('click', () => {
  menu.classList.remove('open-ham')
})

ccmFive.addEventListener('click', () => {
  menu.classList.remove('open-ham')
})

ccmSix.addEventListener('click', () => {
  menu.classList.remove('open-ham')
})

contactBtn.addEventListener('click', () => {
  menu.classList.remove('open-ham')
})

// hamburger dropdown menus 

let about = document.getElementById('about-link')
let aboutMenu = document.getElementById('about-dropdown')
let ccm = document.getElementById('ccm-link')
let ccmMenu = document.getElementById('ccm-dropdown')

about.addEventListener('click', () => {
  aboutMenu.classList.toggle('show-ham-dropdown')
  about.classList.toggle('mb-1')
})

ccm.addEventListener('click', () => {
  ccmMenu.classList.toggle('show-ham-dropdown')
  ccm.classList.toggle('mb-1')
})