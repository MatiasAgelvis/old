
var headerHeight=$('#pageHeader').outerHeight();(function($){$(function(){$('navbar ul li a:not(:only-child)').click(function(e){$(this).siblings('.navbar-dropdown').toggle();$('.navbar-dropdown').not($(this).siblings()).hide();e.stopPropagation();});$('html').click(function(){$('.navbar-dropdown').hide();});$('#navbar-toggle').click(function(){$('navbar ul').slideToggle();});$('#navbar-toggle').on('click',function(){this.classList.toggle('active');});});})(jQuery);