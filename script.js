const inputBox =document.getElementById("input-box");
const listContainer =document.getElementById("list-container");


function AddTask(){
    if(inputBox.value === ''){
        alert("You must Write Something");
    }
    else{
        let li =document.createElement("li");
            li.innerHTML =inputBox.value;
            listContainer.appendChild(li);
            let button = document.createElement("button");
            button.innerHTML = "Delete";
            li.appendChild(button);
    }
    alert("Your task has been added successfully!");
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click" , function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
       alert("Your task has been checked successfully!");
        saveData();
    }
    else if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
       alert("Task deleted successfully."); 
        saveData();
    }
},false);


function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML);
}

function showList(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();