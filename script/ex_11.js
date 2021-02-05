

let acceptCookie = document.querySelector('footer div a');
let footerDiv = document.querySelector('footer div');
let footer = document.querySelector('footer');

let dateExpires = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);


let secondDiv = document.createElement('div');
let deleteButton = document.createElement('button');
let textButton = document.createTextNode('Supprimer les cookies');
deleteButton.appendChild(textButton)


acceptCookie.addEventListener('click', (e) => {
    document.cookie = `valeur=true; expires=${dateExpires}`;
    footer.appendChild(secondDiv);
    secondDiv.appendChild(deleteButton);
})


if (document.cookie == false) {
    console.log('false');
    // footer.lastElementChild.remove();
} else {
    console.log('true');
    footer.appendChild(secondDiv);
    secondDiv.appendChild(deleteButton);


    if (document.querySelector('footer div button')) {
        console.log('yes button');
        document.querySelector('footer div button').addEventListener('click', (e) => {
            document.cookie = `valeur=true; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
            console.log("ok");
            footer.lastElementChild.remove();
        })
    }
}
