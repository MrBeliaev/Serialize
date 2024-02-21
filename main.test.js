const helpers = require('./helpers')
const main = require('./main')

let tests = [
    helpers.generateArr(1, 300, 10),
    helpers.generateArr(1, 300, 50),
    helpers.generateArr(1, 300, 100),
    helpers.generateArr(1, 300, 500),
    helpers.generateArr(1, 300, 1000),
]

function test(tests) {
    for (const index in tests) {
        let arr = tests[index]
        let serialized = main.serialize(arr)
        let deserialized = main.deserialize(serialized)
        let compressionRatio = helpers.calculateCompression(deserialized, serialized)
        if (JSON.stringify(arr) == JSON.stringify(deserialized)) console.log("Test", true)
        console.log("Serialized", serialized)
        console.log("Deserialized", deserialized)
        console.log("Compression Ratio", compressionRatio)
    }
}
test(tests)