//! Solution steps
// convert number to string 
// convert string to array 
// reverse this array
const convert_nums_to_reversed_arr = (num) => {
    //! method solve 1
    // let num_to_str = num.toString();
    // let newArr = num_to_str.split("")
    // let reversed_array = newArr.reverse()
    // return reversed_array

    //! method solve 2
    let nums = num.toString().split("").reverse()
    return nums

}

console.log(convert_nums_to_reversed_arr(987654321));
