

function carouselIpad (slider, back, next) {
    next.addEventListener('click', () => {
      slider.scrollBy({
        left: 400,
        behavior: "smooth",
      })
    })
    back.addEventListener("click", () => {
      slider.scrollBy({
        left: -400,
        behavior: "smooth"
      })
    })
  }
  
  const back = document.getElementById("back")
  const next = document.getElementById("next")
  const slider = document.getElementById("slider")
  
  back.addEventListener("click", carouselIpad(slider, back, next))
  next.addEventListener("click", carouselIpad(slider, back, next))
  
  
  const backBtn = document.getElementById("backIpad2")
  const nextBtn = document.getElementById("nextIpad2")
  const sliderContain = document.getElementById("sliderIpad2")
  
  backBtn.addEventListener("click", carouselIpad(sliderContain, backBtn, nextBtn))
  nextBtn.addEventListener("click", carouselIpad(sliderContain, backBtn, nextBtn))
  
  const btn1 = document.getElementsById("ipadbtn")
  const btn2 = document.getElementsById("ipadbtn2")
  const btn3 = document.getElementsById("ipadbtn3")
  const arrow1 = document.getElementsById("arrowIpad")
  const arrow2 = document.getElementsById("arrowIpad2")
  const arrow3 = document.getElementsById("arrowIpad3")
  const container1 = document.getElementsById("containerIpad")
  const container2 = document.getElementsById("containerIpad2")
  const container3 = document.getElementsById("containerIpad3")
  const image1 = document.getElementsById("ipadImage")
  const image2 = document.getElementsById("ipadImage2")
  const image3 = document.getElementsById("ipadImage3")
  
  btn1.addEventListener('click', () => {
    alert('hi')
  })
  
  btn2.addEventListener('click', () => {
    arrow2.classList.toggle('rotate-180')
    container2.classList.toggle('hidden')
    image2.classList.toggle('hidden')
  })
  
  btn3.addEventListener('click', () => {
    arrow3.classList.toggle('rotate-180')
    container3.classList.toggle('hidden')
    image3.classList.toggle('hidden')
  })
  