import * as navba from "./navba.js"
import * as footer from "./footer.js"

function carousel(slider, back , next){
  next.addEventListener('click', () => {
    slider.scrollBy({
      left: 500,
      behavior: "smooth",
    })
  })
  back.addEventListener('click', () => {
    slider.scrollBy({
      left: -500, 
      behavior: "smooth",
    })  
  })
} 