$(document).ready(function() {
  
  $('#options').change(function(){ // NOTE: all themes have capital letters on colors
    if($(this).val() == 'Dark'){ 
      $("#game").css("background-color", "#000");
      $("#player").css({
        "background-color": "#FFF" // using CSS function in case you want to add other stuff
      });
    }
  });
  
  $("#play").click(function() {
    $(this).hide();
    $("#options").hide();
    $("#player").show();
  });
  
  
});
