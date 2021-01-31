

import MediaPlayer from './MediaPlayer.js';
import Autoplay from './plugins/AutoPlay.js';

const video = document.querySelector("video")
const player = new MediaPlayer({
    el:video, 
    plugins:[new Autoplay()]

});

const playButton = document.querySelector("#playButton");
playButton.onclick = () =>{ player.tooglePlay();}

const muteButton = document.querySelector('#muteButton');
console.log(muteButton)
muteButton.onclick = () => {
    if (player.media.muted) {
        console.log('clic muted')
        player.unsilence();
    }else{
        player.silence()
    }
}