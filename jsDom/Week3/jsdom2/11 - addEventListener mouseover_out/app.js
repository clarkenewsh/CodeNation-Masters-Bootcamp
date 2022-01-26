let item = document.getElementById("fav")
let myList = document.getElementsByTagName("li")


for(let listItem of myList) {
    listItem.addEventListener("mouseover", () => {
        listItem.textContent = listItem.textContent.toUpperCase()
    })
    //mouse out must be used in conjunction with mouse over 
    listItem.addEventListener("mouseout", () => {
        listItem.textContent = listItem.textContent.toLowerCase()
    })
}


// // Checking events in the console
// document.addEventListener(“click", (event) => {
//     console.log(event);
//     console.log(event.target);
// })
