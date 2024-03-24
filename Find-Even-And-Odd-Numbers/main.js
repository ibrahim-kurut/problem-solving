//! Find Even And Odd Numbers 
const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const even = document.querySelector(".even")
const odd = document.querySelector(".odd")


btn.onclick = () => {
    if (input.value % 2 === 0) {
        even.innerHTML += "<li>" + input.value + "</li> "
    } else {
        odd.innerHTML += "<li>" + input.value + "</li> "
    }
}



