const ATTACK_VALUE = 10; //maximum dmg
const MONSTER_ATTACK_VALUE = 14; //maximum dmg

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if(currentMonsterHealth <= 0) {
    alert('You win!');
  } else if (currentPlayerHealth <= 0) {
    alert('You lose!');
  }
}

attackBtn.addEventListener('click', attackHandler);
