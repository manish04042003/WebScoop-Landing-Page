
// js for forget modal 
var Forgetmodal = document.getElementById("ForgetModal");

// Get the button that opens the modal
var ForgetModalbtn = document.getElementById("myBtnForForgetMoadal");

// Get the <span> element that closes the modal
var Forgetspan = document.getElementsByClassName("Forgetclose")[0];

// When the user clicks on the button, open the modal
ForgetModalbtn.onclick = function() {
    Forgetmodal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
Forgetspan.onclick = function() {
    Forgetmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == Forgetmodal) {
    Forgetmodal.style.display = "none";
  }
}




// function for send email 
function sendEmail() {
    console.log('function run')
    fetch("http://localhost:4400/sendEmail", {
        method: "POST",
        body: JSON.stringify({
            userId: 1,
            title: "Fix my bugs",
            completed: false
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}