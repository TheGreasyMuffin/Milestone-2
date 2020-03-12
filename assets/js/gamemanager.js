let GameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function (classType) {
        switch (classType) {
            case "Warrior":
                player = new Player(classType, 600, 50, 0, 50, 50);
                break;
            case "Ranger":
                player = new Player(classType, 600, 50, 0, 50, 50);
                break;
            case "Magician":
                player = new Player(classType, 600, 50, 100, 50, 50);
                break;
        }
        let getInterface = document.querySelector(".character");
        getInterface.innerHTML = `<div><img src="assets/images/${classType.toLowerCase()}.png" alt="Character img" class="character-image"><h2>${classType}</h2><p class="player-health">Health: ${player.health}</p><p>Speed: ${player.speed}</p><p>Magic: ${player.magic}</p><p>Stamina: ${player.stamina}</p>`;

        let getActions = document.querySelector(".actions");
        getActions.innerHTML = `<div><a href='index.html' class="choice-btn">Choose Again?</a></div><div><a href='#' onclick='GameManager.setFight()'>Choose this Hero?</a></div>`;

    },
    setPreFight: function () {
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");


    },
    setFight: function () {
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");
        let getInterface = document.querySelector(".character");
        /* creating enemies */
        let enemy01 = new Enemy("Dark-Ranger", 600, 50, 0, 50, 50);
        let enemy02 = new Enemy("Dark-Warrior", 600, 50, 0, 50, 50);
        let enemy03 = new Enemy("Dark-Magician", 600, 50, 0, 50, 50);

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
        getActions.innerHTML = '<a href="#" onclick="PlayerMoves.calcAttack()"><div class="attack-btn">Attack!</div></a>';
        getArena.innerHTML = `<div><img src="assets/images/${enemy.enemyType.toLowerCase()}.png" alt="Character img" class="character-image"><h2>${enemy.enemyType}</h2><p class="enemy-health">Health: ${enemy.health}</p><p>Speed: ${enemy.speed}</p><p>Magic: ${enemy.magic}</p><p>Stamina: ${enemy.stamina}</p></div>`;
    }
}