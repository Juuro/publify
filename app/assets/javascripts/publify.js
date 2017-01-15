// Front-end javascript manifest
//
//= require jquery
//= require cookies
//= require rails-timeago-all
//= require set-timeago-lang
//= require jquery_ujs
//= require lightbox
//= require observe
//
//= require_self

//= require bigfoot
//= require bootstrap-sprockets
// Front javascript manifest

$(document).ready(function() {
  $(".h-entry").each(function( index ) {
    var height = $( this ).find("h2.entry-title").height();
    $(this).find("aside").css("top", height+24);
  });

  $.bigfoot();
});
