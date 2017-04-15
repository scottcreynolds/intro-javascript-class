$(function() {
 $('.user').on('click', function() {
    var id = $(this).data("user");
    console.log($(this).dataset)
    console.log(id)
    $.get('https://github/repos/' + user, function(data) {
      //do something
    })
  })
});
