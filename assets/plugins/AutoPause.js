class AutoPause{
    constructor(){
        this.threshold = 0.25
        this.handlerIntersection = this.handlerIntersection.bind(this)
        this.handleVisibilityChange = this.handlerVisibilityChange.bind(this)
    }

    run(player){
        this.player = player

        const observer = new IntersectionObserver(this.handlerIntersection,{
            threshold: 0.25
        })

        observer.observe(this.player.media)

        document.addEventListener('visibilitychange',this.handleVisibilityChange)

    }

    handlerIntersection(entries){
        const entry = entries[0]
        console.log(entry)

        const isVisible = entry.intersectionRatio >= this.threshold

        if (isVisible) {
            this.player.play()
        }else{
            this.player.pause()
        }
     }

     handlerVisibilityChange(){
         const isVisible = document.visibilityState === "visible"
         console.log(document.visibilityState)
         if (isVisible) {
             this.player.play()
         } else {
             this.player.pause()
         }
     }
}

export default AutoPause;