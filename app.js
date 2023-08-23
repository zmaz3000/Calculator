var btn = document.querySelectorAll("button");
var display = document.querySelector(".screentwo");
var clear = document.querySelector("#clear");
var deleted = document.querySelector("#delete");
var activeflag = true;
var updateddisplay;

for(var i = 0; i<btn.length; i++){
    btn[i].addEventListener("click", (e)=>{
        if(e.target.classList.contains("number") == true){
           display.innerHTML += e.target.innerHTML;
            
            
        }

       
        
    })
}

clear.addEventListener("click", ()=>{
    display.innerHTML = '';
})

deleted.addEventListener("click", ()=>{
    var deletedresult = display.innerHTML.slice(0,-1);
    display.innerHTML = deletedresult;
})