//! Sum The Numbers Of The Array Without The Highest And Lowest Number

const result = document.querySelector(".result")
const array = document.querySelector(".array")

const nums = [5, 9, 3, 4, 8, 7, 2, 1, 15, 20, 17]

//! =========== method 1 ===========
function method1() {
    let largeNum = Math.max(...nums);
    let smallNum = Math.min(...nums);
    let filteredArray = nums.filter(num => num !== largeNum && num !== smallNum);
    let sumNumbers = filteredArray.reduce((acc, num) => acc + num, 0)

    array.innerHTML = `const nums = [${nums}]`
    result.innerHTML = `
largeNum = ${largeNum}
<br>
smallNum = ${smallNum}
<br>
The sum Numbers is: ${sumNumbers}

`
    console.log("method1 => " + sumNumbers);
}

//! =========== method 2 ===========

function method2() {
    let filteredArray2 = nums
        .filter(num => num !== Math.max(...nums) && num !== Math.min(...nums))
        .reduce((x, y) => x + y, 0)
    console.log("method2 => " + filteredArray2);
}

//! =========== method 3 ===========
function method3() {
    let filteredArray3 = nums
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, curent) => acc + curent, 0)
    console.log("method3 => " + filteredArray3);
}


method1()
method2()
method3()


