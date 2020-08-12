$(document).ready(function(){
  //determine current chapter
  let chapter = 0;
  chapter = parseInt($('#chap-num').text());
  console.log(chapter);
  //add chapter number to top div
  $('div.title-header').append(" - Chapter " + chapter);
  //create buttons
  const indexbutton = '<a class="btn btn-primary" id="index-button" href="#" >Index</a>';
  //<button type="button" id="index-button" >Index</button>';
  const nextbutton = '<button type="button" id="next-button" >Next</button>';
  const prevbutton = '<button type="button" id="prev-button" >Previous</button>';

  //add to page
$('div.chap-nav').append(prevbutton);
$('div.chap-nav').append(indexbutton);
$('div.chap-nav').append(nextbutton);

if(chapter < 2){
  $('#prev-button').css("opacity", "0.5");
}
  //add links
  $("#index-button".attr('href', 'http://www.nyt.com/');




$( "#next-button" ).click(function() {

  window.location.href = ("Ch" + (chapter + 1) + ".html");
});

$( "#prev-button" ).click(function() {

  window.location.href = ("Ch" + (chapter - 1) + ".html");

});

});
