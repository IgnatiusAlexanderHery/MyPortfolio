emailjs.init("vg0-LtTdmKj79MQ4p");

function validateForm(event) {
  event.preventDefault();
  if (grecaptcha.getResponse() == "") {
    console.log(grecaptcha.getResponse());
    return false;
  } else {
    console.log(grecaptcha.getResponse() + " else ");
    grecaptcha.execute();
    return true;
  }
}

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  if (!validateForm) {
    console.log("error");
    alert("Please complete the reCAPTCHA");
  } else {
    var sent = document.getElementById("sent");
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("pesan").value;
    sent.disabled = true;
    var text = sent.innerHTML;
    sent.innerHTML = "Sending";
    console.log("sending");
    var data = {
      from_name: email + " " + name,
      to_name: "Alex",
      message: message,
    };

    emailjs.send("service_92iblp8", "template_2tdqgyj", data).then(
      function (response) {
        alert("Email berhasil dikirim!");
        document.getElementById("contact-form").reset();
      },
      function (error) {
        alert("Gagal mengirim email:", error);
      }
    );
    sent.innerHTML = text;
    sentdisabled = false;
    console.log("sent");
  }
});
