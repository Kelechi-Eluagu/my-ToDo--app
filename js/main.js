// showtask();
// let addtaskinput = document.getElementById("addtaskinput");
// let addtaskbtn = document.getElementById("addtaskbtn");

// addtaskbtn.addEventListener("click", function(){
//     addtaskinputval = addtaskinput.value;
//     if(addtaskinputval.trim()!=0){
//         let webtask = localStorage.getItem("localtask");
//         if(webtask == null){
//             taskObj = [];
//         }
//         else{
//             taskObj = JSON.parse(webtask);
//         }
//         taskObj.push({'task_name':addtaskinputval, 'completeStatus':false});
// 		// console.log(taskObj, 'Ashendra');
//         localStorage.setItem("localtask", JSON.stringify(taskObj));
//         addtaskinput.value = '';
//     }
//     showtask();
// })

// // showtask
// function showtask(){
//     let webtask = localStorage.getItem("localtask");
//     if(webtask == null){
//         taskObj = [];
//     }
//     else{
//         taskObj = JSON.parse(webtask);
//     }
//     let html = '';
//     let addedtasklist = document.getElementById("addedtasklist");
//     taskObj.forEach((item, index) => {

//         if(item.completeStatus==true){
//             taskCompleteValue = `<td class="completed">${item.task_name}</td>`;
//         }else{
//             taskCompleteValue = `<td>${item.task_name}</td>`;
//         }
//         html += `<tr>
//                     <th scope="row">${index+1}</th>
//                     ${taskCompleteValue}
//                     <td><button type="button" onclick="edittask(${index})" class="text-primary"><i class="fa fa-edit"></i>Edit</button></td>
//                     <td><button type="button" class="text-success" id=${index}><i class="fa fa-check-square-o"></i>Complete</button></td>
//                     <td><button type="button" onclick="deleteitem(${index})" class="text-danger"><i class="fa fa-trash"></i>Delete</button></td>
//                 </tr>`;
//     });
//     addedtasklist.innerHTML = html;
// }

// // edittask
// function edittask(index){
//     let saveindex = document.getElementById("saveindex");
//     let addtaskbtn = document.getElementById("addtaskbtn");
//     let savetaskbtn = document.getElementById("savetaskbtn");
//     saveindex.value = index;
//     let webtask = localStorage.getItem("localtask");
//     let taskObj = JSON.parse(webtask); 
    
//     addtaskinput.value = taskObj[index]['task_name'];
//     addtaskbtn.style.display="none";
//     savetaskbtn.style.display="block";
// }

// // savetask
// let savetaskbtn = document.getElementById("savetaskbtn");
// savetaskbtn.addEventListener("click", function(){
//     let addtaskbtn = document.getElementById("addtaskbtn");
//     let webtask = localStorage.getItem("localtask");
//     let taskObj = JSON.parse(webtask); 
//     let saveindex = document.getElementById("saveindex").value;
    
//     for (keys in taskObj[saveindex]) {
//         if(keys == 'task_name'){
//             taskObj[saveindex].task_name = addtaskinput.value;
//         }
//       }
//     // taskObj[saveindex] = {'task_name':addtaskinput.value, 'completeStatus':false} ;
//   //  taskObj[saveindex][task_name] = addtaskinput.value;
//     savetaskbtn.style.display="none";
//     addtaskbtn.style.display="block";
//     localStorage.setItem("localtask", JSON.stringify(taskObj));
//     addtaskinput.value='';
//     showtask();
// })
// // deleteitem
// function deleteitem(index){
//     let webtask = localStorage.getItem("localtask");
//     let taskObj = JSON.parse(webtask);
//     taskObj.splice(index, 1);
//     localStorage.setItem("localtask", JSON.stringify(taskObj));
//     showtask();
// }

// //complete task
// /* function completetask(index){
//     let webtask = localStorage.getItem("localtask");
//     let taskObj = JSON.parse(webtask);
//     taskObj[index] = '<span style="text-decoration:line-through">' + taskObj[index] + '</span>';
//     let addedtasklist = document.getElementById("addedtasklist");
//     addedtasklist.addEventListener("click", function(e){
//         console.log(addedtasklist)
//     })
//     localStorage.setItem("localtask", JSON.stringify(taskObj));
//     showtask();
// } */

// // complete task
// let addedtasklist = document.getElementById("addedtasklist");
//     addedtasklist.addEventListener("click", function(e){
//        // console.log(e);
        
//         // showtask();
//         let webtask = localStorage.getItem("localtask");
//         let taskObj = JSON.parse(webtask);
        
//         let mytarget = e.target;
//         if(mytarget.classList[0] === 'text-success'){
//         let mytargetid = mytarget.getAttribute("id");
        
        
//         // let taskValue = taskObj[mytargetid]['task_name'];
        
//         mytargetpresibling = mytarget.parentElement.previousElementSibling.previousElementSibling;
            
//             // let mynewelem = mytargetpresibling.classList.toggle("completed");
//             // taskObj.splice(mytargetid,1,mynewelem);
//             for (keys in taskObj[mytargetid]) {
//                 if(keys == 'completeStatus' && taskObj[mytargetid][keys]==true){
//                     taskObj[mytargetid].completeStatus = false;
//                    // taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':false};
//                 }else if(keys == 'completeStatus' && taskObj[mytargetid][keys]==false){
//                     taskObj[mytargetid].completeStatus = true;
//                     //taskObj[mytargetid] = {'task_name':taskValue, 'completeStatus':true};
//                 }
//               }
//         //}
//        // showtask();        
//         localStorage.setItem("localtask", JSON.stringify(taskObj));
//         showtask();
//     }
//     })

    



