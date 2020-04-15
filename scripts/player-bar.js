{
  $('button#play-pause').on('click', function() {
    helper.playPauseAndUpdate();
    $(this).attr('playState', player.playState);
  });

  // next button
  $('button#next').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    const nextSong = album.songs[nextSongIndex];
    if (nextSongIndex >= album.songs.length) { return; }

    helper.playPauseAndUpdate(nextSong);
  });

  // previous button
  $('button#previous').on('click', function() {
    if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const prevSongIndex = currentSongIndex - 1;
    const prevSong = album.songs[prevSongIndex];
    if (prevSongIndex < 0) { return; }

    helper.playPauseAndUpdate(prevSong);
  });

  //execute the time control input
  $('#time-control input').on('input', function (event) {
    player.skipTo(event.target.value);
  });

  //execute the volume control input
  $('#volume-control input').on('input', function (event) {
    player.setVolume(event.target.value);
  });

  //time control input: set the time of the track to be played
  setInterval( () => {
    if (player.playState !== 'playing') { return; }
    const currentTime = player.prettyTime(player.getTime());
    const duration = player.getDuration();
    const percent = (currentTime / duration) * 100;
    $('#time-control .current-time').text( currentTime );
    $('#time-control input').val(percent);
  }, 1000);
}
