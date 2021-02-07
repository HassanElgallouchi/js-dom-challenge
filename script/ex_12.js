
let image = 'https:/www.webacademie.org/wp-content/uploads/2019/11/LOGO-WEBACADEMIE-2019-QUADRI-2048x367.png';

// get item local storage
let stockageLocal = localStorage.getItem('image');

// get footer div
let footerDiv = document.querySelector('footer div');

// add button add
let addBtnDeclare = document.createElement('button');
let txtBtnAdd = document.createTextNode('setItem()');
addBtnDeclare.appendChild(txtBtnAdd);
footerDiv.appendChild(addBtnDeclare);

// add button remove
let rmvBtnDeclare = document.createElement('button');
let txtBtnRmv = document.createTextNode('remove()');
rmvBtnDeclare.appendChild(txtBtnRmv);
footerDiv.appendChild(rmvBtnDeclare);

// get buttons after creation
let setBtn = document.querySelector('footer div').firstElementChild;
let rmvBtn = document.querySelector('footer div').lastElementChild;

// check if local storage is not null
if (stockageLocal != null) {
    // display image on dom
    let newImg = document.createElement('img');
    newImg.setAttribute('src', stockageLocal);
    footerDiv.appendChild(newImg);
    newImg.style.width = '100%';
}

// event on click setBtn → set image in localStorage
setBtn.addEventListener('click', (e) => {
    localStorage.setItem('image', image);
    window.location.reload();
})

// even on click rmvBtn → remove image in localStorage
rmvBtn.addEventListener('click', () => {
    localStorage.removeItem('image');
    window.location.reload();
})

