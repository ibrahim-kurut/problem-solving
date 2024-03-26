
const repeatString = (number, string) => {
    let newString = ''
    for (let i = 0; i < number; i++) {
        newString += string
    }
    return newString
}
console.log(repeatString(6, " h"));


