"use strict";
// let id: number = 5
// let company: string = 'hi'
// let isTrue: boolean = true
// let x: any = 'hello'
// let ids: number[] = [1,2,3,4,5,6]
// //tuple
// let person: [number, string, boolean] = [1, 'brain', true]
// let employee: [number, string][] = [
//     [1, 'brad'],
//     [2,'john'],
//     [3,'jill'],
// ]
// //union
// let pid: string | number = 22
// //Enum
// enum direction1 {
//     up=1,
//     down,
//     left,
//     right
// }
// //object
// const user: {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: 'john'
// }
// //object 2 - used with unions
// type user1 = {
//     id: number,
//     name: string
// }
// const user2: user1 = {
//     id: 1,
//     name: 'john'
// }
// type Point = number | string
// const p1: Point = 1
// //interface
// interface userInterface {
//     readonly id: number,
//     name: string
//     age?: number
// }
// const user3: userInterface = {
//     id: 1,
//     name: 'john'
// }
// //type assertion
// let cid: any = 1
// let customerId = <number>cid // cid as number
// //functions
// function addNum(x: number,y: number): number {
//     return x+y
// }
// //interface functions
// interface MathFunc {
//     (x: number, y: number): number
// }
// const add: MathFunc = (x: number, y: number): number => x+y
// const sub: MathFunc = (x: number, y: number): number => x-y
// //classes
// interface PersonInterface {
//     id: number
//     name: string
//     register(): string
// }
// class Person implements PersonInterface {
//     id: number
//     name: string
//     constructor(id: number, name: string) {
//         this.id = id
//         this.name = name
//     }
//     register() {
//         return `${this.name} is now registered`
//     }
// }
// const brad = new Person(5, 'john')
// //extends - subclasses
// class Employee extends Person {
//     position: string
//     constructor (id: number, name: string, position: string) {
//         super(id, name)
//         this.position = position
//     }
// }
// const emp = new Employee(3, 'joe', 'ceo')
// //generics
// function getArray<T>(items: T[]): T[] {
//     return new Array().concat(items)
// }
// let numArray = getArray<number>([1,2,3,4])
// let strArray = getArray<string>(['brad','joe','jill'])
// numArray.push(5)
// //logs
// console.log(employee)
// console.table(employee)
// console.log(direction1)
// console.log(addNum(1,2))
// console.log(brad.register())
// console.log(emp.name)
// console.log(emp.register())
// // /*
// //  ********************************
// //  * Track Page Load Time
// //  ********************************
// //  */
// //  console.time("PageLoadTime");
// //  /*
// //   ********************************
// //   * Good Coding Example 1
// //   ********************************
// //   */
// //  const foo = {
// //    name: "tom",
// //    age: 33,
// //    nervous: false,
// //  };
// //  const bar = {
// //    name: "joe",
// //    age: 40,
// //    nervous: false,
// //  };
// //  const baz = {
// //    name: "harry",
// //    age: 53,
// //    nervous: true,
// //  };
// //  console.log({ foo, bar, baz });
// //  console.table([foo, bar, baz]);
// //  /*
// //   ********************************
// //   * Good Coding Example 2
// //   ********************************
// //   */
// //  const horse = {
// //    name: "topher",
// //    size: "large",
// //    skills: ["jousting", "racing"],
// //    age: 7,
// //  };
// //  function horseAge(str, age) {
// //    console.trace("horseAge called");
// //    const ageStr = age > 5 ? "old" : "young";
// //    return `${str[0]}${ageStr} at ${age} years`;
// //  }
// //  const bio2 = horseAge`This horse is ${horse.age}`;
// //  console.log(bio2);
// //  /*
// //   ********************************
// //   * Good Coding Example 3
// //   ********************************
// //   */
// //  const turtle = {
// //    name: "turtle",
// //    legs: 4,
// //    shell: true,
// //    type: "amphibious",
// //    meal: 10,
// //    diet: "berries",
// //  };
// //  function feed({ name, meal, diet }) {
// //    return `Feed ${name} ${meal} kilos of ${diet}`;
// //  }
// //  console.log(feed(turtle));
// //  /*
// //   ********************************
// //   * Good Coding Example 4
// //   ********************************
// //   */
// //  const pikachu = { name: "Pikachu" };
// //  const stats = { hp: 40, attack: 60 };
// //  const lv10 = { ...pikachu, ...stats };
// //  const lv11 = { ...pikachu, ...stats, hp: 45 };
// //  let pokemon = ["arbok", "raichu", "sandshrew"];
// //  pokemon = [...pokemon, "bulbasaur", "metapod", "weedle"];
// //  pokemon = ["charmander", ...pokemon, "mew", "mewtwo"];
// //  console.log(pokemon);
// //  console.table({ pikachu, stats, lv10, lv11 });
// //  /*
// //   ********************************
// //   * Good Coding Example 5
// //   ********************************
// //   */
// //  const orders = [500, 30, 99, 15, 223];
// //  const total = orders.reduce((acc, cur) => acc + cur);
// //  const withTax = orders.map((v) => v * 1.1);
// //  const highValue = orders.filter((v) => v > 100);
// //  console.table({ orders, total, withTax, highValue });
// //  console.table([orders, total, withTax, highValue]);
// //  /*
// //   ********************************
// //   * Good Coding Example 6
// //   ********************************
// //   */
// //  const random = () => {
// //    return Promise.resolve(Math.random());
// //  };
// //  const sumRandomAsyncNums = async () => {
// //    const first = await random();
// //    const second = await random();
// //    const third = await random();
// //    console.log(`Result ${first + second + third}`);
// //  };
// //  sumRandomAsyncNums();
// //  /*
// //   ********************************
// //   * Good Coding Example 7
// //   ********************************
// //   */
// //  for (const [key, value] of Object.entries(turtle)) {
// //    console.log(`${key} => ${value}`);
// //  }
// //  /*
// //   ********************************
// //   * Track Page Load Time
// //   ********************************
// //   */
// //  console.timeEnd("PageLoadTime");
