let addedTask = document.getElementById("addTask");
let myBtn = document.getElementById("btn");
let myList = document.querySelector("ul");

// debugger; 
myBtn.addEventListener("click" , function() {
    if (addedTask.value.length > 0) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(addedTask.value));
        myList.appendChild(li);
        addedTask.value = "";
        // console.log("myBtn");
    };
});
addTask.addEventListener("keypress" , function() {
    // console.log(event.which);
    if(addTask.value.length > 0 && event.keyCode === 13) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(addTask.value));
        myList.appendChild(li);
        addTask.value = "";
    };
});
