// import { ref } from "vue";

export default function(obj){
    let headers = Object.keys(obj)
    let headerObj = []

    headers.forEach(header => {
        let type = !isNaN(obj[header]) ? "number" : isNaN(Date.parse(obj[header])) ? "str" : "date"
        headerObj.push({header, type})
    })

    return headerObj
}