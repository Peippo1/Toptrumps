
const button1 = document.getElementById("generateCard1");
const button2 = document.getElementById("generateCard2");
const pokeName1 = document.getElementById("name1");
const pokeHp1 = document.getElementById("hp1");
const pokeAttack1 = document.getElementById("attack1");
const pokeDefence1 = document.getElementById("defence1");
const pokeSpecialAttack1 = document.getElementById("specialAttack1");
const pokeSpecialDefence1 = document.getElementById("specialDefence1");
const pokeSpeed1 = document.getElementById("speed1");
const pokeName2 = document.getElementById("name2");
const pokeHp2 = document.getElementById("hp2");
const pokeAttack2 = document.getElementById("attack2");
const pokeDefence2 = document.getElementById("defence2");
const pokeSpecialAttack2 = document.getElementById("specialAttack2");
const pokeSpecialDefence2 = document.getElementById("specialDefence2");
const pokeSpeed2 = document.getElementById("speed2");
button1.addEventListener("click", () => {
  
const randomNumber = Math.floor(Math.random() * 100)
const data = fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}/`)
.then((Response) => Response.json())
.then ((data) => {
  
  const name1 = data.name
  const hp1 = data.stats[0].base_stat
  const attack1 = data.stats[1].base_stat
  const defence1 = data.stats[2].base_stat
  const specialAttack1 = data.stats[3].base_stat
  const specialDefence1 = data.stats[4].base_stat
  const speed1 = data.stats[5].base_stat
  pokeName1.innerHTML = name1;
  pokeHp1.innerHTML = hp1;
  pokeAttack1.innerHTML = attack1;
  pokeDefence1.innerHTML = defence1;
  pokeSpecialAttack1.innerHTML = specialAttack1;
  pokeSpecialDefence1.innerHTML = specialDefence1;
  pokeSpeed1.innerHTML = speed1;
  
  console.log(name1, hp1, attack1, defence1, specialAttack1, specialDefence1, speed1);
});
})
button2.addEventListener("click", () => {
const randomNumber2 = Math.floor(Math.random() * 100)
const data2 = fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber2}/`)
.then((Response) => Response.json())
.then ((data2) => {
  const name2 = data2.name
  const hp2 = data2.stats[0].base_stat
  const attack2 = data2.stats[1].base_stat
  const defence2 = data2.stats[2].base_stat
  const specialAttack2 = data2.stats[3].base_stat
  const specialDefence2 = data2.stats[4].base_stat
  const speed2 = data2.stats[5].base_stat
  pokeName2.innerHTML = name2;
  pokeHp2.innerHTML = hp2;
  pokeAttack2.innerHTML = attack2;
  pokeDefence2.innerHTML = defence2;
  pokeSpecialAttack2.innerHTML = specialAttack2;
  pokeSpecialDefence2.innerHTML = specialDefence2;
  pokeSpeed2.innerHTML = speed2;
  console.log(name2, hp2, attack2, defence2, specialAttack2, specialDefence2, speed2);
});
})


// card1.addEventListener("click", () => {
//     card2.classList.toggle("hide");
//   });