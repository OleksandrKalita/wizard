new Swiper('.info-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el:'.swiper-pagination',
        clicable: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    spaceBetween: 20,
    slidesPerView: 2,
    loop: false,
    breakpoints:{
        1100: {
          slidesPerView: 3,
        },
    }
});

new Swiper('.about-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el:'.swiper-pagination',
        clicable: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
    spaceBetween: 20,
    slidesPerView: 2,
    loop: false,
    breakpoints:{
        1100: {
          slidesPerView: 3,
        },
    }
});




const infoBanners = document.querySelectorAll(".slide-image__info-box");
infoBanners.forEach(element => {
    element.addEventListener("mouseover", () => {
        element.classList.add("active");
    });
    element.addEventListener("mouseout", () => {
        element.classList.remove("active");
    })
})


const phoneInputField = document.querySelector("#phoneNumber");
const phoneInput = window.intlTelInput(phoneInputField, {
    initialCountry: "by",
    nationalMode: true,
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    separateDialCode: true,
    formatOnDisplay: true,
    preferredCountries: ["by", "ua", "pl", "de"],
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var agree = document.getElementById('agree').checked;
    var countryCode = phoneInput.getSelectedCountryData().iso2;

    if (!firstName || !email || !phoneNumber || !agree) {
      alert('Пожалуйста, заполните все поля.');
      event.preventDefault();
      return;
    }
  
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Введите корректный адрес электронной почты.');
      event.preventDefault();
      return;
    }
  
    var phonePattern = /^\+?\d{1,}$/;
    console.log(phoneInput);
    if (!phonePattern.test(phoneNumber)) {
      alert('Введите корректный номер телефона.');
      event.preventDefault();
      return;
    }
  
    if (lastName && lastName.trim() === "") {
      alert('Пожалуйста, введите корректную фамилию.');
      event.preventDefault();
      return;
    }

    alert('Форма отправлена ​​успешно!');
});
  