// // deleteall
// let deleteallbtn = document.getElementById("deleteallbtn");
// deleteallbtn.addEventListener("click", function(){
//     let savetaskbtn = document.getElementById("savetaskbtn");
//     let addtaskbtn = document.getElementById("addtaskbtn");
//     let webtask = localStorage.getItem("localtask");
//     let taskObj = JSON.parse(webtask);
//     if(webtask == null){
//         taskObj = [];
//     }
//     else{
//         taskObj = JSON.parse(webtask);
//         taskObj = [];
//     }
//     savetaskbtn.style.display="none";
//     addtaskbtn.style.display="block";
//     localStorage.setItem("localtask", JSON.stringify(taskObj));
//     showtask();

// })


// // serachlist
// let searchtextbox = document.getElementById("searchtextbox");
// searchtextbox.addEventListener("input", function(){
//     let trlist = document.querySelectorAll("tr");
//     Array.from(trlist).forEach(function(item){
//         let searchedtext = item.getElementsByTagName("td")[0].innerText;
//         let searchtextboxval = searchtextbox.value;
//         let re = new RegExp(searchtextboxval, 'gi');
//         if(searchedtext.match(re)){
//             item.style.display="table-row";
//         }
//         else{
//             item.style.display="none";
//         }
//     })
// })

let addedTask = document.getElementById("addtaskinput");
let myBtn = document.getElementById("addtaskbtn");
let myList = document.querySelector("ul");
let deleteAll = document.getElementById("deleteBtn")
let task = document.getElementById("myTask");
let listNode = document.getElementsByTagName("li");

// debugger; 
// add on add btn
myBtn.addEventListener("click" , function() {
    if (addedTask.value.length > 0) {
      // console.log("btn is working");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(addedTask.value));
        myList.appendChild(li);
        // doTask.style.innerHtml = "Here are all your task to get done!..you can do this";
        addedTask.value = "";
        // append close to input
        for (let i = 0; i < listNode.length; i++) {
          let span = document.createElement("SPAN");
          let txt = document.createTextNode("\u00D7");
          span.className = "close";
          span.appendChild(txt);
          listNode[i].appendChild(span);
          console.log("I am not click able on add btn");
        };
    }
});
// add on keypress
addedTask.addEventListener("keypress" , function() {
    // console.log(event.which);
    if (addedTask.value.length > 0 && event.keyCode === 13) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(addedTask.value));
        myList.appendChild(li);
        // doTask.style.innerHtml = "Here are all your task to get done!..you can do this";
        addedTask.value = "";
    };
      // append close to input
    for (let i = 0; i < listNode.length; i++) {
      let span = document.createElement("SPAN");
      let txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      listNode[i].appendChild(span);
      console.log("I am not click able on keypress");
    };

    txt.addEventListener("click", function() {
      console.log("I am close and i am working");
      // for (let i = 0; i < close.length; i++) {
      //   close[i].onclick = function () {
      //     let li = this.parentElement;
      //     li.style.display = "none";
      //   };
    })
});
function remove(el) {
  var element = el;
  element.remove();
}

// Click on a close button to hide the current list item
// let close = document.getElementsByClassName("close");
// // debugger;
// for (let i = 0; i < close.length; i++) {
//   close[i].onclick = function () {
//     let li = this.parentElement;
//     li.style.display = "none";
//   };
// };

// Add a "checked" symbol when clicking on a list item
myList.addEventListener("click", function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
// let deleteAll = document.getElementById("deleteBtn")
// let task = document.getElementById("myTask");
// deleteAll.addEventListener("click", function() {
  if (deleteAll.style.display === "none") {
    deleteAll.style.display = "block";
    
  //   deleteAll.style.innerHtml = "Undo";

  } else {
    deleteAll.style.display = "noe";
    // document.querySelector("#showMsg").value = "Undo";
};
// function myFunction() {
    // var deleteAll = document.getElementById("myTask");
    // if (deleteAll.style.display === "none") {
    //   deleteAll.style.display = "block";
    //   deleteAll.style.innerHtml = "Undo";
    // //   deleteAll.style.innerHtml = "Undo";
    // } else {
    //   deleteAll.style.display = "none";

    //   // document.querySelector("#showMsg").value = "Undo";
    // };
// };

// function myFunction() {
//     var deleteAll = document.getElementById("myTask");
//     if (deleteAll.style.display === "none") {
//       deleteAll.style.display = "block";
//     //   deleteAll.style.innerHtml = "Undo";
//     } else {
//       deleteAll.style.display = "none";
//       document.querySelector("#showMsg").value = "Undo";
//     };
// };

// // // edittask
// function edittask(index){
//     let saveindex = document.getElementById("saveindex");
//     let addtaskbtn = document.getElementById("addtaskbtn");
//     let savetaskbtn = document.getElementById("savetaskbtn");
//     saveindex.value = index;
//     let webtask = localStorage.getItem("localtask");
//     let taskObj = JSON.parse(webtask); 
    
//     addtaskinput.value = taskObj[index]['task_name'];
//     addtaskbtn.style.display="none";
//     savetaskbtn.style.display="block";
// }
// deleteAll.addEventListener("click", function() {
// //    document.getElementsByTagName("LI").style.visibility = "none";
//     // document.getElementById("myTask");
// });

// let deleteAll = function() {
//     console.log("I am wokring");
//     // document.getElementById("myTask").style.display = "none";
//  }














