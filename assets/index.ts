import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/Autoplay'
import AutoPause from './plugins/AutoPause'

const video = document.querySelector('video');
const player = new MediaPlayer({
  el: video,
  plugins: [
    new AutoPlay(),
    new AutoPause()
  ],
});

const playbutton: HTMLElement = document.querySelector('#playbtn');
playbutton.onclick = () => player.togglePlay();

const mutebutton: HTMLElement = document.querySelector('#mutebtn');
mutebutton.onclick = () => player.toggleMute();

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  })
}