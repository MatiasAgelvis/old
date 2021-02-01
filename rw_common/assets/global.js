
var headerHeight=$('#pageHeader').outerHeight();function scrollFunction(){if(document.body.scrollTop>headerHeight||document.documentElement.scrollTop>headerHeight){document.getElementById("navbar").style.top="0";}else{document.getElementById("navbar").style.top="-70px";}}
window.addEventListener("scroll",scrollFunction,{passive:true});