
const carouselStore = (image, text) => {
  return `
  <div>
    <div class="w-[150px]">
      <img class="w-full h-full" src="${image}" alt="">
      <p class="text-center mt-4">${text}</p>
    </div>
  </div >
  `
}

const carouselArr = [
  // card1
{
  image : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&hei=260&fmt=png-alpha&.v=1696964122666" ,
  text : "Mac"
},
// card2
{
  image : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-iphone-nav-202309_GEO_US?wid=400&hei=260&fmt=png-alpha&.v=1692971740190" ,
  text : "iPhone"
},
// card3
{
  image : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437" ,
  text : "iPad"
},
// card4
{
  image : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-watch-nav-202309?wid=400&hei=260&fmt=png-alpha&.v=1693703822208" ,
  text : "Apple Watch"
},
// card5
{
  image : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-vision-pro-nav-202401?wid=400&hei=260&fmt=png-alpha&.v=1702403595269" ,
  text : "Apple Vision Pro"
},
// card6
{
  image : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=400&hei=260&fmt=png-alpha&.v=1660676485885" ,
  text : "AirPods"
},
// card7 
{
  image : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000" ,
  text : "AirTag"
},
// card8 
{
  image : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484" ,
  text : "Apple TV 4K"
}
// card9
{
  image : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654" ,
  text : "HomePod"
},
// card10
{
  image : "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/store-card-13-accessories-nav-202403?wid=400&hei=260&fmt=png-alpha&.v=1707850611597" ,
  text : "Apple Gift Card"
}
]

class CarouselStore extends HTMLElement {
constructor(){
    super()
}
connectedCallback(){
    this.innerHTML = carouselStore(carouselArr);
}
}
customElements.define("carousel-store", CarouselStore)



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
