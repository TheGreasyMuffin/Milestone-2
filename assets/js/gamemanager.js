let GameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function (classType) {
        switch (classType) {
            case "Warrior":
                player = new Player(classType, 200, 20, 0, 50);
                break;
            case "Ranger":
                player = new Player(classType, 150, 80, 0, 100);
                break;
            case "Magician":
                player = new Player(classType, 100, 40, 50, 50);
                break;
        }
        let getInterface = document.querySelector(".character");
        getInterface.innerHTML = "<div><img src='assets/images/" + classType.toLowerCase() + ".png' alt='Character img' class='character-image'><h2>" + classType + "</h2><p>Health: " + player.health + "</p><p>Speed: " + player.speed + "</p><p>Magic: " + player.magic + "</p><p>Stamina: " + player.stamina + "</p></div><a href='" + classType.toLowerCase() + ".html'><button>Do You Choose The "+ classType +"</button><a href='index.html'><button>Choose Again?</button></a>"; 
    },
    setPreFight: function () {

    }
}