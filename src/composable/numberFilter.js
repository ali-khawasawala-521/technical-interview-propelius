function numGt(data, header, value) {
    return data.filter(row => {
        return parseInt(row[header]) > parseInt(value) ? row : null
    })
}

function numLt(data, header, value) {
    return data.filter(row => {
        return parseInt(row[header]) < parseInt(value) ? row : null
    })
}

export {
    numGt,
    numLt
}