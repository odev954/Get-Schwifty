class WinningDisplayer extends Displayer {
    constructor() {
        super(null)
    }

    display() {
        let screen = document.getElementById("hasWon")
        
        screen.style.display = "flex"
        screen.onclick = () => {
            screen.style.display = "none"
        }
    }
}