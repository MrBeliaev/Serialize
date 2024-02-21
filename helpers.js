function calculateCompression(arr, str) {
    return (1 - (str.length / JSON.stringify(arr).length)) * 100
}

function generateArr(from, to, length) {
    let arr = []
    for (let index = 0; index < length; index++) {
        let num;
        do {
            num = parseInt(Math.random() * 1000)
        } while (num > to || num < from);
        arr.push(num)
    }
    return arr;
}

module.exports = {
    calculateCompression, generateArr
}