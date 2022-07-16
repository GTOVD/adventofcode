// console.time("PageLoadTime");

// const getDataFromFile = async (url: string): Promise<string> => {
//     try {
//         const response: Response = await fetch(url)
//         let textFromFile: string = await response.text()
//         return textFromFile
//     } catch(err: any) {
//         console.error(err)
//         return err
//     } 
// }

// const getSentence = (data: string): string[] => {
//     const sentence: string[] = (data.split("\n"))
//     return sentence;
// }

// const getNumbers = (data: string[]): number[][]  => {
//     const numberStr: string[][] = data.map((line: string) => {
//     return <string[]>line.match(/-?\d+/g)
//     })
//     const numbers: number[][] = numberStr.map((num: string[]): number[]=> num.map(Number))
//     return numbers
// }

//  const getSolution = (data: number[][]): number => {
//      let solution: number = 0
//      const ingredientsMax: number = 100
//      let ingredientCount: number = 0
//      let answers: any = []
//      let total = 0, capacityMax: any = 0, durabilityMax: any = 0, flavorMax: any = 0, textureMax: any = 0, caloriesMax = 0
//      for(let i: number = 1; i < ingredientsMax; i++) {
//         ingredientCount = ingredientsMax - i - data.length-2
//         answers = data.map((value: any) => {
//             value = value.map((element: any)=>{
//                 element = parseInt(element) * ingredientCount
//                 return element
//             })
//             ingredientCount = ingredientsMax - ingredientCount - data.length-2
//             return value
//         })
//         capacityMax = answers.map((index: any) => {
//             let capacity: any = index.slice(0,1)
//             return capacity
//         })
//         durabilityMax = answers.map((index: any) => {
//             let durability: any = index.slice(1,2)
//             return durability
//         })
//         flavorMax = answers.map((index: any) => {
//             let flavor: any = index.slice(2,3)
//             return flavor
//         })
//         textureMax = answers.map((index: any) => {
//             let texture: any = index.slice(3,4)
//             return texture
//         })
//         capacityMax = capacityMax.reduce((a: any, b: any)=> {
//             return ((parseInt(a)+parseInt(b)) < 0) ? 1 : parseInt(a)+parseInt(b)
//         })
//         durabilityMax = durabilityMax.reduce((a: any, b: any)=> {
//             return ((parseInt(a)+parseInt(b)) < 0) ? 1 : parseInt(a)+parseInt(b)
//         })
//         flavorMax = flavorMax.reduce((a: any, b: any)=> {
//             return ((parseInt(a)+parseInt(b)) < 0) ? 1 : parseInt(a)+parseInt(b)
//         })
//         textureMax = textureMax.reduce((a: any, b: any)=> {
//             return ((parseInt(a)+parseInt(b)) < 0) ? 1 : parseInt(a)+parseInt(b)
//         })
//         total = parseInt(capacityMax)*parseInt(durabilityMax)*parseInt(flavorMax)*parseInt(textureMax)
//         if(total>solution) solution = total
//     }
//     return solution
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
//     const dataURL: string = 'http://localhost:3000/data.txt'
//     const dataString: string = await getDataFromFile(dataURL)
//     const dataSentences: string[] = getSentence(dataString)
//     const dataNumbers: number[][] = getNumbers(dataSentences)
//     const answer: number = getSolution(dataNumbers)
//     displayProblemFunction(dataSentences)
//     displayAnswerFunction(answer)
//     console.log("The Answer is: " + answer)
// } 
// mainFunction()

// ////////////////////////////////////////////////////////////////////////

// const getPermutations = (arr: any) => {
//     const output: any = []
//     const swapInPlace = (arrToSwap: any, indexA: any, indexB: any) => {
//         const temp = arrToSwap[indexA]
//         arrToSwap[indexA] = arrToSwap[indexB]
//         arrToSwap[indexB] = temp
//     }
//     const generate = (n: any, heapArr: any) => {
//         if(n === 1) {
//             output.push(heapArr.slice());
//             return
//         }
//         generate(n-1, heapArr)
//         for(let i = 0; i < n-1; i++) {
//             if(n % 2 === 0) {
//                 swapInPlace(heapArr, i, n-1)
//             } else { 
//                 swapInPlace(heapArr, 0, n-1)
//             }
//             generate(n-1, heapArr)
//         }
//     }
//     generate(arr.length, arr.slice())
//     return output
// }

// console.log(getPermutations([1,2,3]))

// ////////////////////////////////////////////////////////////////////////    
            
// const test: number[][] = [
//     [1,1,1,1],
//     [1,1,1,1]
// ]
// const max: number = 10

// const getNumbersInArrayEqualToMax = (arr: number[][], max: number) => {
//     let number: number[][] = []
//     const lowcal: boolean = false;
//     for(let i =0; i <= max; i++) {
//         for(let j = 0; j <= max; j++) {
//             for(let k = 0; k <= max; k++) {
//                 for(let l = 0; l <= max; l++) {
//                     /*if((i + j + k + l) === max && (3 * i - 3 * j - k) > 0 && (4 * k - 2 * l) > 0 && (2 * k - 3 * i) > 0)*/ number.push([i,j,k,l])
//                 }
//             }
//         }
//     }
//     const combo = number.map(a => a.map((b, i) => arr[i].map((c: number) => c * b)))
//     /*
//     .map(a => a.reduce((r, v) => r.map((a: any, i: any) => a + v[i]), [0, 0, 0, 0, 0]))
//     .filter(a => !lowcal || a[4] === 500)
//     .map(a => a.slice(0, 4)
//     .reduce((r: any, v: any) => r * v, 1))
//     .reduce((r, v) => r > v ? r : v, 0)
//     */

//     console.log(number)
//     console.log(combo)
// }
// console.log(getNumbersInArrayEqualToMax(test, max))

// console.timeEnd("PageLoadTime");
