class Helper {
  playPauseAndUpdate(song) {
    helper.playPauseAndUpdate(song);
    $(this.'#time-control .total-time') = player.getDuration();
    $('#time-control .total-time').text(totalTime);

  };
}

const helper = new Helper();
