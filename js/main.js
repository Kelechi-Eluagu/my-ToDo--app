let addedTask = document.getElementById("addtaskinput");
let myBtn = document.getElementById("addtaskbtn");
let myList = document.querySelector("ul");
let listNode = document.getElementsByTagName("li");
// let deleteAll = document.getElementById("deleteallbtn")


// debugger; 
myBtn.addEventListener("click" , function() {
    if (addedTask.value.length > 0) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(addedTask.value));
        myList.appendChild(li);
        // doTask.style.innerHtml = "Here are all your task to get done!..you can do this";
        addedTask.value = "";
    };
});
addedTask.addEventListener("keypress" , function() {
    // console.log(event.which);
    if (addedTask.value.length > 0 && event.keyCode === 13) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(addedTask.value));
        myList.appendChild(li);
        // doTask.style.innerHtml = "Here are all your task to get done!..you can do this";
        addedTask.value = "";
    };
});

// Create a "close" button and append it to each list item
for (let i = 0; i < listNode.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  listNode[i].appendChild(span);
};

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
// debugger;
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let li = this.parentElement;
    li.style.display = "none";
  };
};

// Add a "checked" symbol when clicking on a list item
myList.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function myFunction() {
    var deleteAll = document.getElementById("myTask");
    if (deleteAll.style.display === "none") {
      deleteAll.style.display = "block";
    //   deleteAll.style.innerHtml = "Undo";
    } else {
      deleteAll.style.display = "none";
      document.querySelector("#showMsg").value = "Undo";
    };
};
// deleteAll.addEventListener("click", function() {
// //    document.getElementsByTagName("LI").style.visibility = "none";
//     // document.getElementById("myTask");
// });

// let deleteAll = function() {
//     console.log("I am wokring");
//     // document.getElementById("myTask").style.display = "none";
//  }














