console.log('bsjbb sia iugu')
const steps = document.querySelectorAll('.step');
let currentStep = 0;

const boxlines = document.querySelectorAll('.boxline')
function showStep(index) {
    console.log(index)
  steps[currentStep].classList.remove('current');
  steps[index].classList.add('current');
  boxlines[currentStep].classList.remove('current')
  boxlines[index].classList.add('current');
  currentStep = index;
}

const nextBtn = document.querySelectorAll('.next-btn')
console.log(nextBtn.length)
for(let i=0 ; i<nextBtn.length ; i++){
    nextBtn[i].addEventListener('click', function() {
        console.log('click')
      showStep(currentStep + 1);
    });
}

// document.querySelector('.next-btn').addEventListener('click', function() {
//     console.log('click')
//   showStep(currentStep + 1);
// });

document.querySelector('.done-btn').addEventListener('click', function() {
  party.confetti(document.querySelector('.modal-content-Con'), {
    /**
     * Whether the debugging mode should be enabled.
     */
    debug: false,
    count: party.variation.range(100, 600),
    /**
     * The amount of gravity to apply to particles in the scene, in pixels.
     * Note that this value is positive by default, since the y-axis increases
     * downwards in a DOM.
     */
    gravity: 500,
    /**
     * The z-index to place the DOM containers at.
     */
    zIndex: 99999,
});
 
});

showStep(currentStep);


// modal js 
// Get the modal
var modalcon = document.getElementById("myModalCon");

// Get the button that opens the modal
var btncon = document.getElementById("Finish");

btncon.onclick = function() {
  modalcon.style.display = "flex";
}
window.onclick = function(event) {
  if (event.target == modalcon) {
    modalcon.style.display = "none";
  }
}



