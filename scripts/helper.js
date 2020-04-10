class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    totalTime = player.getDuration();
    $('#time-control .total-time').text(totalTime);
    $(player.playPause).replaceWith(helper.playPauseAndUpdate);
  };
}

const helper = new Helper();
