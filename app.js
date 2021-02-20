///Jonathan Code

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

module.exports = { fromDollarToYen, fromEuroToDollar, fromYanToPound }