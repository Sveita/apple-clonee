const store = document.querySelector(".store");
fetch("../component/store/store.html")
  .then((res) => res.text())
  .then((data) => {
    store.innerHTML = data;

      function carousel(slider, back , next){
        next.addEventListener('click', () => {
          slider.scrollBy({
            left: 440,
            behavior: "smooth",
          })
        })
        back.addEventListener('click', () => {
          slider.scrollBy({
            left: -440, 
            behavior: "smooth",
          })  
        })
      }

      const nextBtn = document.querySelector("#nextBtn")
      const backBtn = document.querySelector("#backBtn")
      const slider = document.querySelector("#slide-container")

      nextBtn.addEventListener('click', carousel(slider, backBtn , nextBtn))
      backBtn.addEventListener("click", carousel(slider, backBtn , nextBtn))

      const next1 = document.getElementById('next1')
      const back1= document.getElementById('back1')
      const slider1 = document.getElementById('slider1')

      next1.addEventListener("click", carousel(slider1, back1, next1))
      back1.addEventListener("click", carousel(slider1, back1, next1))

      const next2 = document.getElementById('next2')
      const back2 = document.getElementById('back2')
      const slider2 = document.getElementById('slider2')

      next2.addEventListener("click", carousel(slider2, back2, next2))
      back2.addEventListener("click", carousel(slider2, back2, next2))

      const next3 = document.getElementById('next3')
      const back3 = document.getElementById('back3')
      const slider3 = document.getElementById('slider3')

      next3.addEventListener("click", carousel(slider3, back3, next3))
      back3.addEventListener("click", carousel(slider3, back3, next3))

      const next4 = document.getElementById('next4')
      const back4 = document.getElementById('back4')
      const slider4 = document.getElementById('slider4')

      next4.addEventListener("click", carousel(slider4, back4, next4))
      back4.addEventListener("click", carousel(slider4, back4, next4))

      const next5 = document.getElementById('next5')
      const back5 = document.getElementById('back5')
      const slider5 = document.getElementById('slider5')

      next5.addEventListener("click", carousel(slider5, back5, next5))
      back5.addEventListener("click", carousel(slider5, back5, next5))

      const next6 = document.getElementById('next6')
      const back6 = document.getElementById('back6')
      const slider6 = document.getElementById('slider6')

      next6.addEventListener("click", carousel(slider6, back6, next6))
      back6.addEventListener("click", carousel(slider6, back6, next6))

  })
  .catch((error) => console.error("Error fetching included file:", error));