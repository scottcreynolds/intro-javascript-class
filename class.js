$(function() {
  debugger;
  var x = 0;
  console.log('hi');
  $('.clickable').on('click', function() {
    alert($(this).text()); //no more loop
  });
  $('#link').on('click', function() {
    alert($(this).text());
  });
});
