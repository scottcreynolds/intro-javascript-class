$(function () {
  $("#bookentry").on('submit', function () {
    addBookToLibrary();
    clearForm();
    return false;
  })

  $('#library').on('click', 'a.checkout', function() {
    $(this).parent().remove();
  })
})

function addBookToLibrary() {
  let title = $('#booktitle').val()
  let author = $('#author').val()
  let entry = `${title} by ${author}`
  $('#library').append(`<li>${entry} | <a href="#" class="checkout">Check Out</a>`)
}

function clearForm() {
  $('#booktitle').val('')
  $('#author').val('')
}
