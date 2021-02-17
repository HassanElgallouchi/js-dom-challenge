
function  Hero(name, role, intelligence, force) {
    this.name = name;
    this.role = role;
    this.intelligence = intelligence;
    this.force = force;
}

Hero.prototype.toText = function () {
    return `Je suis\n ${this.name} le ${this.role}, j'ai ${this.intelligence} points d'intelligence et ${this.force} points de force !`
}

let mage = new Hero("amadeus", "mage", 10, 3);
let guerrier = new Hero("pontius", "guerrier", 3, 10);

mage.toText();
guerrier.toText();

let footer = document.querySelector('footer div');
footer.textContent = `${mage.toText()} ${guerrier.toText()}`;
