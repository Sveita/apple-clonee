
const carouselCard = (arr) => {
  return `
  <div  id="sliderMac" class="flex w-12/12 lg:overflow-x-hidden overflow-x-scroll  mx-auto px-4 items-center gap-8 pb-10 mb-20 pt-10 cursor-pointer group">
    ${arr.map ((item) => {
      return `
        <div>
          <div class="xl:h-[750px] xl:w-[400px] h-[600px] w-[300px] duration-500 rounded-3xl overflow-hidden relative shadow-xl hover:scale-[102%]" >
              <div class="absolute ml-8 mt-14 ${item.textColor}">
                  <h6 class="text-[17px] font-medium ">${item.header}</h6>
                  <h2 class="text-2xl font-medium">${item.content}</h2>
              </div>
              <img class="w-full h-full" src="${item.image}" alt="">
              <div class="absolute bottom-4 right-4 ">
                  <img class="w-8 " src="../../image/mac/plus.png" alt="">
              </div>
          </div>
        </div>`
      ;}).join("")}  
  </div>           
  `;
}

const carArr = [
  // card1
{
  textColor : "text-[#ffffff]",
  header : "Getting Started" ,
  content : "Easy to use. Easy to love." ,
  image : "https://www.apple.com/v/mac/home/bz/images/overview/consider/mac_ease__bvgkz2zdltxy_medium.jpg" ,
},
// card2
{
  textColor : "text-[#ffffff]",
  header : "Performace and Bettery Life" ,
  content : "Go fast. Go far." ,
  image : "https://www.apple.com/v/mac/home/bz/images/overview/consider/mac_performance__dh5hyac1zf8m_xlarge.jpg" ,
},
// card3
{
  textColor : "text-[#000000]",
  header : "Mac and iPhone" ,
  content : "Dream team." ,
  image : "https://www.apple.com/v/mac/home/bz/images/overview/consider/mac_iphone__gh1tblkt6bqm_xlarge.jpg" ,
},
// card4
{
  textColor : "text-[#000000]",
  header : "Compatibility" ,
  content : "Nac runs your <br> favorite apps." ,
  image : "https://www.apple.com/v/mac/home/bz/images/overview/consider/mac_compatibility__cu59oukz81ci_xlarge.jpg" ,
},
// card5
{
  textColor : "text-[#ffffff]",
  header : "Privacy and Security" ,
  content : "Your business is <br> nobody else's." ,
  image : "https://www.apple.com/v/mac/home/bz/images/overview/consider/mac_security__gfwda10khdym_xlarge.jpg" ,
},
// card6
{
  textColor : "text-[#000000]",
  header : "Durability" ,
  content : "Build to stand the <br> test of time." ,
  image : "https://www.apple.com/v/mac/home/bz/images/overview/consider/mac_durability__epiwcuk7zkeq_xlarge.jpg" ,
},
// card7 
{
  textColor : "text-[#000000]",
  header : "Apple Values" ,
  content : "Our values drive <br> everythng we do." ,
  image : "https://www.apple.com/v/mac/home/bz/images/overview/consider/mac_values__c9gck9qi4kia_xlarge.jpg" ,
}
]

class CarouselMac extends HTMLElement {
constructor(){
    super()
}
connectedCallback(){
    this.innerHTML = carouselCard(carArr);
}
}
customElements.define("carousel-mac", CarouselMac)



// element 2
const carouselCard2 = (arr) => {
  return`
  <div id="sliderMac2" class=" flex cursor-pointer gap-8 lg:px-8 px-4 py-4 lg:overflow-x-hidden overflow-x-scroll">
    ${arr.map((item) => {
    return `
      <div>
        <div class="duration-700 hover:scale-[102%] xl:w-[450px] xl:h-[350px] w-[350px] h-[250px] rounded-3xl overflow-hidden relative px-4 bg-[#ffffff] xl:pt-12 pt-6 xl:pl-12 pl-6 shadow-lg">
            <img src="${item.image}" alt="">
            <h3 class="xl:text-3xl text-xl font-semibold py-4 ">${item.titleCard}</h3>
            <li class="list-none xl:text-xl text-lg font-medium pb-4">${item.content}</li>
            <img class="xl:w-8 w-6 top-[83%] right-8 absolute" src="../../image/mac/plus.png" alt="">
        </div>                    
      </div>
    `;}).join("")}
  </div> `;
};

