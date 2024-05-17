const input = document.querySelector("#theme");
const divSun = document.querySelector("#moon");
const moon = document.querySelector("#svgMoon")
const padreHtml = document.documentElement
const texto = document.querySelector("#text");

function comprobarInput(){
  if (input.checked) {
    texto.textContent = "Dark Mode"
    localStorage.setItem("theme","dark")
    padreHtml.classList.remove("light")
    padreHtml.classList.add("dark")
    divSun.classList.remove("bg-sun");
    divSun.classList.remove("bg-cover");
    divSun.classList.remove("bg-no-repeat");
    moon.classList.add("block")
    moon.classList.remove("hidden")
  } else {
    texto.textContent= "Light Mode"
    localStorage.setItem("theme","light")
    padreHtml.classList.remove("dark")
    padreHtml.classList.add("light")
    moon.classList.add("hidden")
    moon.classList.remove("block")
    divSun.classList.add("bg-sun")
    divSun.classList.add("bg-cover")
    divSun.classList.add("bg-no-repeat")
  }
}

input.addEventListener("change", comprobarInput);


addEventListener('DOMContentLoaded',()=>{
  const local = localStorage.getItem("theme")
  if(local){
    if(local === "dark"){
      input.checked = true
      comprobarInput()
    }else{
      input.checked = false
      comprobarInput()
    }
  }else{
    const themeSystem = window.matchMedia(('(prefers-color-scheme:light)')).matches
  
    if(themeSystem){
      localStorage.setItem("theme","light")
      input.checked = false
      comprobarInput()
    }else{
      localStorage.setItem("theme","dark")
      input.checked = true
      comprobarInput()
    }
  }
})