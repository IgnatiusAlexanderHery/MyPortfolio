emailjs.init("vg0-LtTdmKj79MQ4p");

const fonts = ["cursive", "sans-serif", "serif", "monospace"];
let captchaValue = "";
function generateCapcha() {
  let value = btoa(Math.random() * 1000000000);
  value = value.substr(0, 5 + Math.random() * 5);
  captchaValue = value;
}
function setCaptcha() {
  let html = captchaValue
    .split("")
    .map((char) => {
      const rotate = -20 + Math.trunc(Math.random() * 30);
      const font = Math.trunc(Math.random() * fonts.length);
      return `<span style="transform:rotate(${rotate}deg); font-family:${fonts[font]}">${char}</span>`;
    })
    .join("");
  document.querySelector("#contact-form .captcha .preview").innerHTML = html;
}

function initCaptcha() {
  document.querySelector("#contact-form .captcha .captcha-refresh").addEventListener("click", function () {
    generateCapcha();
    setCaptcha();
  });
  generateCapcha();
  setCaptcha();
}
initCaptcha();

function validateForm() {
  let inputCaptchaValue = document.querySelector("#contact-form .captcha-form #captcha-input").value;
  if (inputCaptchaValue === captchaValue) {
    return true;
  } else if (inputCaptchaValue === "") {
    alert("Please complete the CAPTCHA");
    return false;
  } else {
    alert("Please submit the CAPTCHA correctly");
    return false;
  }
}

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  var sent = document.getElementById("sent");
  sent.disabled = true;
  sent.innerHTML = 'Sending <img src="img/loading.gif" alt="Loading..." style="width: 1rem; height: 1rem"; />';
  if (validateForm()) {
    setTimeout(function () {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("pesan").value;

      var data = {
        from_name: email + " " + name,
        to_name: "Alex",
        message: message,
      };

      emailjs.send("service_92iblp8", "template_2tdqgyj", data).then(
        function (response) {
          alert("Email berhasil dikirim!");
          document.getElementById("contact-form").reset();
          sent.disabled = false;
          sent.innerHTML = "Sent";
        },
        function (error) {
          alert("Gagal mengirim email", error);
          sent.disabled = false;
          sent.innerHTML = "Sent";
        }
      );
    }, 5000);
  } else {
    sent.disabled = false;
    sent.innerHTML = "Sent";
  }
});
