
// When the user scrolls down 40px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (70px out of the top view)

// window.onscroll = function() {scrollFunction()};

var headerHeight = $('#pageHeader').outerHeight();
/*

function scrollFunction() {
  if (document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-"+$('#navbar').height()+"px";
  }
}

window.addEventListener("scroll", scrollFunction, {passive: true});
*/

(function($) { // Begin jQuery
  $(function() { // DOM ready
    // If a link has a dropdown, add sub menu toggle.
    $('navbar ul li a:not(:only-child)').click(function(e) {
      $(this).siblings('.navbar-dropdown').toggle();
      // Close one dropdown when selecting another
      $('.navbar-dropdown').not($(this).siblings()).hide();
      e.stopPropagation();
    });
    // Clicking away from dropdown will remove the dropdown class
    $('html').click(function() {
      $('.navbar-dropdown').hide();
    });
    // Toggle open and close navbar styles on click
    $('#navbar-toggle').click(function() {
      $('navbar ul').slideToggle();
    });
    // Hamburger to X toggle
    $('#navbar-toggle').on('click', function() {
      this.classList.toggle('active');
    });
  }); // end DOM ready
})(jQuery); // end jQuery
