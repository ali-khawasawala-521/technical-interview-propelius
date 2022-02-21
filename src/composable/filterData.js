import { strInclude, strEqual } from "./stringFilter"
import { numGt, numLt } from "./numberFilter"
import { dateGt, dateLt } from "./dateFilter"

export default function (data, filter) {
    let header = filter.column.header
    let type = filter.column.type
    let param = filter.parameter
    let search = filter.search

    if (search) {
        switch (type) {
            case "str":
                return param == "*" ? strInclude(data, header, search) : strEqual(data, header, search);
                break;
            case "number":
                return param == ">" ? numGt(data, header, search) : numLt(data, header, search);
                break;
            case "date":
                return param == ">" ? dateGt(data, header, search) : dateLt(data, header, search);
                break;
            default:
                return data;
        }
    } else {
        return data;
    }
}