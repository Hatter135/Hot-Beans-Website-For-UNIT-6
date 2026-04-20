function Submitdets(event) {
    event.preventDefault();

    const fullname = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (fullname === "") {
        alert("Please enter your name!");
        return;
    }

    if (email === "") {
        alert("Please enter an email address");
        return;
    }

    // hide the main content
    document.querySelector(".bigbox").style.display = "flex";

    // show the modal
    document.getElementById("success").style.display = "flex";
}

function closeModal() {
    document.getElementById("success").style.display = "none";
    document.querySelector(".bigbox").style.display = "flex";
}






function submitdet(event) {
    event.preventDefault();

const emailinput = document.getElementById("email").value;
const nameinput = document.getElementById("name").value;

if (nameinput === "") {
    alert("Please enter a name")
    return
}

if (emailinput === "") {
    alert("Please enter an email")
    return
}

document.getElementById("success").style.display = "flex";


emailjs.init({ publicKey: "2v4jOAS-wRLqTXcwD" }); 

emailjs.send(
  "service_q9mff4h",
  "template_7wryggv",
  { 
    from_name:  document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message:    document.getElementById("textbox").value
  }
);



}

function closebox() {
    document.getElementById("success").style.display = "none";
}
