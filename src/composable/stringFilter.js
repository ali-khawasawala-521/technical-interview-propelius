function strInclude(data, header, value){
    return data.filter(row => {
        return row[header].includes(value) ? row : false
    })
}

function strEqual(data, header, value){
    return data.filter(row => {
        return row[header] == value ? row : false
    }) 
}

export { strInclude , strEqual }