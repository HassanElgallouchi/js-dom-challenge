let footer = document.querySelector('footer div');

function  Hero(name, role, intelligence, force) {
    this.name = name;
    this.role = role;
    this.intelligence = intelligence;
    this.force = force;
}

let mage = new Hero("amadeus", "mage", 10, 3);
let guerrier = new Hero("pontius", "guerrier", 3, 10);

console.log(mage);
mage.toString();
guerrier.toString();

console.log(mage);
footer.textContent = `"Je suis ${mage.name} le ${mage.role}, j'ai ${mage.intelligence} points d'intelligence et ${mage.force} points de force ! \
Je suis ${guerrier.name} le ${guerrier.role}, j'ai ${guerrier.intelligence} points d'intelligence et ${guerrier.force} points de force !"`;