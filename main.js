function serialize(arr) {
    return arr.map(num => String.fromCharCode(num)).join("")
}

function deserialize(str) {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        arr.push(str.charCodeAt(i));
    }
    return arr;
}

module.exports = {
    serialize, deserialize
}