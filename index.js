// javaScript for Faqs sections
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const button = item.querySelector(".accordion-button");
  const content = item.querySelector(".accordion-content");

  button.addEventListener("click", () => {
    item.classList.toggle("active");
    content.style.maxHeight = item.classList.contains("active")
      ? content.scrollHeight + "px"
      : 0;
  });
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  $("#menu-box").addClass("animate__animated ");
  $("#menu-box").addClass("animate__fadeInLeft");
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// testimonial



$(document).on('ready', function () {
  $(".regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
  });
});


$(document).on("ready", function () {
  $(".regular").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
