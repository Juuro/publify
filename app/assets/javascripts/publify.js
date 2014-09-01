//= require jquery
//= require jquery_ujs
//= require_self
// Front javascript manifest

$(document).ready(function() {
  $(".h-entry").each(function( index ) {
    var height = $( this ).find("h2.entry-title").height();
    $(this).find("aside").css("top", height+26);
  });
});
