let showCount = () => {
    let footer = document.querySelector('footer div');
    let count = 0;

    footer.textContent = 0; // show 0 in footer before click

    footer.addEventListener('click', () => {
        count += 1;
        footer.textContent = count;
    })

}

showCount();