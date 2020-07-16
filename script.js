let addTask = document.getElementById('addTask');
let myBtn = document.getElementById('btn');
let myList = document.getElementsByTagName('ul');

myBtn.addEventListener("click" , function() {
    if (addTask.value.length > 0) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(addTask.value));
        myList.appendChild('li');
        addTask.value = "";
    }
})