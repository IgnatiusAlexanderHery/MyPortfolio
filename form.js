emailjs.init("vg0-LtTdmKj79MQ4p");

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
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
    },
    function (error) {
      alert("Gagal mengirim email:", error);
    }
  );
});
