let styleFont = () => {
    let buttons = document.querySelectorAll('footer div button')
    let options = document.querySelectorAll('footer div select ')
    let fontSize = 16;
    let body = document.querySelector('body');

    buttons.forEach(element => {
        element.addEventListener('click', () => {

            if (element.textContent === "+") {
                fontSize += 1;
            }
            if (element.textContent === '-') {
                fontSize -= 1;
            }
            body.style.fontSize = fontSize + 'px';
        })
    });

    options.forEach(element => {
        element.addEventListener('change', () => {
            document.querySelector('body').style.background = element.value
        })
    });
}

styleFont();