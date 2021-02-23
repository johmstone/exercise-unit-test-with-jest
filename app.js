///Jonathan Code
console.log("Hello World")

const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(7,3)

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(total) {
    let x = (total*oneEuroIs["JPY"])/oneEuroIs["USD"]
    return x;
}

function fromEuroToDollar(total) {
    let x = (total*oneEuroIs["USD"])
    return x;
}

function fromYanToPound(total) {
    let x = (total*oneEuroIs["GBP"])/oneEuroIs["JPY"]
    return x;
}

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYanToPound }