$(function() {

    "use strict";

    //===== Prealoder

    $(window).on('load', function (event) {
        $('.preloader').delay(500).fadeOut(500);
    });


    //===== Sticky

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".header_navbar").removeClass("sticky");
            $(".header_navbar img").attr("src", "assets/images/RK International background.png");
        } else {
            $(".header_navbar").addClass("sticky");
            $(".header_navbar img").attr("src", "assets/images/RK International background.png");
        }
    });


    //===== Section Menu Active

    var scrollLink = $('.page-scroll');
    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {

            var sectionOffset = $(this.hash).offset().top - 73;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
    

    //===== close navbar-collapse when a  clicked

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });
    

    //===== Back to top

    // Show or hide the sticky footer button
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });


    //=====  WOW active

    var wow = new WOW({
        boxClass: 'wow', //
        mobile: false, // 
    })
    wow.init();

    //===== 
// Custom count-up function
// function countUp(element, targetNumber, duration) {
//     const startNumber = parseInt(element.textContent, 10) || 0;
//     const increment = Math.ceil((targetNumber - startNumber) / (duration / 16)); // ~16ms per frame
//     let currentNumber = startNumber;
  
//     function updateNumber() {
//       currentNumber += increment;
  
//       if (currentNumber >= targetNumber) {
//         currentNumber = targetNumber;
//         element.textContent = currentNumber;
//       } else {
//         element.textContent = currentNumber;
//         requestAnimationFrame(updateNumber);
//       }
//     }
  
//     updateNumber();
//   }
  
  // Apply count-up to all elements with the class 'counter'
//   window.onload = function () {
//     const counters = document.querySelectorAll(".counter");
  
//     counters.forEach((counter) => {
//       const target = parseInt(counter.getAttribute("data-target"), 10);
//       countUp(counter, target, 2000); // Count to target over 2 seconds
//     });
//   };


// function countUp(element, targetNumber, duration) {
//     const startNumber = parseInt(element.textContent, 10) || 0;
//     const increment = Math.ceil((targetNumber - startNumber) / (duration / 16)); // ~16ms per frame
//     let currentNumber = startNumber;

//     function updateNumber() {
//         currentNumber += increment;

//         if (currentNumber >= targetNumber) {
//             currentNumber = targetNumber;
//             element.textContent = currentNumber;
//         } else {
//             element.textContent = currentNumber;
//             requestAnimationFrame(updateNumber);
//         }
//     }

//     updateNumber();
// }

// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }

// function handleScroll() {
//     const counters = document.querySelectorAll(".counter");

//     counters.forEach(counter => {
//         if (isInViewport(counter) && !counter.classList.contains("counted")) {
//             const target = parseInt(counter.getAttribute("data-target"), 10);
//             countUp(counter, target, 2000); // Count to target over 2 seconds
//             counter.classList.add("counted"); // Mark as counted to prevent re-triggering
//         }
//     });
// }

// // Attach the scroll event
// window.addEventListener("scroll", handleScroll);

function countUp(element, targetNumber, duration) {
    const startNumber = parseInt(element.textContent, 10) || 0;
    const increment = Math.ceil((targetNumber - startNumber) / (duration / 16)); // ~16ms per frame
    let currentNumber = startNumber;

    function updateNumber() {
        currentNumber += increment;

        if (currentNumber >= targetNumber) {
            currentNumber = targetNumber;
            element.textContent = currentNumber;
        } else {
            element.textContent = currentNumber;
            requestAnimationFrame(updateNumber);
        }
    }

    updateNumber();
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScroll() {
    const counters = document.querySelectorAll(".counter");

    counters.forEach(counter => {
        if (isInViewport(counter) && !counter.classList.contains("counted")) {
            const target = parseInt(counter.getAttribute("data-target"), 10);
            const duration = parseInt(counter.getAttribute("data-duration"), 10) || 2000; // Default to 2 seconds if not specified
            countUp(counter, target, duration); // Use the specified duration
            counter.classList.add("counted"); // Mark as counted to prevent re-triggering
        }
    });
}

// Attach the scroll event
window.addEventListener("scroll", handleScroll);

// Run the function initially in case elements are already in the viewport
handleScroll();

   // Wait for the DOM to load
   document.addEventListener('DOMContentLoaded', () => {
    // Get the target element
    const targetElement = document.getElementById('years_experience');

    // Set the count-up target number
    const countUpValue = 10; // Change this to your desired number

    // Initialize the CountUp object
    const countUp = new CountUp(targetElement, countUpValue, {
      duration: 2, // Duration of the animation in seconds
      separator: ',', // Add commas as thousand separators
    });

    // Start the animation
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  });
});

