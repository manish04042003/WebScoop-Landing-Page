
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

$( "#ForgetPassword" ).submit(function( event ) {
    event.preventDefault();
    sendEmail();
  });


function sendEmail() {
    console.log('function run')
    let ForgetEmail = document.getElementById('EmailForForget').value;
    let UserName = document.getElementById('UserNameForPassword').value;
   
let obj = {
    email : ForgetEmail,
    username : UserName
}
console.log(obj)
    console.log(ForgetEmail,UserName)
    fetch("http://localhost:4400/sendEmail", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            document.getElementById('EmailForForget').value = null
            document.getElementById('UserNameForPassword').value = null
        }
           
        );
}