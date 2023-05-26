AOS.init({
    duration: 700,
    once: true
});

 
new SimpleLightbox({ elements: ".galerie-container a"});

new SimpleLightbox({ elements: ".orar-imagini a"});

 emailjs.init("viFkG-sirngjH6CtO");

 function mobileMenu() {
    var x = document.getElementById("navbar");

    if (x.className === "") {
        x.className = "mobile";
    } else {
        x.className = "";
    }
}

 function send() {

    if (document.getElementById("formular").checkValidity() == false) {
        document.getElementById("formular").reportValidity();
        return;
    }

    var date = {
        nume: document.getElementById("nume").value,
        email: document.getElementById("email").value,
        mesaj: document.getElementById("mesaj").value
    };

    emailjs.send("service_r6axp0b", "template_fkz8imq", date)
        .then(function (raspuns) {
            alert("Mesajul a fost transmis.")
            document.getElementById("formular").reset();
        }, function (error) {
            alert("Eroare la transmitere. Contactati programatorul.")
        })

}
