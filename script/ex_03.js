let yourName = () => {
    let footer = document.querySelector('footer div');
    footer.addEventListener('click', () => {
        
        let nom = '';
        while(nom == '' || nom == null) {
            nom = prompt('Quel est votre nom ?');
        }
        if(confirm(`Etes vous sûr que *${nom}* est votre nom ?`)) {
            alert(`Bonjour *${nom}* !`)
            footer.textContent = `Bonjour *${nom}* !`;
        } else {
            alert('Dommage \):')
            footer.textContent = 'Dommage \):'
        };
    })


}

yourName();


