function Track(artist, title) {
  this.artist = artist
  title = title
  this.printOut = function() {
    return '${this.title} by ${this.artist}'
  }
}

let playlist = [

  new Track('Springsteen', 'Born to Run'),
  new Track('Pearl Jam', 'Evenflow')
  new Track('Nirvana', 'In Bloom'),
  new Track('Nine Inch Nails', 'Closer')
]

$(funciton () {
  console.log("You should see me when the page loads!")
  $('#mainForm').on('click', function() {
    clearForm();
  })

  $('#showPlaylist').on('click', function() {
    showPlayList()
  })
})

function showPlaylist() {
  $('#playlist').html('')
  for(i = 0; i < playlist.length; i++) {
    $('#playlist').html(`<li>${playlist.printOut}</li>`)
  }
}
function clearForm() {
  $("#artist").val()
  $("#songtitle").val()
}

function updatePlaylist() {
  let artist = $("#artist").val()
  let songTitle = $("#songtitle").val()
  playlist.push(new Track(artist, songtitle))
  updatePlaylistCount()
}

function updatePlaylistCount() {
  $("#playlistcount").html(playlist.length)
}
