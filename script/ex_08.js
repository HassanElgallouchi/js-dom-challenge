window.addEventListener('load', () => {
    let canvas = document.querySelectorAll('footer div canvas');
    let footerDiv = document.querySelector('footer div');
    let colorOrange = 'rgb(255, 165, 0)',
        colorPurple = 'rgb(128, 0, 128)',
        colorNoir = 'rgb(0, 0, 0)',
        colorOlive = 'rgb(128, 128, 0)';
    let outOrange = [];
    let outPurple = [];
    let outNoir = [];
    let outOlive = [];
    canvas.forEach(element => {
        let getColor = window.getComputedStyle(element).backgroundColor;
        if (getColor === colorOrange) {
            element.setAttribute('class', 'orange');
            element.style.backgroundColor = colorOrange;
            outOrange += element.outerHTML;
        }
        if (getColor === colorPurple) {
            element.setAttribute('class', 'purple');
            element.style.backgroundColor = colorPurple;
            outPurple += element.outerHTML;
        }
        if (getColor === colorNoir) {
            element.setAttribute('class', 'noir');
            element.style.backgroundColor = colorNoir;
            outNoir += element.outerHTML;
        }
        if (getColor === colorOlive) {
            element.setAttribute('class', 'olive');
            element.style.backgroundColor = colorOlive;
            outOlive += element.outerHTML;
        }
    });
    footerDiv.innerHTML = `${outOrange}${outPurple}${outNoir}${outOlive}`;
})