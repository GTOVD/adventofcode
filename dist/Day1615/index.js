"use strict";
// console.time("PageLoadTime");
// const getDataFromFile = async (): Promise<string> => {
//     const response = await fetch('./data.txt')
//     let textFromFile: string = await response.text()
//     return textFromFile
// }
// const getSentence = (data: string): string[] => {
//     const sentence: string[] = (data.split("\n"))
//     return sentence;
// }
// const getData = (data: string[]): string[][] => {
//     const auntSueData: string[][] = data.map((line: string) => <string[]>line.match(/\w+:\s\d/g))
//     return auntSueData
// }
// const getSolution = (data: string[][]): number => {
//     const arrayKeys: string[] = [
//         'children',
//         'cats',
//         'samoyeds',
//         'pomeranians',
//         'tas',
//         'vias',
//         'trees',
//         'cars',
//         'perfumes'
//     ] 
//     type auntSueObject  = { [X: typeof arrayKeys[number]]: number
//         // 'children'?: number,
//         // 'cats'?: number,
//         // 'samoyeds'?: number,
//         // 'pomeranians'?: number,
//         // 'akitas'?: number,
//         // 'vizslas'?: number,
//         // 'goldfish'?: number,
//                         // 'trees'?: number,
//         // 'cars'?: number,
//         // 'perfumes'?: number
//     }
//     const correctAuntSue: auntSueObject = {
//         'children': 3,
//         'cats': 7,
//         'samoyeds': 2,
//         'pomeranians': 3,
//         'akitas': 0,
//         'vizslas': 0,
//         'goldfish': 5,
//         'trees': 3,
//         'cars': 2,
//         'perfumes': 
//     }
//     const scoresOfAuntSues = (): number => { 
//         let targetAuntID = -1
//         data.forEach((element: string[], index) => {
//             // let testAuntSue: auntSueObject = {}
//             // let validAunt: boolean = true
//             // const testAuntSueData2: {[x:string]: number}[] = element.map((element2: string)=>{return{[`${element2.match(/\w+/)}`]: Number(element2.match(/\d/))}}).forEach((element) => testAuntSue[Object.keys(element)[0]] = Object.values(element)[0] ).forEach(({key,value})=> testAuntSue.forEach(({testKey, testValue}) => if(key === testKey && value !== testValue) validAunt = false))
//             // if(validAunt) targetAuntID = index+1
//             const testAuntSueData: {[x:string]: number}[] = element.map((element2: string) => {
//                 return { [`${element2.match(/\w+/)}`]: Number(element2.match(/\d/)) }
//             })
//             let testAuntSue: auntSueObject = {}
//             testAuntSueData.forEach((element) => {
//                 testAuntSue[Object.keys(element)[0]] = Object.values(element)[0]
//                 // if(element.children) {
//                 //     testAuntSue.children = element.children
//                 //     //testAuntSue[key] = value
//                 // }
//                 // if(element.cats) {
//                 //     testAuntSue.cats = element.cats
//                 // }
//                 // if(element.samoyeds) {
//                 //     testAuntSue.samoyeds = element.samoyeds
//                 // }
//                 // if(element.pomeranians) {
//                 //     testAuntSue.pomeranians = element.pomeranians
//                 // }
//                 // if(element.akitas) {
//                 //     testAuntSue.akitas = element.akitas
//                 // }
//                 // if(element.vizslas) {
//                 //     testAuntSue.vizslas = element.vizslas
//                 // }
//                 // if(element.goldfish) {
//                 //     testAuntSue.goldfish = element.goldfish
//                 // }
//                 // if(element.trees) {
//                 //     testAuntSue.trees = element.trees
//                 // }
//                 // if(element.cars) {
//                 //     testAuntSue.cars = element.cars
//                 // }
//                 // if(element.perfumes) {
//                 //     testAuntSue.perfumes = element.perfumes
//                 // }
//             })
//             //let scores: number[] = []
//             let validAunt: boolean = true
//             for(const [key, value] of Object.entries(correctAuntSue)) {
//                 //let score: number = 0
//                 for(const [testKey, testValue] of Object.entries(testAuntSue)) {
//                     if(key === testKey && value !== testValue) { 
//                         validAunt = false
//                     }
//                     // if(key === testKey && value === testValue) {
//                     //     score = score + 1
//                     //     scores.push(score)
//                     // } else if(key === testKey && value !== testValue) { 
//                     //     score = score - 5 
//                     //     scores.push(score)
//                     // }
//                 }
//             }
//             if(validAunt) targetAuntID = index+1
//             //return scores
//         })
//         return targetAuntID
//     }
//     return scoresOfAuntSues()
//     // const sumOfScores: number[] = scoresOfAuntSues.map(element => {
//     //     let sum: number = element.reduce((a,b)=> a+b)
//     //     return sum
//     // })
//     // const topScore: number = Math.max(...sumOfScores)
//     // const index: number = sumOfScores.indexOf(topScore)
//     // return index+1
// }
// const displayProblemFunction = (lines: any): void => {
//     const app: HTMLElement | null = document.getElementById("app")
//     for (const value of lines) {
//         const displayText: HTMLHeadElement = document.createElement("h2")
//         displayText.textContent = value
//         app?.appendChild(displayText)
//     }
// }
// const displayAnswerFunction = (solution: number): void => {
//     const app: HTMLElement | null = document.getElementById("app")
//     const displayText: HTMLHeadElement = document.createElement("h2")
//     displayText.textContent = solution.toString()
//     app?.appendChild(displayText)
// }
// const mainFunction = async () => {
//     const dataString: string = await getDataFromFile()
//     const dataSentences: string[] = getSentence(dataString)
//     const sueData: string[][] = getData(dataSentences)
//     const answer: number = getSolution(sueData)
//     displayProblemFunction(dataSentences)
//     displayAnswerFunction(answer)
//     console.log("The Answer is: " + answer)
// } 
// mainFunction()
// console.timeEnd("PageLoadTime");
