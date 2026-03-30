
var accordions = document.getElementsByClassName("accordion");

for (var i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}



var generateButton = document.getElementById("generate-button");

if (generateButton) {
  var result = document.getElementById("routine-result");

  generateButton.addEventListener("click", function() {
    var skinType = document.getElementById("skin-type").value;
    var skinConcern = document.getElementById("skin-concern").value;

    if (skinType === "" || skinConcern === "") {
      result.innerHTML = "Please select both your skin type and concern";
      return;
    }

    if (skinType === "dry" && skinConcern === "dullness") {
      result.innerHTML = "Cleanser: Cream cleanser <br> Serum: Vitamin C serum <br> Moisturizer: Rich moisturizer <br> SPF: Hydrating sunscreen";
    } else if (skinType === "oily" && skinConcern === "acne") {
      result.innerHTML = "Cleanser: Foaming cleanser <br> Serum: Salicylic acid serum <br> Moisturizer: Lightweight gel moisturizer <br> SPF: Oil-free sunscreen";
    } else if (skinType === "sensitive" && skinConcern === "redness") {
      result.innerHTML = "Cleanser: Gentle cleanser <br> Serum: Soothing serum <br> Moisturizer: Barrier repair cream <br> SPF: Mineral sunscreen";
    } else if (skinType === "combination" && skinConcern === "dark-spots") {
      result.innerHTML = "Cleanser: Gentle gel cleanser <br> Serum: Niacinamide serum <br> Moisturizer: Balancing moisturizer <br> SPF: Broad-spectrum sunscreen";
    } else {
      result.innerHTML = "Cleanser: Gentle cleanser <br> Serum: Hydrating serum <br> Moisturizer: Daily moisturizer <br> SPF: Daily sunscreen";
    }
  });
}


var contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var formMessage = document.getElementById("form-message");

    if (name === "" || email === "" || message === "") {
      formMessage.innerHTML = "Please fill in all fields.";
      formMessage.style.color = "red";
      return;
    }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email)) {
  formMessage.innerHTML = "Please enter a valid email.";
  formMessage.style.color = "red";
  return;
}

    formMessage.innerHTML = "Message sent successfully!";
    formMessage.style.color = "green";

    contactForm.reset();
  });
}


const tips = [
  "Drink plenty of water to keep your skin hydrated",
  "Always apply SPF, even on cloudy days",
  "Cleanse your face twice daily",
  "Avoid touching your face to prevent breakouts",
  "Moisturize regularly to maintain your skin barrier",
  "Remove makeup before sleeping",
  "Use gentle products if you have sensitive skin",
  "Exfoliate 1–2 times a week for smoother skin"
];

var tipButton = document.getElementById("tip-button");

if (tipButton) {
  var tipText = document.getElementById("tip-text");

  tipButton.addEventListener("click", function() {
    var randomIndex = Math.floor(Math.random() * tips.length);
    tipText.textContent = tips[randomIndex];
  });
}