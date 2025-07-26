document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const toggleButton = document.getElementById("toggleSidebar");

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("expanded");
    });
});

window.onload = function(){
    const tabMe = document.getElementById("me");
    if (tabMe.classList.contains("active"))
        addBackground()
    else
        removeBackground()
};

function addBackground() {
    const page = document.getElementById("pageBackground");
    page.classList.add("background");
};

function removeBackground() {
    const page = document.getElementById("pageBackground");
    page.classList.remove("background");
};