const carouselArr2 = [
  // card1
{
  image : "https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_apple_card__fa68csvawtei_large.png" ,
  titleCard : "Pay over time, <br> interest-free",
  content : "When you choose to check out <br> with Apple Card Monthly"
},
// card2
{
  image : "https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_trade_in__ca5f20mux4b6_large.png" ,
  titleCard : "Save with <br> Apple Trade In.",
  content : "Get credit toward your next Mac <br> when you trade in an eligible <br> device."
},
// card3
{
  image : "https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_customize__b6w4i5ax89py_large.png" ,
  titleCard : "Customize your Mac",
  content : "Choose your chip, memory, storage, even color."
},
// card4
{
  image : "https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_delivery__fyzranm9416y_large.png" ,
  titleCard : "Get flexible delivery <br> and easy pickup",
  content : "Choose two-hour delivery from an <br> Apple Store, free delivery, or easy <br> pickup options."
},
// card5
{
  image : "https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_specialist_alt__fht15dmiclei_large.png" ,
  titleCard : "Shop live with <br> a Specialist.",
  content : "Let us guide you live over vdieo <br> and answer all of your questions.",
},
// card6
{
  image : "https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_person__bayst2x5jyya_large.png" ,
  titleCard : "Get to know your <br> new Mac.",
  content : "Learn how to get the most out of <br> your new Mac with a freee one-on-<br> one Personal Session."
},
// card7 
{
  image : "https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_asa__urbsp7b9ktuq_large.png" ,
  titleCard : "Explore a shopping <br> experience designed <br> around you.",
  content : "Explore a shopping <br> experience designed <br> around you."
}
]

class CarouselMac2 extends HTMLElement {
constructor(){
    super()
}
connectedCallback(){
    this.innerHTML = carouselCard2(carouselArr2);
}
}
customElements.define("carousel-mac2", CarouselMac2)





const laptopBtn = document.querySelector('.btn1')
const desktopBtn = document.querySelector('.btn2')
const displayBtn = document.querySelector('.btn3')
const laptop = document.querySelector('.laptops')
const laptopEle = document.querySelector('.laptops-ele')
const display = document.querySelector('.display')
const displayEle = document.querySelector('.display-ele')
const desktop = document.querySelector('.desktop')
const desktopEle = document.querySelector('.desktop-ele')

desktopBtn.addEventListener('click', () => {
  desktopBtn.classList.toggle('bg-black')
  desktopBtn.classList.toggle('text-white')
  desktop.classList.toggle('hidden')
  desktopEle.classList.toggle('hidden')
})  

displayBtn.addEventListener('click', () => {
  displayBtn.classList.toggle('bg-black')
  displayBtn.classList.toggle('text-white')
  display.classList.toggle('hidden')
  displayEle.classList.toggle('hidden')
})  

laptopBtn.addEventListener('click', () => {
  laptopBtn.classList.toggle('bg-white')
  laptopBtn.classList.toggle('text-white')
  laptop.classList.toggle('hidden')
  laptopEle.classList.toggle('hidden')
})  

let iphone = document.querySelector('.iphoneBtn')
let ipad = document.querySelector('.ipadBtn')
let watch = document.querySelector('.watchBtn')
let arrow1 = document.querySelector('.arrow1')
let arrow2= document.querySelector('.arrow2')
let arrow3= document.querySelector('.arrow3')
let container1 = document.querySelector('.container1')
let container2 = document.querySelector('.container2')
let container3 = document.querySelector('.container3')
let macIphone = document.querySelector('.macIphone')
let macIpad = document.querySelector('.macIpad')
let macWatch = document.querySelector('.macWatch')

iphone.addEventListener('click', () => {
  arrow1.classList.toggle('rotate-180')
  container1.classList.toggle('hidden')
  macIphone.classList.toggle('hidden')
})

ipad.addEventListener('click', () => {
  arrow2.classList.toggle('rotate-180')
  container2.classList.toggle('hidden')
  macIpad.classList.toggle('hidden')
})


watch.addEventListener('click', () => {
  arrow3.classList.toggle('rotate-180')
  container3.classList.toggle('hidden')
  macWatch.classList.toggle('hidden')
})

function carouselMac (slider, back, next) {
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

const backMac = document.getElementById('backMac')
const nextMac = document.getElementById('nextMac')
const sliderMac = document.getElementById('sliderMac')

backMac.addEventListener("click", carouselMac(sliderMac, backMac, nextMac))
nextMac.addEventListener("click", carouselMac(sliderMac, backMac, nextMac))

const backMac2 = document.getElementById('backMac2')
const nextMac2 = document.getElementById('nextMac2')
const sliderMac2 = document.getElementById('sliderMac2')

backMac2.addEventListener("click", carouselMac(sliderMac2, backMac2, nextMac2))
nextMac2.addEventListener("click", carouselMac(sliderMac2, backMac2, nextMac2))



const backMac3 = document.getElementById('backMac3')
const nextMac3 = document.getElementById('nextMac3')
const sliderMac3 = document.getElementById('sliderMac3')

backMac.addEventListener("click", carouselMac(sliderMac3, backMac3, nextMac3))
nextMac3.addEventListener("click", carouselMac(sliderMac3, backMac3, nextMac3))

nextMac1.addEventListener('click',() => {
  alert('hi')
})