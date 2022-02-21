function dateGt(data, header, value) {
    return data.filter(row => {
        return Date.parse(row[header]) > Date.parse(value) ? row : null
    })
}

function dateLt(data, header, value) {
    return data.filter(row => {
        return Date.parse(row[header]) < Date.parse(value) ? row : null
    })
}

export {
    dateGt,
    dateLt
}