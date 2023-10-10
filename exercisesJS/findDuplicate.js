function findAllDuplicates(arr) {
    const map = {};
    const duplicates = [];

    for (const num of arr) {
        if (map[num]) {
            map[num]++;
        } else {
            map[num] = 1;
        }
    }

    for (const num in map) {
        if (map[num] > 1) {
            duplicates.push(parseInt(num));
        }
    }

    return duplicates;
}

function findAllDuplicates_v2(arr) {
    const numere = new Set();
    const duplicate = new Set();

    for (const num of arr) {
        if (numere.has(num)) {
            duplicate.add(num);
        } else {
            numere.add(num);
        }
    }

    return Array.from(duplicate);
}


console.log(findAllDuplicates([2,2,2,3,4,5,5]))
console.log(findAllDuplicates_v2([2,2,2,3,4,5,5]))