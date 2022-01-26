const placeholder = document.getElementById("placeholder");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const list = document.getElementById("list");


// submit.addEventListener("click", () =>{
//     placeholder.style.color ="goldenrod";
//     placeholder.textContent = input.value;
// })

// Using template literals 
submit.addEventListener("click", () =>{
    placeholder.style.color ="goldenrod";
    // adds text content within placeholder html - does not create html
    // placeholder.textContent = `<li>${input.value}</li>`;
    //replaces all list items
    list.innerHTML = `<li>${input.value}</li>`;
})

// Challenge 5
// const heading = document.getElementById("placeholder")
// const input = document.getElementById("input")
// const submit = document.getElementById("submit")
// // const list = document.querySelectorAll("li");
// let list = document.getElementsByTagName("ul")[0];

// submit.addEventListener("click",() => {
//     const item = document.createElement("li")
//     item.textContent = input.value
//     list.appendChild(item)
//     input.value = ""
// })