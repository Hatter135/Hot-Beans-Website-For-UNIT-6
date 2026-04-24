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


function openSettings() {
    document.getElementById("settingsModal").classList.add("active");
    document.getElementById("overlay").classList.add("active");
}

function closeSettings() {
    document.getElementById("settingsModal").classList.remove("active");
    document.getElementById("overlay").classList.remove("active");
}

// click outside to close
document.getElementById("overlay").addEventListener("click", closeSettings);

const themeSelect = document.getElementById("themeSelect");

themeSelect.addEventListener("change", function () {
    if (this.value === "dark") {
        document.body.classList.add("dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("theme", "light");
    }
});

window.addEventListener("load", () => {
    const saved = localStorage.getItem("theme");

    if (saved === "dark") {
        document.body.classList.add("dark");
        document.getElementById("themeSelect").value = "dark";
    }
});

// on page load, check local storage for theme
window.addEventListener("load", function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
});