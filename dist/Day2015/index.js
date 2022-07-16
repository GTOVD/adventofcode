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
// const getConditions = (data: string[]): string[][] => {
//     const conditions: string[][] = data.map((line: string) => <string[]>line.match(/\w+/g))
//     return conditions
// }
// const part2 = (molecule: string[][], input: string[]): void => {
//     console.log({molecule,input})
//     let tempMo = input[0]
//     let startStr: string[] = ['e']
//     const arrayMo: string[] = <string[]>input[0].match(/([A-Z]([a-z]?))/g)
//     const arrayCompare: string[][] = <string[][]>molecule.map(([a,b])=> {
//         return [a, b.match(/([A-Z]([a-z]?))/g)]
//     })
//     console.log({arrayMo, arrayCompare})
//     let answer: string[][] = arrayCompare.map(([element, ...molecule]) => {
//         let i=0,score=0
//         let newstartStr: string[] = []
//         const newMo: string = molecule[0]
//         if(startStr[i] === element) {
//             newstartStr = [...newMo]
//         }
//         return newstartStr
//     }).filter((x) => x.length > 1)
//     console.log({answer, arrayMo})
//     let loop=0
//     let i = 0
//     while(answer[0] !== arrayMo) {
//         if(answer[0][i] !== arrayMo[i]) {
//             const scoresOfMatch = arrayCompare.map(([a,...b])=> {
//                 let score = 0,k=0
//                 if(answer[0][i] === a /*&& b[k][i] === arrayMo[i]*/) {
//                     b.forEach((x)=>{
//                         for(let z=0; z<x.length; z++){
//                             if(x[z] === arrayMo[i+z]) {
//                                 score++
//                             } 
//                         }
//                     })
//                 }
//                 return score
//             })
//             const indexOfGreatestMatch = scoresOfMatch.indexOf(Math.max(...scoresOfMatch))
//             answer[0].splice(i, 1, ...arrayCompare[indexOfGreatestMatch][1])
//             console.log({scoresOfMatch, indexOfGreatestMatch})
//         }
//         i++
//         console.log(answer[0])
//         loop++
//         if(loop>1000)answer[0] = arrayMo
//     }
//     console.log(answer[0])
//     // ORnPBPMgArCaCaCaSi
//     // HF
//     // ORnFArF
//     // ORnPMgArF
//     // ORnPBFArF
//     // ORnPBPMgArF
//     // ORnPBPMgArCaF
//     // let startStr = 'e', i=0, m=0, count=0, loop=0, done = false
//     // while(loop < 1000/*startStr !== tempMo*/) {
//     //     console.log(startStr)
//     //     if(startStr === molecule[i][0] && done !== true) {
//     //         startStr = molecule[i][1]
//     //         done = true
//     //     }
//     //     console.log({startStr, m})
//     //     if(done === true && startStr.charAt(m) !== tempMo.charAt(m)) {
//     //         const scoresOfMatch = molecule.map(([Mo, match]): number => {
//     //             let score = 0,k=0, weight=100
//     //             if(Mo === startStr.substring(m,m+Mo.length)) {
//     //                 while(k<match.length-1) {
//     //                     if(match.substring(k, k+1) === tempMo.substring(k+m,k+m+1)) {
//     //                         score+=weight
//     //                         k++
//     //                     } else {
//     //                         k++
//     //                         weight-=5
//     //                     }
//     //                     if(match.substring(k, k+1) !== tempMo.substring(k+m,k+m+1)) {
//     //                         let x=0
//     //                         for(let i=0; i<molecule.length-1; i++){
//     //                             if(molecule[i][0] === match.substring(x,x+molecule[i][0].length-1)) {
//     //                             }
//     //                         }
//     //                     }
//     //                 }
//     //             }
//     //             return score
//     //         })
//     //         const indexOfGreatestMatch = scoresOfMatch.indexOf(Math.max(...scoresOfMatch))
//     //         console.log({scoresOfMatch, indexOfGreatestMatch})
//     //         startStr = startStr.substring(0,m) + startStr.substring(m).replace(`${molecule[indexOfGreatestMatch][0]}`,molecule[indexOfGreatestMatch][1])
//     //         count++
//     //         if(startStr.charAt(m) === tempMo.charAt(m))m++
//     //     }
//     //     else if(done === true && startStr.charAt(m) === tempMo.charAt(m)) {
//     //         m++
//     //     }
//     //     i++
//     //     loop++
//     //     if(i>molecule.length-1) i=0
//         // if(startStr.charAt(0) !== tempMo.charAt(0) && done === true) {
//         //     let looop=0
//         //     let j=0, k=0
//         //     while(looop<1000) {
//         //         if(startStr.charAt(k) === molecule[j][0] && (molecule[j][1].charAt(k) === tempMo.charAt(k) && molecule[j][1].charAt(k+1) === tempMo.charAt(k+1))) {
//         //             startStr = startStr.replace(molecule[j][0],molecule[j][1])
//         //             count++
//         //             k++
//         //             j=0
//         //             console.log({startStr,count})
//         //         }
//         //         if(startStr.charAt(k) !== molecule[j][0] && j>molecule.length-2) k++
//         //         looop++
//         //         j++
//         //         if(j>molecule.length-1) j=0
//         //         //console.log({looop, k, count, j})
//         //     }
//         // }
//     // }
//     // console.log(count)
//     // let emo=[],secmo=[],trimo=[]
//     // for(let i=40; i<43;i++){
//     //     emo[i-40] = molecule[i]
//     // }
//     // for(let i=0; i<24;i++){
//     //     secmo[i] = molecule[i]
//     // }
//     // for(let i=25; i<40;i++){
//     //     trimo[i-25] = molecule[i]
//     // }
//     // console.log({emo, secmo, trimo})
//     // let i=0, count = 0, loops=0
//     // while(loops < 10) {
//     //     console.log(tempMo)
//     //     let loop = 0
//     //     let j = 0
//     //     while(loop<100) {
//     //         if(tempMo.replace(trimo[j][1],trimo[j][0]).length < tempMo.length || (tempMo.replace(trimo[j][1],trimo[j][0]).length === tempMo.length && tempMo.replace(trimo[j][1],trimo[j][0]) !== tempMo)) {
//     //             tempMo = tempMo.replace(trimo[j][1],trimo[j][0]); 
//     //             j++
//     //             count++
//     //         } 
//     //         else {j++}
//     //         if(j>trimo.length-1) j=0
//     //         loop++
//     //         console.log({tempMo,count,j,loop})
//     //     }
//     //     let looop = 0
//     //     j = 0
//     //     while(looop<100) {
//     //         if(tempMo.replace(secmo[j][1],secmo[j][0]).length < tempMo.length || (tempMo.replace(secmo[j][1],secmo[j][0]).length === tempMo.length && tempMo.replace(secmo[j][1],secmo[j][0]) !== tempMo)) {
//     //             tempMo = tempMo.replace(secmo[j][1],secmo[j][0]); 
//     //             j++
//     //             count++
//     //         } 
//     //         else {j++}
//     //         if(j>secmo.length-1)j=0
//     //         looop++
//     //         console.log({tempMo,count,j,looop})
//     //         console.log(tempMo)
//     //     }
//     //     console.log(tempMo)
//     //     // if(tempMo.replace(molecule[i][1],molecule[i][0]).length < tempMo.length || 
//     //     // tempMo.replace(molecule[i][1],molecule[i][0])==='e' || 
//     //     // (tempMo.replace(molecule[i][1],molecule[i][0]).length === tempMo.length && 
//     //     // tempMo.replace(molecule[i][1],molecule[i][0]) !== tempMo && 
//     //     // molecule[i][0] !== 'e')) {
//     //     //     tempMo = tempMo.replace(molecule[i][1],molecule[i][0]); 
//     //     //     console.log({tempMo,count})
//     //     //     count++
//     //     // } 
//     //     // else {i++}
//     //     // //console.log(i)
//     //     // if(i>molecule.length-1) i=0
//     //     // if(tempMo === 'e') {
//     //     //     console.log('count: ' + count)
//     //     //     console.log(tempMo)
//     //     //     break;
//     //     // }
//     //     loops++
//     // }
// }
// const getAnswer = (molecule: string[][], input: string[]): number => {
//     console.log({molecule,input})
//     part2(molecule,input)
//     let answer: string[][] = input.map((text)=>{
//         let answer1: string[] = []
//         for(let i = 0; i < text.length; i++) {
//             for( let j = 0; j < molecule.length; j++) {
//                 if(molecule[j][0].includes(text.substring(i, i+molecule[j][0].length))) {
//                    answer1.push(
//                         text.substring(0, i) + 
//                         molecule[j][1] + 
//                         text.substring(i+molecule[j][0].length, text.length)
//                     )
//                 }
//             }
//         }
//         return answer1
//     })
//     const uniqueAnswers = answer.map((elements) => elements.filter((element, index, arr) => arr.indexOf(element) === index))
//     return uniqueAnswers[0].length
// }
// const getSolution = (data: string[][]): number => {
//     const condition: string[][] = <string[][]>data.map((element)=> {
//         if(element.length > 1) {
//             return element
//         }
//     }).filter((element)=>element!==undefined)
//     const input: string[] = <string[]>data.map(([element, index])=> {
//         if(!index) {
//             return element
//         }
//     }).filter((element)=>element!==undefined)
//     return getAnswer(condition, input)
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
//     const conditions: string[][] = getConditions(dataSentences)
//     const answer: number = getSolution(conditions)
//     // displayProblemFunction(dataSentences)
//     displayAnswerFunction(answer)
//     console.log("The Answer is: " + answer)
// }
// mainFunction()
// console.timeEnd("PageLoadTime");
