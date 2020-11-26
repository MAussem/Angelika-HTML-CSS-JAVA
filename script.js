window.onload = () => {
    setTimeout(() => {
        document.querySelector("body").classList.add
            ("display");
    }, 2000);
};


document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
});

document.querySelectorAll(".field").forEach((field) => {
    field.addEventListener("click", (e) => {
        e.target.classList.add("has-text");
    });
})




