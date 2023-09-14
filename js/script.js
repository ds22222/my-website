var menu = document.getElementById("menu");
var action = document.getElementById("action");

menu.addEventListener("click", () => {
    hundleMenu()
})

function hundleMenu() {
    menu.classList.toggle("is-active");
    actions.classList.toggle("is-active");
}



window.onload = function () {
    var loader = document.querySelector(".loader");
    loader.style.display = "none"; // إخفاء المؤشر بمجرد اكتمال التحميل
};