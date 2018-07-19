$( document ).ready(function() {

  var $body = $("body")
      $mainNav = $("#main-nav"),
      $menuToggle = $(".menu-toggle"),
      $close = $(".icon-close-dims"); 

  // Menu Toggle
  $menuToggle.click(function(e){
    e.preventDefault();
    $mainNav.fadeToggle();
    $body.toggleClass("open");
  });

  // Reveal accordion
  // const panels = document.querySelectorAll('.panel');
  // function toggleActive(e) {
  //     const active = document.querySelector('.open-active');
  //     if(active){
  //         active.classList.remove('open-active');
  //         active.classList.remove('open');
  //     }
  //     this.classList.toggle('open-active');
  //     this.classList.toggle('open');
  // }
  // panels.forEach(panel => panel.addEventListener('click', toggleActive));

  var panels = document.querySelectorAll('.panel');
  $(panels).click(function(){
      var active = document.querySelector('.open-active');
      if(active){
          active.classList.remove('open-active');
          active.classList.remove('open');
      }
      this.classList.toggle('open-active');
      this.classList.toggle('open');
  })

});



// ------------------------------------------------------------
  // Waypoints
  // ------------------------------------------------------------
  var waypointsWrapper = (function ($) {

    var $heroPage = $('.hero__content'),
        $mainContent = $('.content-wrapper'),
        // $column = $('.home .column'),    
        $ready = $('#ready'), 
        $longer = $('#longer'),
        $retire = $('#retire'),
        $better = $('#better'),
        $newIdeas = $('#new-ideas'),
        $future = $('#future'),
        $fit = $('#fit'),
        $saveMore = $('#save-more'),
        $friendship = $('#friendship'),
        $multigen = $('#multigen'),
        $pensions = $('#pensions'),
        $body = $("body");

    // Page Hero
    if ($heroPage.length) {
      var waypoint = new Waypoint({
        element: $body,
        handler: function(direction) {
          $heroPage.toggleClass("hideHero");
        },
        offset: '-50px',
      });
    }

    // Column
    if ($ready.length) {
      var waypointColumn = new Waypoint({
        element: $body,
        handler: function(direction) {
          $ready.toggleClass("show");
          setTimeout(function(){
            $(window).on('scroll', function() {
                var scrollPos = $(this).scrollTop() / 90;
                $('#ready img').css('margin-top', '-' + scrollPos + '%');
                $('#ready .text').css('right', '-' + scrollPos + '%')
            });
          }, 3000)
        },
        offset: '-250px'
      });
    }

    if ($longer.length) {
      var waypointColumn = new Waypoint({
        element: $body,
        handler: function(direction) {
          $longer.toggleClass("show");
          // setTimeout(function(){
          //   $(window).on('scroll', function() {
          //       var scrollPos = $(this).scrollTop() / 90;
          //       $('#longer img').css('margin-top', '-' + scrollPos + '%');
          //       $('#longer .text').css('right', '-' + scrollPos + '%')
          //   });
          // }, 3000)
        },
        offset: '-750px'
      });
    }

    if ($retire.length) {
      var waypointColumn = new Waypoint({
        element: $body,
        handler: function(direction) {
          $retire.toggleClass("show");
        },
        offset: '-1350px'
      });
    }

    if ($better.length) {
      var waypointColumn = new Waypoint({
        element: $body,
        handler: function(direction) {
          $better.toggleClass("show");
        },
        offset: '-1900px'
      });
    }

    if ($newIdeas.length) {
      var waypointColumn = new Waypoint({
        element: $body,
        handler: function(direction) {
          $newIdeas.toggleClass("show");
        },
        offset: '-2600px'
      });
    }

    if ($future.length) {
      var waypointColumn = new Waypoint({
        element: $body,
        handler: function(direction) {
          $future.toggleClass("show");
        },
        offset: '-3600px'
      });
    }

    if ($fit.length) {
      var waypointColumn = new Waypoint({
        element: $body,
        handler: function(direction) {
          $fit.toggleClass("show");
        },
        offset: '-3900px'
      });
    }

    if ($saveMore.length) {
      var waypointColumn = new Waypoint({
        element: $body,
        handler: function(direction) {
          $saveMore.toggleClass("show");
        },
        offset: '-4600px'
      });
    }

    if ($friendship.length) {
      var waypointColumn = new Waypoint({
        element: $body,
        handler: function(direction) {
          $friendship.toggleClass("show");
        },
        offset: '-5300px'
      });
    }

    if ($multigen.length) {
      var waypointColumn = new Waypoint({
        element: $body,
        handler: function(direction) {
          $multigen.toggleClass("show");
        },
        offset: '-5900px'
      });
    }

    if ($pensions.length) {
      var waypointColumn = new Waypoint({
        element: $body,
        handler: function(direction) {
          $pensions.toggleClass("show");
        },
        offset: '-7000px'
      });
    }
    $(window).on('scroll', function() {
                console.log($(this).scrollTop())
            });



  })(jQuery);