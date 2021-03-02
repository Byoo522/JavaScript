const ATTACK_VALUE = 10; //maximum dmg
const STRONG_ATTACK_VALUE = 17; // maximum dmg
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
  if(currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You win!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lose!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw!');
  }
}

function StrongAttackHandler() {
  const damage = dealMonsterDamage(STRONG_ATTACK_VALUE);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  if(currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You win!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You lose!');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
    alert('You have a draw!');
  }
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', StrongAttackHandler)
