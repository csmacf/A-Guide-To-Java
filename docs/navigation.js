$(document).ready(function(){
  //determine current chapter
  let chapter = 0;
  chapter = parseInt($('#chap-num').text());
  console.log(chapter);
  //create buttons
  const indexbutton = '<button type="button" id="index-button" >Index</button>';
  const nextbutton = '<button type="button" id="next-button" >Next</button>';
  const prevbutton = '<button type="button" id="prev-button" >Previous</button>';

  //add to page
$('div.chap-nav').append(prevbutton);
$('div.chap-nav').append(indexbutton);
$('div.chap-nav').append(nextbutton);

if(chapter < 2){
  $('#prev-button').css("opacity", "0.5");
}
  //add handlers
  $( "#index-button" ).click(function() {
    console.log("got it");
});

$( "#next-button" ).click(function() {
  window.location.href = ("Ch" + (chapter + 1) + ".html");
});

$( "#previous-button" ).click(function() {
  console.log("got it");
});

});