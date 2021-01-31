function MediaPlayer(config){
    this.media = config.el;
    this.plugins = config.plugins || [];
    this._initPlugins() ;
}

MediaPlayer.prototype._initPlugins = function(){
    console.log(this.media)
    this.plugins.forEach(plugins => {
        plugins.run(this)
    });
}

MediaPlayer.prototype.play = function(){
    this.media.play()
}

MediaPlayer.prototype.pause = function(){
    this.media.pause()
}

MediaPlayer.prototype.tooglePlay = function (){
    if (this.media.paused) {
        this.play()
        console.log('play')
    } else {
        this.pause()
        console.log('paused')
    }
}

MediaPlayer.prototype.silence = function (){
    console.log('muted function')
    this.media.muted = true;
}

MediaPlayer.prototype.unsilence = function (){
    this.media.muted = false;
}


export default MediaPlayer;
