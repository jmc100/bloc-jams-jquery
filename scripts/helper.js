class Helper {
  playPauseAndUpdate(song) {
    $('#time-control .total-time').text(player.prettyTime(totalTime));
    player.playPause(song);

  };
}

const helper = new Helper();
