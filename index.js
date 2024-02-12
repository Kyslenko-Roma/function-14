/**
 *
 * @param iterations {number}
 * @param multiple {number}
 * @returns {number}
 */
function calculateSumOfMultiples(iterations, multiple) {
    let sum = 0;

    for (let i = 1; i <= iterations; i++) {
        if (i % multiple === 0) {
            sum += i;
        }
    }

    return sum;
}

console.log(calculateSumOfMultiples(20, 2));