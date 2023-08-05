let navBtns = document.querySelectorAll("nav > div > div ");
let sections = document.querySelectorAll("body > main > section");

// pages control
navBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        document.documentElement.scrollTo(0, 0);
        navBtns.forEach((btn) => {
            btn.classList.remove("active");
        });
        btn.classList.add("active");
        sections.forEach((sec) => {
            sec.classList.remove("active");
        });
        document.querySelector(`.${btn.id}`).classList.add("active");
    });
});
document.getElementById("theme").addEventListener("click", () => {
    console.log(document.documentElement.classList);
    document.documentElement.classList.toggle("light-mode");
});
// about
let info = document.querySelector(".about-container > .right");
let infoBoxes = document.querySelectorAll(".about-container > .right .box");
window.onscroll = () => {};

let progsContainer = document.querySelectorAll(".prog-container");
let progDisplay = document.querySelectorAll(".prog-display");
let progress = document.querySelectorAll(".progress > div");

window.onscroll = () => {
    if (window.scrollY >= document.getElementById("skills").offsetTop - 400) {
        progsContainer.forEach((element, i) => {
            setTimeout(() => {
                progDisplay[i].innerHTML = progress[i].getAttribute("data");
                progress[i].style.width = progress[i].getAttribute("data");
            }, i * 400);
        });
    }
    if (window.scrollY >= document.getElementById("rightAbout").offsetTop - 150)
        infoBoxes.forEach((box) => {
            infoBoxes.forEach((box) => {
                box.classList.remove("hide");
                box.classList.add("show");
            });
        });
};
