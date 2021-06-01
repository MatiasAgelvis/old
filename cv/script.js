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