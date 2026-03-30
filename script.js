
const toggleBtn = document.getElementById("toggleMode");

// Load saved mode
if (localStorage.getItem("mode") === "light") {
    document.body.classList.add("light");
    toggleBtn.textContent = "Light";
}

// Toggle mode
toggleBtn.onclick = () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        localStorage.setItem("mode", "light");
        toggleBtn.textContent = "Light";
    } else {
        localStorage.setItem("mode", "dark");
        toggleBtn.textContent = "Night";
    }
};
