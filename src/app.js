


const input = document.querySelector("#theme");
const divSun = document.querySelector("#moon");
const moon = document.querySelector("#svgMoon")

input.addEventListener("change", (e) => {
  if (input.checked) {
    divSun.classList.remove("bg-sun");
    divSun.classList.remove("bg-cover");
    divSun.classList.remove("bg-no-repeat");
    moon.classList.add("block")
    moon.classList.remove("hidden")
  } else {
    // Si el input no está marcado, probablemente quieras quitar la clase "bg-moon"
    moon.classList.add("hidden")
    moon.classList.remove("block")
    divSun.classList.add("bg-sun")
    divSun.classList.add("bg-cover")
    divSun.classList.add("bg-no-repeat")
  }
});


