const modal = document.querySelector(".modal-active")
const btn = document.querySelector('.btnView')
const modalBackdrop = document.querySelector('.modal')
const crossed = document.querySelector('.cross')


btn.addEventListener("click", () => {
    modal.classList.remove("modal-active")
})

crossed.addEventListener("click", () => {
    modal.classList.add("modal-active")
})
