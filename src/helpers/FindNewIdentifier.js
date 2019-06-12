

export const newIdentifier = (array)=> {
    let high = 1;
    for (let i = 0; i < array.length;i++) {
        if (array[i].identifier > high){
            high = array[i].identifier;
        }
    }
    high++
    return high;
}