$(document).ready(function(){
  //determine current chapter
  let chapter = 0;
  chapter = parseInt($('#chap-num').text());
  console.log(chapter);
  //add chapter number to top div
  $('div.title-header').append(" - Chapter " + chapter);


if(chapter < 2){
  $('#prev-btn').addClass("disabled");
  $('#prev-btn').attr('aria-disabled',"true");
}
  //add links
  $('#index-btn').attr('href', 'index.html');
  $('#prev-btn').attr('href', 'Ch' + (chapter-1) + '.html');
  $('#next-btn').attr('href', 'Ch' + (chapter+1) + '.html');

});
