let player;

function Player(classType, health, speed, magic, stamina, agility) {
    this.classType = classType;
    this.health = health;
    this.speed = speed;
    this.magic = magic;
    this.stamina = stamina;
    this.agility = agility;
}

// Calculating how the fight will work

let PlayerMoves = {
    calcAttack: function () {
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

        //Calculating Player Damage 
        let playerAttack = function () {
            let calcBaseDamage;
            if (player.magic > 0) {
                calcBaseDamage = player.stamina * player.magic / 100 + 10;
            } else {
                calcBaseDamage = player.stamina * player.speed / 100 + 10;
            }

            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;

            //Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }

        //Calculating Enemy Damage 
        let enemyAttack = function () {
            let calcBaseDamage;
            if (enemy.magic > 0) {
                calcBaseDamage = enemy.stamina * enemy.magic / 100 + 10; 
            } else {
                calcBaseDamage = enemy.stamina * enemy.speed / 100 + 10;
            }

            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;

            //Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }


        // Getting player/Enemy health
        let getPlayerHealth = document.querySelector(".player-health");
        let getEnemyHealth = document.querySelector(".enemy-health");


        //Initiate the fight! 
        if (getPlayerSpeed >= getEnemySpeed) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert(`You hit ${playerAttackValues[0]} damage ${playerAttackValues[1]} times.`);
            if (enemy.health <= 0) {
                alert("You win!");
                getPlayerHealth.innerHTML = `Health: ${player.health}`;
                getEnemyHealth.innerHTML = `Health: 0`;
            } else {
                getEnemyHealth.innerHTML = `Health ${enemy.health}`;

                //Enemy Will Attack
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert(`Enemy hit ${enemyAttackValues[0]} damage ${enemyAttackValues[1]} times.`);
                if (player.health <= 0) {
                    alert("You Loose!");
                    getPlayerHealth.innerHTML = `Health: 0`;
                    getEnemyHealth.innerHTML = `Health: ${enemy.health}`;
                } else {
                    getPlayerHealth.innerHTML = `Health: ${player.health}`;
                }

            }
        }
    }
}