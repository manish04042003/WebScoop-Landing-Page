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
    
  // Perform action on Done button click
});

showStep(currentStep);
