import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/Autoplay.js'

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [
  // new AutoPlay()
  ]
});

const playbutton = document.querySelector('#playbtn');
playbutton.onclick = () => player.togglePlay();

const mutebutton = document.querySelector('#mutebtn');
mutebutton.onclick = () => player.toggleMute();