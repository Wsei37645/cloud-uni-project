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

var myVar;

function loader() {
    document.getElementsByTagName("body")[0].style.backgroundImage = "none";
    myVar = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("insides").style.display = "block";
    document.getElementsByTagName("body")[0].style.backgroundImage = "url('../background.jpg')";
}
