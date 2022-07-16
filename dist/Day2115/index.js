"use strict";
// console.time("PageLoadTime");
// type Stats = {
//     cost: number;
//     damage: number;
//     armor: number;
//     amount: number;
// };
// type weapon = {
//     dagger: Stats;
//     shortsword: Stats;
//     warhammer: Stats;
//     longsword: Stats;
//     greataxe: Stats;
// };
// type armor = {
//     leather: Stats;
//     chainmail: Stats;
//     splintmail: Stats;
//     bandedmail: Stats;
//     platemail: Stats;
// };
// type rings = {
//     damage1: Stats;
//     damage2: Stats;
//     damage3: Stats;
//     defense1: Stats;
//     defense2: Stats;
//     defense3: Stats;
// };
// interface shop_interface {
//     weapons: weapon;
//     armors: armor;
//     rings: rings;
//     getDamage(): number;
//     getArmor(): number;
//     getGold(): number;
// }
// class Shop implements shop_interface {
//     weapons: weapon = {
//         dagger: {
//             cost: 8,
//             damage: 4,
//             armor: 0,
//             amount: 0,
//         },
//         shortsword: {
//             cost: 10,
//             damage: 5,
//             armor: 0,
//             amount: 0,
//         },
//         warhammer: {
//             cost: 25,
//             damage: 6,
//             armor: 0,
//             amount: 0,
//         },
//         longsword: {
//             cost: 40,
//             damage: 7,
//             armor: 0,
//             amount: 0,
//         },
//         greataxe: {
//             cost: 74,
//             damage: 8,
//             armor: 0,
//             amount: 0,
//         },
//     };
//     armors: armor = {
//         leather: {
//             cost: 13,
//             damage: 0,
//             armor: 1,
//             amount: 0,
//         },
//         chainmail: {
//             cost: 31,
//             damage: 0,
//             armor: 2,
//             amount: 0,
//         },
//         splintmail: {
//             cost: 53,
//             damage: 0,
//             armor: 3,
//             amount: 0,
//         },
//         bandedmail: {
//             cost: 75,
//             damage: 0,
//             armor: 4,
//             amount: 0,
//         },
//         platemail: {
//             cost: 102,
//             damage: 0,
//             armor: 5,
//             amount: 0,
//         },
//     };
//     rings: rings = {
//         damage1: {
//             cost: 25,
//             damage: 1,
//             armor: 0,
//             amount: 0,
//         },
//         damage2: {
//             cost: 50,
//             damage: 2,
//             armor: 0,
//             amount: 0,
//         },
//         damage3: {
//             cost: 100,
//             damage: 3,
//             armor: 0,
//             amount: 0,
//         },
//         defense1: {
//             cost: 20,
//             damage: 0,
//             armor: 1,
//             amount: 0,
//         },
//         defense2: {
//             cost: 40,
//             damage: 0,
//             armor: 2,
//             amount: 0,
//         },
//         defense3: {
//             cost: 80,
//             damage: 0,
//             armor: 3,
//             amount: 0,
//         },
//     };
//     constructor(
//         dagger: number,
//         shortsword: number,
//         warhammer: number,
//         longsword: number,
//         greataxe: number,
//         leather: number,
//         chainmail: number,
//         splintmail: number,
//         bandedmail: number,
//         platemail: number,
//         damage1: number,
//         damage2: number,
//         damage3: number,
//         defense1: number,
//         defense2: number,
//         defense3: number
//     ) {
//         this.weapons.dagger.amount = dagger;
//         this.weapons.shortsword.amount = shortsword;
//         this.weapons.warhammer.amount = warhammer;
//         this.weapons.longsword.amount = longsword;
//         this.weapons.greataxe.amount = greataxe;
//         this.armors.leather.amount = leather;
//         this.armors.chainmail.amount = chainmail;
//         this.armors.splintmail.amount = splintmail;
//         this.armors.bandedmail.amount = bandedmail;
//         this.armors.platemail.amount = platemail;
//         this.rings.damage1.amount = damage1;
//         this.rings.damage2.amount = damage2;
//         this.rings.damage3.amount = damage3;
//         this.rings.defense1.amount = defense1;
//         this.rings.defense2.amount = defense2;
//         this.rings.defense3.amount = defense3;
//     }
//     getDamage = (): number => {
//         let total_damage: number = 0;
//         for (const [key, value] of Object.entries(this.weapons)) {
//             if (value.amount > 0) {
//                 total_damage += value.damage;
//             }
//         }
//         for (const [key, value] of Object.entries(this.rings)) {
//             if (value.amount > 0) {
//                 total_damage += value.damage;
//             }
//         }
//         return total_damage;
//     };
//     getArmor = (): number => {
//         let total_armor: number = 0;
//         for (const [key, value] of Object.entries(this.armors)) {
//             if (value.amount > 0) {
//                 total_armor += value.armor;
//             }
//         }
//         for (const [key, value] of Object.entries(this.rings)) {
//             if (value.amount > 0) {
//                 total_armor += value.armor;
//             }
//         }
//         return total_armor;
//     };
//     getGold = (): number => {
//         let total_gold: number = 0;
//         for (const [key, value] of Object.entries(this.weapons)) {
//             if (value.amount > 0) {
//                 total_gold += value.cost;
//             }
//         }
//         for (const [key, value] of Object.entries(this.armors)) {
//             if (value.amount > 0) {
//                 total_gold += value.cost;
//             }
//         }
//         for (const [key, value] of Object.entries(this.rings)) {
//             if (value.amount > 0) {
//                 total_gold += value.cost;
//             }
//         }
//         return total_gold;
//     };
// }
// class NPC {
//     hitpoints: number;
//     damage: number;
//     armor: number;
//     constructor(hitpoints: number, damage: number, armor: number) {
//         this.hitpoints = hitpoints;
//         this.damage = damage;
//         this.armor = armor;
//     }
// }
// const battle = (hero: NPC, boss: NPC): boolean => {
//     let victory: boolean = false;
//     while (boss.hitpoints > 0 && hero.hitpoints > 0) {
//         boss.hitpoints =
//             boss.hitpoints -
//             (hero.damage - boss.armor >= 1 ? hero.damage - boss.armor : 1);
//         // console.log(
//         //     `The player deals ${hero.damage}-${boss.armor} = ${
//         //         hero.damage - boss.armor
//         //     } damage; the boss goes down to ${
//         //         boss.hitpoints > 0 ? boss.hitpoints : 0
//         //     } hit points.`
//         // );
//         if (boss.hitpoints > 0) {
//             hero.hitpoints =
//                 hero.hitpoints -
//                 (boss.damage - hero.armor >= 1 ? boss.damage - hero.armor : 1);
//             // console.log(
//             //     `The boss deals ${boss.damage}-${hero.armor} = ${
//             //         boss.damage - hero.armor
//             //     } damage; the player goes down to ${
//             //         hero.hitpoints > 0 ? hero.hitpoints : 0
//             //     } hit points.`
//             // );
//         } else {
//             victory = true;
//         }
//     }
//     return victory;
// };
// const permutator = (inputArr: number[]): number[][] => {
//     let result: number[][] = [];
//     const permute = (arr: number[], m: number[] = []) => {
//         if (arr.length === 0) {
//             result.push(m);
//         } else {
//             for (let i = 0; i < arr.length; i++) {
//                 let current: number[] = arr.slice();
//                 let next: number[] = current.splice(i, 1);
//                 permute(current.slice(), m.concat(next));
//             }
//         }
//     };
//     permute(inputArr);
//     return result;
// };
// const mainFunction = (): void => {
//     let weapons: [number, number, number, number, number] = [1, 0, 0, 0, 0];
//     let armors: [number, number, number, number, number] = [0, 0, 0, 0, 0];
//     let rings: [number, number, number, number, number, number] = [
//         0, 0, 0, 0, 0, 0,
//     ];
//     let shop: [
//         number,
//         number,
//         number,
//         number,
//         number,
//         number,
//         number,
//         number,
//         number,
//         number,
//         number,
//         number,
//         number,
//         number,
//         number,
//         number
//     ] = [...weapons, ...armors, ...rings];
//     const answers: number[] = [];
//     let weapon_index = 0;
//     let armor_index = 0;
//     let ring1_index = 0;
//     let round = 0;
//     let skip = false;
//     while (true) {
//         if (rings[ring1_index] === 0) {
//             const new_hero_inventory = new Shop(
//                 ...weapons,
//                 ...armors,
//                 ...rings
//             );
//             const hero = new NPC(
//                 100,
//                 new_hero_inventory.getDamage(),
//                 new_hero_inventory.getArmor()
//             );
//             const boss = new NPC(100, 8, 2);
//             let can_win = battle(hero, boss);
//             if (!can_win) answers[round++] = new_hero_inventory.getGold();
//         } else {
//             const equipedRings = permutator(rings);
//             equipedRings.forEach((ring) => {
//                 const new_hero_inventory = new Shop(
//                     ...weapons,
//                     ...armors,
//                     ...(<[number, number, number, number, number, number]>ring)
//                 );
//                 const hero = new NPC(
//                     100,
//                     new_hero_inventory.getDamage(),
//                     new_hero_inventory.getArmor()
//                 );
//                 const boss = new NPC(100, 8, 2);
//                 let can_win = battle(hero, boss);
//                 if (!can_win) answers[round++] = new_hero_inventory.getGold();
//             });
//         }
//         weapon_index = weapons.indexOf(1);
//         if (weapon_index !== -1) weapons[weapon_index] = 0;
//         else weapon_index = 0;
//         if (weapon_index >= weapons.length - 1) {
//             weapon_index = 0;
//             weapons[weapon_index] = 1;
//             if (armors.includes(1)) {
//                 armor_index = armors.indexOf(1);
//                 armors[armor_index] = 0;
//                 if (armor_index >= armors.length - 1) {
//                     skip = true;
//                     armor_index = 0;
//                     if (rings[ring1_index + 1] === 1) {
//                         break;
//                     }
//                     if (rings[ring1_index] === 1) {
//                         rings[ring1_index + 1] = 1;
//                     }
//                     rings[ring1_index] = 1;
//                 }
//                 if (!skip) {
//                     armors[armor_index + 1] = 1;
//                 } else skip = false;
//             } else armors[armor_index] = 1;
//         } else weapons[weapon_index + 1] = 1;
//     }
//     console.log(Math.max(...answers));
//     console.log(answers);
// };
// mainFunction();
// console.timeEnd("PageLoadTime");
