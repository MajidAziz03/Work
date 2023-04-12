const modal = document.querySelector(".modal-active")
const btn = document.querySelector('.btnView')
const modalBackdrop = document.querySelector('.modal')
const crossed = document.querySelector('.cross')


const cat1 = document.querySelector('.card-cat.cat-1')
const cat2 = document.querySelector('.card-cat.cat-2')
const cat3 = document.querySelector('.card-cat.cat-3')
const cat4 = document.querySelector('.card-cat.cat-4')

const modalCat1 = document.querySelector(".modal-category1")
const modalCat2 = document.querySelector(".modal-category2")
const modalCat3 = document.querySelector(".modal-category3")
const modalCat4 = document.querySelector(".modal-category4")

const crossCat1 = document.querySelector(".cross-cat1")
const crossCat2 = document.querySelector(".cross-cat2")
const crossCat3 = document.querySelector(".cross-cat3")
const crossCat4 = document.querySelector(".cross-cat4")



btn.addEventListener("click", () => {
    modal.classList.remove("modal-active")
})

crossed.addEventListener("click", () => {
    modal.classList.add("modal-active")
})

cat1.addEventListener('click', () => {
    modalCat1.classList.remove("modal-category-active1")
})

cat2.addEventListener('click', () => {
    modalCat2.classList.remove("modal-category-active2")
})

cat3.addEventListener('click', () => {
    modalCat3.classList.remove("modal-category-active3")
})

cat4.addEventListener('click', () => {
    modalCat4.classList.remove("modal-category-active4")
})



modalCat1.addEventListener("click", () => {
    modalCat1.classList.add("modal-category-active1")
})


modalCat2.addEventListener("click", () => {
    modalCat2.classList.add("modal-category-active2")
})


modalCat3.addEventListener("click", () => {
    modalCat3.classList.add("modal-category-active3")
})


modalCat4.addEventListener("click", () => {
    modalCat4.classList.add("modal-category-active4")
})
