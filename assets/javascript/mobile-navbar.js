const mobile = document.querySelector(".mobile-menu")
const list = document.querySelector(".nav-list")

mobile.addEventListener("click", () => {
    mobile.classList.toggle("on")
    list.classList.toggle("on")
})
