// JS scripts placed here


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "monday-soap") {
        x.className += " none";
    } else {
        x.className = "monday-soap";
    }
}