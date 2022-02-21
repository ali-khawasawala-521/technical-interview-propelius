function strInclude(data, header, value){
    return data.filter(row => {
        return row[header].includes(value) ? row : null
    })
}

function strEqual(data, header, value){
    return data.filter(row => {
        return row[header] == value ? row : null
    }) 
}

export { strInclude , strEqual }