class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    $(this.'#time-control .total-time') = player.getDuration();
    $('#time-control .total-time').text(totalTime);
    $(player.playPause).replaceWith(helper.playPauseAndUpdate);
  };
}

const helper = new Helper();
