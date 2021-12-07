function sumPairs(numbers, result) {
    // ¡Y no olvides compartir tu solución en redes!
    for (let x = 0; x < numbers.length; x++) {
        for (let y = 1; y < numbers.length; y++) {
            if (numbers[x] + numbers[y] === result && x !== y) return [numbers[x], numbers[y]];
        };
    };
    return null;
};

const case1 = sumPairs([3, 5, 7, 2], 10);
console.log(case1); // [ 3, 7 ]
const case2 = sumPairs([-3, -2, 7, -5], 10);
console.log(case2); // null
const case3 = sumPairs([2, 2, 3, 1], 4);
console.log(case3); // [ 2, 2 ]
const case4 = sumPairs([6, 7, 1, 2], 8);
console.log(case4); // [ 6, 2 ]
const case5 = sumPairs([0, 2, 2, 3, -1, 1, 5], 6);
console.log(case5); // [ 1, 5 ]
