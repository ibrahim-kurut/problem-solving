//! Sum Of Positives
const arr = document.querySelector(".arr")
const res1 = document.querySelector(".res1")
let myArr = [4, -5, 7, -8, 10, 3, 6, -1, 2]
arr.innerHTML += "[ " + myArr + " ]"



function sumPositve(arr) {
    let initValue = 0
    for (let i = 0; i < myArr.length; i++) {
        if (myArr[i] > 0) {
            initValue += myArr[i]
        }
    }

    return initValue
}
res1.innerHTML += sumPositve(myArr)