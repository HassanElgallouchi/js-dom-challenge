let canvas = document.querySelector('footer div canvas');

let ctx = canvas.getContext("2d")
ctx.beginPath();
// ctx.rect(3, 3, 5, 5);
ctx.moveTo(6, 6);
ctx.lineTo(14, 10);
ctx.lineTo(6, 14);
ctx.lineTo(6, 6);
ctx.strokeStyle = "#f60";
ctx.lineWidth = 1;
ctx.stroke();
ctx.fillStyle = "#FFFFFF";
ctx.fill();
ctx.closePath();


let buttons = document.querySelectorAll('footer div button');
let playSong = () => {
    let audio = new Audio('./triangle.ogg');

    canvas.addEventListener('click', () => {
        console.log('ok');
        audio.play();
    })
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === 'Pause') {
                console.log('pause');
                audio.pause();
                if (!audio.pause()) {
                    audio.pause()
                } else {
                    audio.play();
                }
            }
            if (button.textContent === 'Stop') {
                console.log('Stop');
                audio.pause();
                audio.currentTime = 0;
            }
            if (button.textContent === 'Mute') {
                console.log('Mute');
                if (audio.muted) {
                    audio.muted = false;
                } else {
                    audio.muted = true;
                }
            }
        })
    });
}

playSong();