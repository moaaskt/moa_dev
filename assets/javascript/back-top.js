const btn = document.querySelector("#top");
btn.addEventListener("click", () => {
    window.scroll({
        top: 0,
        behavior: "smooth",
    })
});