import { RunGame } from "./rungame";

window.onload = () => {
    window.focus();
    const game: Phaser.Game = new Phaser.Game({
        type: Phaser.AUTO,
        width: 750,
        height: 1334,
        scene: [new RunGame()],
        render: { pixelArt: true, antialias: false },
        physics: {
            default: "arcade",
            arcade: {
                gravity: {
                    x: 0,
                    y: 0,
                },
            },
        },
    });
    resizeGame();
    window.addEventListener("resize", resizeGame);
};

function resizeGame() {
    const canvas: (HTMLCanvasElement | null) = document.querySelector("canvas");
    if (canvas !== null) {
        const windowWidth: number = window.innerWidth;
        const windowHeight: number = window.innerHeight;
        const windowRatio: number = windowWidth / windowHeight;
        const gameRatio: number = 750 / 1334;
        if (windowRatio < gameRatio) {
            canvas.style.width = windowWidth + "px";
            canvas.style.height = (windowWidth / gameRatio) + "px";
        } else {
            canvas.style.width = (windowHeight * gameRatio) + "px";
            canvas.style.height = windowHeight + "px";
        }
    }
}
