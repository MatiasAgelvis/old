function upButtonFade() {
      var refButton = document.getElementById( 'UpButton' );
      if (document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight) {
        document.getElementById("UpButton").style.bottom = "3px";
      } else {
        document.getElementById("UpButton").style.bottom = "-50px";
      }
    }

// and then make each element do something on scroll
window.addEventListener("scroll", upButtonFade, {passive: true});


function slideSocialButtons()
{
    if (Math.floor($(document).height() - $(document).scrollTop() - $(window).height()) > 100) {
        document.getElementById("download").style.right = "0px";

        document.getElementById("UpButton").style.width = "160px";
        } else {
        document.getElementById("download").style.right = "-80px";
        document.getElementById("UpButton").style.width = "80px";
    }
}

window.addEventListener("scroll", slideSocialButtons, {passive: true});


$( '.toggle' ).on( "click", function() {
  console.log( $( this ).text() );
});


$('.toggle').click(function(e) {
    e.preventDefault();

    console.log('HI');
  
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.next().slideUp(350);
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('show');
        $this.next().slideToggle(350);
    }
});