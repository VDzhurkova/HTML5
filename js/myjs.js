
function dropDown() {

document.getElementById("mainMenu").classList.toggle("show");
}
    
 window.onclick = function(event){
        if (!event.target.matches(".navBtn")) {
            
            var dropitems = document.getElementsByClassName("menu-items");
            
            for( var i = 0; i < dropitems.lenght; i++){
                var openMenu = dropitems[i];
                if(openMenu.classList.contains("show")){
                   openMenu.classList.remove("show");
                 }
            }
            
        }
 }