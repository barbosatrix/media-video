function AutoPlay(){
    
    AutoPlay.prototype.run = function(player){
        player.silence();
        player.play();   
    }
}

export default AutoPlay;