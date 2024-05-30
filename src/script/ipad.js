const ipad = document.querySelector(".ipad");
fetch("../component/ipad/ipad.html")
  .then((res) => res.text())
  .then((data) => {
    ipad.innerHTML = data;

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

    const back2 = document.getElementById("backIpad")
    const next2 = document.getElementById("nextIpad")
    const slider2 = document.getElementById("sliderIpad")

    back2.addEventListener("click", carousel(slider2, back2, next2))
    next2.addEventListener("click", carousel(slider2, back2, next2))


    const btn1 = document.getElementsById("ipad-btn")
    const btn2 = document.getElementsById("ipad-btn2")
    const btn3 = document.getElementsById("ipad-btn3")
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
      arrow1.classList.toggle('rotate-180')
      container1.classList.toggle('hidden')
      image1.classList.toggle('hidden')
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
  })
  .catch((error) => console.error("Error fetching included file:", error));