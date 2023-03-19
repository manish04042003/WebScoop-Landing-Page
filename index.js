// javaScript for Faqs sections 
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const button = item.querySelector('.accordion-button');
  const content = item.querySelector('.accordion-content');
  
  button.addEventListener('click', () => {
    item.classList.toggle('active');
    content.style.maxHeight = item.classList.contains('active') ? content.scrollHeight + 'px' : 0;
  });
});