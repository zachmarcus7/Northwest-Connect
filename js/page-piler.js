$(document).ready(function() {
    $('#pagepiling').pagepiling({
        menu: null,
          direction: 'vertical',
          verticalCentered: true,
          sectionsColor: [],
          anchors: [],
          scrollingSpeed: 700,
          easing: 'swing',
          loopBottom: false,
          loopTop: false,
          css3: true,
          navigation: {
            'textColor': 'white',
            'bulletsColor': 'white',
            'position': 'right',
            'tooltips': []
          },
          normalScrollElements: null,
          normalScrollElementTouchThreshold: 5,
          touchSensitivity: 5,
          keyboardScrolling: true,
          sectionSelector: '.section',
          animateAnchor: false,

      //events
      onLeave: function(index, nextIndex, direction) {
        const navbar = document.getElementById("main-nav");

        // if leaving the first index, add navbar fade in
        if (index == 1) {
          navbar.classList.add('active');
        }

        // if going back to first page from second, remove navbar fade in
        if (index == 2 && direction == 'up') {
          navbar.classList.remove('active');
        }
      },
      afterLoad: function(anchorLink, index){
        // page headers and subheaders
        const headerTwo   = document.getElementById("page-two-header");
        const headerThree = document.getElementById("page-three-header");
        const headerFour  = document.getElementById("page-four-header");
        const headerFive  = document.getElementById("page-five-header");
        const subTwo   = document.getElementById("page-two-sub");
        const subThree = document.getElementById("page-three-sub");
        const swiper   = document.getElementById("swiper");
        const subFive  = document.getElementById("page-five-sub");
        const quote    = document.getElementById("quote");
        const detailsOne = document.getElementById("details-one");
        const detailsTwo = document.getElementById("details-two");
        const detailsThree = document.getElementById("details-three");

        // this is for applying fade-in effects to header and subheaders
        if (index == 1) {
          quote.classList.remove('no-display');
        }

        if (index == 2) {
          headerTwo.classList.add('faded-horizontal');
          subTwo.classList.add('faded-horizontal');
          quote.classList.remove('no-display');
        }

        if (index == 3) {
          headerThree.classList.add('faded-horizontal');
          subThree.classList.add('faded-horizontal');
          quote.classList.remove('no-display');
          detailsOne.classList.add('faded-horizontal');
          detailsTwo.classList.add('faded-horizontal');
          detailsThree.classList.add('faded-horizontal');
        }

        if (index == 4) {
          headerFour.classList.add('faded-horizontal');
          swiper.classList.add('faded-horizontal');
          quote.classList.add('no-display');
        }

        if (index == 5) {
          headerFive.classList.add('faded-horizontal');
          subFive.classList.add('faded-horizontal');
          quote.classList.add('no-display');
        }
      },
      afterRender: function(){},
    });
  });