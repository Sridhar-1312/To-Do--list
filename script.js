const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("listcontaner")


function add(){
    if(inputBox.value === ""){
        alert("Ypu Must Write Something...")
    }else{
        let li = document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Unicode for multiplication sign
        li.appendChild(span);
    }

    inputBox.value="";
    savedata()
}

listContainer.addEventListener("click", function(e){
console.log(e.target.tagName);    
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        console.log(e.target.tagName);
        savedata()
        
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata()

    }
},false);

function savedata(){
    localStorage.setItem("data",listContainer.innerHTML);
    
}
function showtask(){
    listContainer.innerHTML= localStorage.getItem("data");

}
showtask();