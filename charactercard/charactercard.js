const character = {
    name: "Snortleblat",
    class: "Swamp Beast Diplomat",
    level: 5,
    health: 100,
    image:
        "https://andejuli.github.io/wdd131/character_card/snortleblat.webp",

    attacked: function () {
        if (this.health <= 0) {
            alert("Character Died");
            return;
        }

        this.health -= 20;

        if (this.health < 0) {
            this.health = 0;
        }

        renderCharacter();

        if (this.health === 0) {
            alert("Character Died");
        }
    },

    levelUp: function () {
        this.level++;
        renderCharacter();
    }
};


function renderCharacter() {
    document.querySelector("#characterName").textContent =
        character.name;

    document.querySelector("#characterClass").textContent =
        character.class;

    document.querySelector("#characterLevel").textContent =
        character.level;

    document.querySelector("#characterHealth").textContent =
        character.health;

    const image =
        document.querySelector("#characterImage");

    image.src = character.image;
    image.alt =
        `${character.name}, ${character.class}`;
}


document
    .querySelector("#attacked")
    .addEventListener("click", function () {
        character.attacked();
    });


document
    .querySelector("#levelUp")
    .addEventListener("click", function () {
        character.levelUp();
    });


renderCharacter();