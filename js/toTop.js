function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function responsive(){
    var rspMenu = document.getElementsByTagName("menu")[0];
    if(rspMenu.style.display === "none"){
        rspMenu.style.display = "block";
    }else{
        rspMenu.style.display = "none";
    }
                
}