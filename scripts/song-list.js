{
  album.songs.forEach( (song, index) => {
    song.element = $(`
      <tr>
        <td>
          <button>
            <span class="song-number">${index + 1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
          </button>
        </td>
        <td>${song.title}</td>
        <td>${song.duration}</td>
      </tr>
      `);

      song.element.on('click', event => {
        player.playPause(song);
        $('button#play-pause').attr('playState', player.playState);
      });

      $('#song-list').append(song.element);
    });
  }

  prettyTime(song){
    const minutes= Math.floor(song / 60);
    const seconds = Number(song%60/100).toFixed(2).substring(2);
    return minutes+':'+seconds;
  }
