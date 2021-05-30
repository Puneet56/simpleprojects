let btn = document.getElementById("btn");
console.log(btn);
let text = document.querySelector(".text");
btn.addEventListener("click", () => text.classList.toggle("clicked"));
