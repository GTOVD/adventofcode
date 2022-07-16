"use strict";
// console.time("PageLoadTime");
// const mainFunction = (): void => {
//     const input = `...#....#.#...##......#.#...##.
// .#..#...##..#....##........##..
// ..##.##...##.#.#....#..#......#
// ....#....#..#..#.#....#..###...
// ####.....##.#.##...##..#....#..
// #........##...#..###..#.#.#.##.
// .......###........##...#...#...
// #.#...#..#..#...#...##.##......
// ..#...........#......##.#.#....
// #..#.#......##.#...#..#.#..#...
// .#....#....#..#.....#..###..#.#
// .##....................#.###.#.
// ..#......#.#......#..###.......
// #.###..##..###....#........#..#
// .....#...#.......#.#.#...#....#
// ....##..#.##..#.##..#.#....#...
// .#..#..#......#..##.#.#....##.#
// .....#.....#.##...#.#.##.#.....
// .#...#..##.....#.........#.#...
// .....#........#........#..#..#.
// #......##....#..#.#...#...#....
// #......#.#.......##.#..#.#.#...
// ...###...##.#..........#...#...
// ...#.##...#......#.##....#.#...
// #...#.....#........#..#....##.#
// ##.#....##...##.####.##.......#
// ..#..#...#.#.......#.##.#......
// ##.........#.##....#.#...#.....
// ##..#......#....#.....#...#....
// ......##.#.#.....#.#.###...#...
// ##.......#......#.#..#...#.##..
// #....#....#..#.#..#.#..........
// ...#....#.#.#.#.....##.#..#.##.
// ......#.#.#....#...##.#..#.....
// ..##..#.##....#...#.....#..#.##
// .#...#.#.##..##........#.#...#.
// ##.##.##....#.#....##.###......
// #...........#....##..#......#..
// ...##..#.....#....#....#.#..##.
// .#..#.##..##..#.........#.....#
// .##......##.#.#......##....#...
// .....##.#....#...#...........##
// ..#.....#..##...#.#..#.........
// ...#.####..#.###.....#.....##..
// .....#..##..#.###........#.#...
// #..#.#.....#.....#...#...#....#
// .#...........#..#.........##...
// ...#.#.#.......#..............#
// .##.#..#...#........#.##.#.#.#.
// ....#....#.......#......#.#....
// ##.#..##.....##..#...#....#..#.
// #.........#.#..###...#....#..#.
// ....##.###...#........##...#.##
// .#...#..##.##...........##...##
// .....#.##........#.#.......##..
// .....#......#..#..#...#.#...#..
// .....#.....#.#..#.###......####
// ........#.......#...........#..
// ...#.##..#....######..#.#...#..
// #...##...####..##.....##...#...
// .#.......#.###..#.##..#..#.#.#.
// ....#..#....##.....#........#.#
// .#..#....##..#........#...#...#
// #.#..#.#...##...#..........#.#.
// ##.####....##....#...##.####...
// ..##......##....#.....#...#..#.
// ...#......#..#...#..#.#....#.#.
// ......#...#....##....#.##......
// .##...#.........####..#....#..#
// ...#..#.#......#.....#.#.#.#...
// ...........#.......#........##.
// #.#....#....#.##.#...#...#.#...
// #..#.....#..#..#.#...#........#
// .....#.#.##...#............#.##
// ..#.#.#...#...#..###.#.....#...
// ....#.....##.......#......#....
// .#.#....#.##......##.#.#.....#.
// .....#.##.....#.#...#....#....#
// ...#.......#..#.#.###.#.###....
// .#...#..#..#....#...###.#.##...
// .#....#........#..........##...
// ##.#......#..#.#..........#.#..
// ...#..#.......#.##..###....#.#.
// .#.....#..........#..#.........
// ...##...##.#.......#..#....#...
// .....#.##....#.#.#...#.......#.
// ...#.#..#.#.......#.....##..#..
// .#.#.......#.#..........#...#.#
// #........#...#....###.#...#....
// ..##....#.#.#.....###.#.#......
// ..#.....#.#...#.#.....#.#......
// .#.....##......#....##.#.#....#
// ...##..........#.#####...#..#..
// #....#......##.............#...
// ......#.....#...##..#.#....#..#
// ..###.#.###.#.##.#.##..#.....#.
// #...#....#.#....#..##...#...#.#
// ...#....#...#.#......#......#..
// #......#.....#.#..#........#...
// ...##...##...##..###...###.#...
// #..#...#...#.....#..###...##...
// .#.....#.......#....#....##....
// ......#......##.#.#......#.#...
// ..#....#.#..........#..#...#..#
// ###...#..............#.........
// .###.##..#.#..#.....#.#.##....#
// ..#......#.##....##......#....#
// .##....###.#..#.#.............#
// ..##..#..#.#.#....#..##.#..#..#
// ##.#.....##...#..#...#..#.#.#..
// .#.#..............#.#...#......
// #....##...#....#..#...#........
// ...#..#..#.#........#..#..#..##
// ...##.#.#.#....#.......#....#..
// .##.#......#.##........#...##..
// .#.##..#.....###..#.#......#..#
// #....#..#......#....##...#..#.#
// ..##....#.##...#..#.##....##..#
// #....#..#...#.......#...#......
// #.#......#....#.#..............
// ..##..#..#.#.......#.#.#...##..
// ...##.##......#..#.##.#.......#
// .##.........#............#.#...
// ........#...#.....#....#....#..
// #....##...#........#......##...
// .###....#..#.#......#....#.#...
// #.#...........#...#....#..#.#.#
// .#....##.###...#.##....##..#..#
// ........#.............#.#...#.#
// #.##..#.##....##.......#.......
// .#.....#..#.##..##.....#.......
// ....#.#......#.#.............#.
// ..#.#.......#...#......##..#...
// ......##..###....##.#.###..##.#
// ..#..#.##...#...#....#.##..#..#
// #.##...##.##.#.#........#......
// ...#.#.......##....#.......#...
// .#....#.##.#..#.......#.....##.
// #..#...##.####..###.....#......
// ..#...##...#...#.#......#...#.#
// .##.##.#...#.....#.##..##......
// .#...#.#.##.###..#...#...#.....
// .#..##..#....##.##....##....##.
// ..#...##....#..###........##...
// .#..#..#.#....#.#...#.#......#.
// .##.....#...#..#..#..#...###...
// .#...#....#..#...........###...
// .....#...........##.#......#...
// .....#....##......##..#.#......
// .#.#..#..#...#.#..#..##..#.#...
// ..#..#####.#..#.#.#.....#.#....
// #......#.##.#......#.#......#..
// .#...............#..#.#.......#
// ...##...##.....##.##......#..##
// #.......##.#...........#....#..
// #...##.#...#.#..#..###...##....
// #..##..#..#......#.#...###..#.#
// .#.#..###.##..##.....#.........
// ##.#..##.#..........#.......#..
// .###..##....##..#..#...##......
// ........#..##.##....#....#.....
// .....#.#.#........#...#....#.#.
// ..#..#.#.....#.##....##........
// ...#....................#....#.
// ..#....#..###.##......#..#.#.##
// .....#.#....#......#...#......#
// ###...##.......#.#.#.....#....#
// ..#..###.##..#..#....##.......#
// #...#.###..#...#.##..##........
// ..#..#....#...........##..#....
// .#............##..#...##.#..#..
// .#.......#.#.........##..#..#..
// ....#.###.#...##....#.#.##.....
// #.......#........#..#.##......#
// #.....###....#....#..#....#....
// ...........#...#........#.....#
// ..##...#...#.##...##.#.#..#...#
// ##.##..#.......##..........#..#
// ............#.....#...#..#....#
// .....#.#......#...#..#.#...#..#
// ............##.##.....##...#..#
// ##.#..#..#.#......#......#..##.
// ..#..#.........#...#..#.#.#....
// #..#........#.......###.#......
// ...#.#.#....#......#.#...#.....
// #...............#...#......##..
// ###.#...#......##.....#..##.##.
// #.##...##.......###.##.........
// .#.#.........#..#.....#........
// ..##..#............#.....#...##
// ......###...#.#...#..#...##....
// #.........#.#.##.........##....
// .#....##....#....##....#.##....
// .#...##.#...#.......#...#....##
// #................#......##.....
// ##..#......#.#.........##...##.
// ...#.#.#...#..#..##..#....#.#..
// .##........#.#......##...#..#..
// ...##....#.#.....##..#.........
// ........###.#.#....###.##.#....
// .............#....###.#..#.#...
// .#...........##....#...#.......
// #..#.......#.....##..#.........
// ..#.#..#....##...##.#.......#.#
// #.###.#.........#..#.........#.
// .......#.........##....##.#..##
// .##...###..........#....#.#..##
// .#.....#......##..#...#........
// ##..#..###........#.......#....
// ........#...#.##...........#.#.
// .....#..#..###.............#..#
// ...######.##.....#...#......#..
// .#...#....###...###......#.##..
// ...##.####.........#...#...##..
// ..##....#.......#.....#..#.....
// #.##....#.#........#.....##....
// .....#.#.###...........#...##.#
// .............###........#......
// ...#..#...##.#....#..##.#.....#
// ....#.#.....#...#......###..##.
// ........#.......#..#...........
// ....#.#...#......#.#.....###...
// ..#.............####.##.....#..
// ..........#...#.#..............
// ..#.#...........#.#..##...##..#
// .......#...#........#..##....##
// #...#.....#.#.##...#.#.#...#..#
// .....#..#....#.###.#.....#.#..#
// ....#.#.#...#.................#
// #..#........##.###....#....#...
// ..##...##..............##....#.
// ...#.#...#.#...##........#...#.
// ##..##.#..#.#.#..#.#...#.#.#.##
// ..#.#..#....#..#.###.........#.
// ..#.....#..#..#........#.......
// ...#...#......##...###.....##..
// #....#.##.....#.##..##..#..#...
// ......##..#.#.#..#.###...#...#.
// .##.....##............#.#......
// ..#.#........##....#..#.####.#.
// .#....###..#.......#...........
// ##...........#..#...#.....#.#..
// .#..#....#..#....#.#.........#.
// .#.###....#.....##.....##......
// .#.#.......#.......#.###.#...#.
// ...###..#..#....#..####.##....#
// ..........##...#...#...........
// .#.....#.#..##..##...##..#.....
// ##.......#.#...#..###..#..##...
// ..#.##......###..#........#..##
// ....###...#..........#.#..#.#..
// #..#.#..##.......##....#.#..##.
// .#...#...#..#....#...###.......
// .##.#.#.#.....#.....#.#.#.....#
// ...##.#.....#..#.#...#.####.#..
// #...##.....####..#.###.##..#.##
// ..###..##....#####......##.....
// ###..............#.#..........#
// #...##......##....#...#..##..#.
// .#..#...#....##.##.....#....##.
// ...#.#...#..#..#.......#.##....
// .#...#..#.......#.##.#..#...#.#
// .#..#.##...#...#.............#.
// .#.#.#....##..#.#.#.#.#......##
// ..#....#.#...##.##.#...#.#.#.#.
// ...#..#..##.........##..#.....#
// ....#..........#.#.......#.....
// ........#....#.#..#.....#.#.#..
// .#...#.......#..#.##.........#.
// ##......#.....#...........#.#..
// ....#....##...#..#####.####...#
// .....##....#....#..#.....#..##.
// .#...#.#..###....#......#...#..
// .#.#.#.#.....##..........#....#
// ...#.....#.....#..#............
// ...#.#..#.....#.............#..
// ......#....#.#.....#.##...#..#.
// ...#....#.#...##..#....###.....
// ...#..#............##...##.##..
// ..#....#..............#.....#..
// .#..#.......#.#.##......#.###..
// ..#...#.........#..#.....#.....
// #..........#.....##............
// ##.#.#.#....##......#..#....#.#
// .#..#.....#.#..#.....#..##.....
// ...#.#.....#..#..#..#.##.###...
// ...##.#.....#.....#.......#....
// .....................##.#...#..
// ...#.#...#...#...###..#..#.#...
// #....##..###.#...##.#......#..#
// .##...##..##...##......##.#....
// ............#.....#.##.#.##.#.#
// .#...##.#..........###......#..
// .....##.....##....#.#....##..#.
// ...#....#.....#....#.....#.#...
// ................##.#...#....##.
// #..###.......#......###......#.
// ###..#.........#.#.#.....#....#
// ..#.#......#....#.#......##...#
// #...#......#.#.#.#..#...#..###.
// .#...#..#...##..#...##....###..
// #.#.#.#..###................#.#
// ...#.####....##.#.....#..#.....
// #.#...##..#.#...###.#..#...#...
// #..####........#.#..#...##..##.
// ..#..###..#..........##.###...#
// .....#..###.#.#....#....##....#
// .###..#.#.#....#...##.......##.
// #..#..........#...............#
// .#.#...#.....#.###..##......##.
// #...#...#...##...##.....##..#..
// .....##..###...........#.......
// ........###..##........#..##..#
// #....#...##..##..#.#.#.###...#.
// .#..#......##.#..#...#.........
// .#....#.##.....................
// #.##.##...........#.####..#....
// ......##....#..#.....#.#....#..
// ....##.#........#.#.#.#.#..#..#
// .#..##..##..#.....#...#.#.....#
// ...#..#.#.....#..#..##....##..#
// ..#....#.....#........#.....#..
// #.#.#..#..#.#..#...###.#.#....#`;
//     const data: string[] = input.split("\n");
//     const slopes: [number, number][] = [
//         [1, 1],
//         [3, 1],
//         [5, 1],
//         [7, 1],
//         [1, 2],
//     ];
//     const getTrees = ([right, down]: [number, number]): (
//         | string
//         | undefined
//     )[] => {
//         let slope: number = 0;
//         const trees: (string | undefined)[] = data
//             .map((map: string, index: number): string | undefined => {
//                 if (index === 0) return undefined;
//                 if (index % down !== 0) return undefined;
//                 slope += right;
//                 return map[slope % map.length];
//                 // if (slope + right >= map.length) {
//                 //     const remainder: number = (map.length - 1) % slope;
//                 //     slope = (right - 1) - remainder;
//                 // } else slope += right;
//                 // return map.charAt(slope);
//             })
//             .filter((x) => x === "#");
//         return trees;
//     };
//     const answers = slopes.map((slope) => getTrees(slope));
//     console.log(answers);
//     let product = 1;
//     answers.forEach((answer) => {
//         product *= answer.length;
//         console.log(`You encountered ${answer.length} trees`);
//     });
//     console.log(product);
// };
// mainFunction();
// console.timeEnd("PageLoadTime");
