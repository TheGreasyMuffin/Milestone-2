let player;

function Player(classType, health, speed, magic, stamina) {
    this.classType = classType;
    this.health = health;
    this.speed = speed;
    this.magic = magic;
    this.stamina = stamina;
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
                calcBaseDamage = player.stamina * player.magic / 1000;
            } else {
                calcBaseDamage = player.stamina * player.speed / 1000;
            }

            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;

            //Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.speed / 10) / 2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }

        //Calculating Enemy Damage 
        let enemyAttack = function () {
            let calcBaseDamage;
            if (enemy.magic > 0) {
                calcBaseDamage = enemy.stamina * enemy.magic / 1000;
            } else {
                calcBaseDamage = enemy.stamina * enemy.speed / 1000;
            }

            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;

            //Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.speed / 10)) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }

        let getPlayerHealth = document.querySelector(".player-health");
        let getEnemyHealth = document.querySelector(".enemy-health");

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
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                enemy.health = player.health - totalDamage;
                alert(`You hit ${enemyAttackValues[0]} damage ${enemyAttackValues[1]} times.`);
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