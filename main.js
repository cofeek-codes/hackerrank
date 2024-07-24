let input = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
]

function diagonalDifference(arr) {
    let leftDiagonal = 0
    let rightDiagonal = 0
    let amount = arr.length
    // iterators for left and right diagonals
    let li = 0
    let lj = 0
    let ri = 0
    let rj = amount - 1

    while (true) {
        // left
        leftDiagonal += arr[li][lj]
        li++
        lj++
        // right
        rightDiagonal += arr[ri][rj]
        ri++
        rj--
        if (li >= amount || ri >= amount) break;
    }
    return Math.abs(leftDiagonal - rightDiagonal)
}

console.log(diagonalDifference(input))
