"use strict";
// console.time("PageLoadTime");
// const mainFunction = (): void => {
//     class Player {
//         health = 50;
//         armor = 0;
//         mana = 500;
//         totalMana = 0;
//     }
//     class Boss {
//         health = 58;
//         damage = 9;
//     }
//     const magicMissle = {
//         name: "magic missle",
//         manaCost: 53,
//         damage: 4,
//     };
//     const drain = {
//         name: "drain",
//         manaCost: 73,
//         damage: 2,
//         heal: 2,
//     };
//     let shield = {
//         name: "shield",
//         manaCost: 113,
//         tempHealth: 7,
//         turns: 6,
//         used: false,
//     };
//     let posion = {
//         name: "posion",
//         manaCost: 173,
//         damage: 3,
//         turns: 6,
//         used: false,
//     };
//     let recharge = {
//         name: "recharge",
//         manaCost: 229,
//         mana: 101,
//         turns: 5,
//         used: false,
//     };
//     const getSpell = () => {
//         const spells = [magicMissle, drain, shield, posion, recharge];
//         return spells[Math.floor(Math.random() * (4 - 0 + 1) + 0)];
//     };
//     const castSpell = (player: any, boss: any, spell: any) => {
//         if (player.mana - spell.manaCost <= 0) {
//             // console.log(`Player cannot cast spell: ${spell.name}`);
//             return false;
//         } else {
//             if (
//                 spell === magicMissle &&
//                 player.mana - magicMissle.manaCost >= 0
//             ) {
//                 // console.log(
//                 //     `Player casts Magic Missile, dealing ${magicMissle.damage} damage.`
//                 // );
//                 player.mana -= magicMissle.manaCost;
//                 boss.health -= magicMissle.damage;
//                 player.totalMana += magicMissle.manaCost;
//                 return true;
//             }
//             if (spell === drain && player.mana - drain.manaCost >= 0) {
//                 // console.log(
//                 //     `Player casts Drain, dealing ${drain.damage} damage, and healing ${drain.heal} hit points.`
//                 // );
//                 player.mana -= drain.manaCost;
//                 boss.health -= drain.damage;
//                 player.health += drain.heal;
//                 player.totalMana += drain.manaCost;
//                 return true;
//             }
//             if (
//                 spell === shield &&
//                 player.mana - shield.manaCost >= 0 &&
//                 !shield.used
//             ) {
//                 // console.log(`Player casts shield.`);
//                 shield.used = true;
//                 player.mana -= shield.manaCost;
//                 player.totalMana += shield.manaCost;
//                 return true;
//             } else if (spell === shield && shield.used) {
//                 return false;
//             }
//             if (
//                 spell === posion &&
//                 player.mana - posion.manaCost >= 0 &&
//                 !posion.used
//             ) {
//                 // console.log(`Player casts Poison.`);
//                 posion.used = true;
//                 player.mana -= posion.manaCost;
//                 player.totalMana += posion.manaCost;
//                 return true;
//             } else if (spell === posion && posion.used) {
//                 return false;
//             }
//             if (
//                 spell === recharge &&
//                 player.mana - recharge.manaCost >= 0 &&
//                 !recharge.used
//             ) {
//                 // console.log(`Player casts recharge.`);
//                 recharge.used = true;
//                 player.mana -= recharge.manaCost;
//                 player.totalMana += recharge.manaCost;
//                 return true;
//             } else if (spell === recharge && recharge.used) {
//                 return false;
//             }
//             return false;
//         }
//     };
//     const activeSpell = (player: any, boss: any) => {
//         if (shield.used) {
//             shield.turns--;
//             // console.log(`Shield's timer is now ${shield.turns}.`);
//             player.armor = shield.tempHealth;
//             if (shield.turns <= 0) {
//                 shield.used = false;
//                 player.armor = 0;
//                 shield.turns = 6;
//             }
//         }
//         if (posion.used) {
//             posion.turns--;
//             // console.log(
//             //     `Poison deals ${posion.damage} damage; its timer is now ${posion.turns}.`
//             // );
//             boss.health -= posion.damage;
//             if (posion.turns <= 0) {
//                 posion.used = false;
//                 posion.turns = 6;
//             }
//         }
//         if (recharge.used) {
//             recharge.turns--;
//             // console.log(
//             //     `Recharge provides ${recharge.mana} mana; its timer is now ${recharge.turns}.`
//             // );
//             player.mana += recharge.mana;
//             if (recharge.turns <= 0) {
//                 recharge.used = false;
//                 recharge.turns = 5;
//             }
//         }
//     };
//     const battle = (player: any, boss: any) => {
//         let battle = true;
//         let castSuccessful = false;
//         let counter = 0;
//         let turn = 0;
//         while (battle) {
//             // console.log("%c-- Player turn --", "color:blue");
//             // console.log(
//             //     `- Player has ${player.health} hit points, ${player.armor} armor, ${player.mana} mana`
//             // );
//             // console.log(`- Boss has ${boss.health} hit points`);
//             activeSpell(player, boss);
//             while (!castSuccessful) {
//                 castSuccessful = castSpell(player, boss, getSpell());
//                 if (castSuccessful) break;
//                 counter++;
//                 if (counter > 10) break;
//             }
//             counter = 0;
//             castSuccessful = false;
//             if (boss.health <= 0) {
//                 battle = false;
//                 // console.log("This kills the boss, and the player wins.");
//             } else {
//                 // console.log("%c-- Boss turn --", "color:red");
//                 // console.log(
//                 //     `- Player has ${player.health} hit points, ${player.armor} armor, ${player.mana} mana`
//                 // );
//                 // console.log(`- Boss has ${boss.health} hit points`);
//                 activeSpell(player, boss);
//                 if (boss.health <= 0) {
//                     battle = false;
//                     // console.log("This kills the boss, and the player wins.");
//                 } else {
//                     // console.log(
//                     //     `Boss attacks for ${boss.damage - player.armor} damage.`
//                     // );
//                     player.health -= boss.damage - player.armor;
//                     if (player.health <= 0 || boss.health <= 0) {
//                         battle = false;
//                         // if (boss.health <= 0)
//                         //     console.log(
//                         //         "This kills the boss, and the player wins."
//                         //     );
//                         // if (player.health <= 0)
//                         //     console.log(
//                         //         "This kills the player, and the boss wins."
//                         //     );
//                     }
//                 }
//             }
//             turn++;
//         }
//     };
//     const answers = (): number => {
//         let player = new Player();
//         let boss = new Boss();
//         shield.used = false;
//         shield.turns = 6;
//         posion.used = false;
//         posion.turns = 6;
//         recharge.used = false;
//         recharge.turns = 5;
//         battle(player, boss);
//         // console.log(player.totalMana);
//         if (player.health >= 0 && boss.health <= 0) return player.totalMana;
//         else return 0;
//     };
//     let answer: number[] = [];
//     while (answer.length < 1000000) {
//         answer.push(answers());
//     }
//     console.log(Math.min(...answer.filter((x) => x !== 0)));
// };
// mainFunction();
// console.timeEnd("PageLoadTime");
