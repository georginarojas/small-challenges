/*
    Find element occurrence in array
*/
function occurrence(list) {
    const count = {}

    for(const el of list) {
        console.log(`el ${el} count[el]: ${count[el]}`)
        count[el] = count[el]? count[el] + 1 : 1
        console.log('Count ', count)
    }
    console.log(count)
    return count
}

const list = [1,1,2,3,1,3]
occurrence(list)

