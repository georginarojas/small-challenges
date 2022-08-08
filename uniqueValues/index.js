/*
    Remove duplicate item from array.
*/
function unique(list) {
    const newList = new Set(list);
    console.log(newList);
    return newList
}

function unique2(list) {
    const newList = [];
    list.forEach(el => {
        if(!newList.includes(el)){
            newList.push(el);
        }
    })
    console.log(newList);
    return newList
}

const list = [1,1,2,3,1,3]
unique(list)
unique2(list)

