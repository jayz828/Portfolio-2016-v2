$(document).ready(function() {

openDialog();


});


function openDialog() {

    $( "#dialog" ).dialog({
      autoOpen: false,
      show: {
        effect: "blind",
        duration: 1000
      },
      hide: {
        effect: "explode",
        duration: 1000
      }
    });

     $( "#opener" ).hover(function() {
      $( "#dialog" ).dialog( "open" );
    });


}