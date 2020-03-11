let GameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function (classType) {
        switch (classType) {
            case "Warrior":
                player = new Player(classType, 1000, 20, 0, 60, 40);
                break;
            case "Ranger":
                player = new Player(classType, 700, 50, 0, 50, 80);
                break;
            case "Magician":
                player = new Player(classType, 650, 40, 100, 50, 50);
                break;
        }
        let getInterface = document.querySelector(".character");
        getInterface.innerHTML = `<div><img src="assets/images/${classType.toLowerCase()}.png" alt="Character img" class="character-image"><h2>${classType}</h2><p class="player-health">Health: ${player.health}</p><p>Speed: ${player.speed}</p><p>Magic: ${player.magic}</p><p>Stamina: ${player.stamina}</p>`;

        let getArena = document.querySelector(".arena");
        getArena.innerHTML = `<a href='index.html'><button class="fight-btn">Choose Again?</button></a></div>`;
    },
    setPreFight: function () {
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");

        getActions.innerHTML = `<div><button class='fight-btn'><a href='#' onclick='GameManager.setFight()'>Do you choose this Hero?</a></button></div>`;
    },
    setFight: function () {
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        let getInterface = document.querySelector(".character");
        /* creating enemies */
        let enemy01 = new Enemy("Dark-Ranger", 700, 50, 0, 50, 80);
        let enemy02 = new Enemy("Dark-Warrior", 1000, 20, 0, 60, 40);
        let enemy03 = new Enemy("Dark-Magician", 60, 40, 100, 50, 50);

        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(3));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy01;
                break;
            case 1:
                enemy = enemy02;
                break;
            case 2:
                enemy = enemy03;

                break;
        }
        getActions.innerHTML = '<a href="#" onclick="PlayerMoves.calcAttack()">Attack!</a>';
        getArena.innerHTML = `<div><img src="assets/images/${enemy.enemyType.toLowerCase()}.png" alt="Character img" class="character-image"><h2>${enemy.enemyType}</h2><p class="enemy-health">Health: ${enemy.health}</p><p>Speed: ${enemy.speed}</p><p>Magic: ${enemy.magic}</p><p>Stamina: ${enemy.stamina}</p></div>`;
    }
}