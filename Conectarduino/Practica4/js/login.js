const background = document.getElementById("background-login")

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display == "block") {
        x.style.display = "none";
        

    } else {
        x.style.display = "block";
        background.setAttribute("class", "background-login");
    } 
}

