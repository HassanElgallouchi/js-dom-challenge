let inputKeyword = () => {
    let array = [];
    window.addEventListener('keydown', (e) => {
        console.log(e.key);
        array.push(e.key)
        if (array.length > 42) {
            array.shift();
        }

        document.querySelector('footer div').textContent = array.join(' ← ');
    })

}

inputKeyword();