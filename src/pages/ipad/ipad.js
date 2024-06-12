
// caousel 1
const CarouIpad = (arr) => {
  return `  
    <div  id="slider" class="flex w-12/12 lg:overflow-x-hidden overflow-x-scroll  mx-auto px-4 items-center gap-8 pb-10 mb-20 pt-10 cursor-pointer group">
      ${arr.map((item) => {
        return `
        <div class="">
        <div class="xl:h-[750px] xl:w-[400px] h-[600px] w-[300px] duration-500 rounded-3xl overflow-hidden relative shadow-xl hover:scale-[102%] " >
            <div class="absolute ml-8 mt-14 text-[#ffffff]">
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
};

const carouselArr = [
  // card1
  {
    header: "Productivity",
    content: "Your workplace <br> can be any place",
    image:
      "https://www.apple.com/v/ipad/home/cj/images/overview/consider/fc_productivity__d55aee5so6ky_large.jpg",
  },
  // card2
  {
    header: "creativity",
    content: "Take your inner artist <br> out and about.",
    image:
      "https://www.apple.com/v/ipad/home/cj/images/overview/consider/fc_creativity__gcfv7x90x42u_large.jpg",
  },
  // card3
  {
    header: "Learning",
    content: "Your classroom <br> can be anywhere.",
    image:
      "https://www.apple.com/v/ipad/home/cj/images/overview/consider/fc_learning__es1tt702bf6u_large.jpg",
  },
  // card4
  {
    header: "Entertainment",
    content: "Kick back. Tune in.<br> Game on.",
    image:
      "https://www.apple.com/v/ipad/home/cj/images/overview/consider/fc_entertainment__dcynvyyoe7iq_large.jpg",
  },
  // card5
  {
    header: "Apple Pencil",
    content: "Dream it up. <br> Jot it down.",
    image:
      "https://www.apple.com/v/ipad/home/cj/images/overview/consider/fc_pencil__coz76i7lwsuq_large.jpg",
  },
  // card6
  {
    header: "iPadOS + Apps",
    content: "Everyday superpowers.<br> Build it right in.",
    image:
      "https://www.apple.com/v/ipad/home/cj/images/overview/consider/fc_ipados__urrua12bwaqy_large.jpg",
  },
];

class CarouselIpads extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = CarouIpad(carouselArr);
  }
}
customElements.define("ipad-carousal", CarouselIpads);


// carousel 2
const ipadCard = (arr) => {
  return `  
  <div class="flex relative items-center mb-20 group group-hover:translate-y-0 translate-y-0">
    <!-- chevron -->
    <button id="backIpad2" class=" absolute left-4 z-[1]"><img class="xl:w-16 w-10 bg-gray-200/60 xl:px-4 xl:py-4 px-2 py-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0  duration-500" src="../../image/chevron/back.png" alt=""></button>
    <button id="nextIpad2" class=" absolute right-4 z-[1]"><img class="xl:w-16 w-10 bg-gray-200/60 xl:px-4 xl:py-4 px-2 py-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0  duration-500" src="../../image/chevron/next.png" alt=""></button>

    <div id="sliderIpad2" class=" flex cursor-pointer gap-8 lg:px-8 px-4 py-4 lg:overflow-x-hidden overflow-x-scroll">
      ${arr.map((item) => {
        return `
        <div>
          <div class="duration-700 hover:scale-[102%] xl:w-[450px] xl:h-[350px] w-[350px] h-[250px] rounded-3xl overflow-hidden relative px-4 bg-white xl:pt-12 pt-6 xl:pl-12 pl-6 shadow-lg">
            <img src="${image}" alt="">
            <h3 class="xl:text-3xl text-xl font-semibold py-4 "> ${title}</h3>
            <li class="list-none xl:text-xl text-lg font-medium pb-4">${content}</li>
            <img class="xl:w-8 w-6 top-[83%] right-8 absolute" src="../../image/mac/plus.png" alt="">
          </div>                    
        </div>`
      ;}).join("")}     
    </div>
  </div>
  `;
};

const ipadArray = [
  // 1
{
  image : "https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_apple_card__fa68csvawtei_large.png",
  title : "Pay over time, <br> interest-free",
  content : "When you choose to check out <br> with Apple Card Monthly <br> installments.",
},
// 2
{
  image : "https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_trade_in__ca5f20mux4b6_large.png",
  title : "Save with <br> Apple Trade In.",
  content : "Get credit toward your next Mac <br> when you trade in an eligible <br> device.",
},
// 3
{
  image : "https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_customize__b6w4i5ax89py_large.png",
  title : "Customize your Mac",
  content : "Choose your chip, memory, storage, even color.",
},
// 4
{
  image : "https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_delivery__fyzranm9416y_large.png",
  title : "Get flexible delivery <br> and easy pickup",
  content : "Choose two-hour delivery from an <br> Apple Store, free delivery, or easy",
},
// 5
{
  image : "https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_specialist_alt__fht15dmiclei_large.png",
  title : "Shop live with <br> a Specialist.",
  content : "Let us guide you live over vdieo <br> and answer all of your questions.",
},
// 6
{
  image : "https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_person__bayst2x5jyya_large.png",
  title : "Get to know your <br> new Mac.",
  content : "Learn how to get the most out of <br> your new Mac with a freee one-on-<br> one Personal Session.",
},
// 7
{
  image : "https://www.apple.com/v/mac/home/bz/images/overview/incentive/icon_asa__urbsp7b9ktuq_large.png",
  title : "Explore a shopping <br> experience designed <br> around you.",
  content : "Use the Apple Store app to get a more personal way to shop.",
},
]

class ipadCardCarousel extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = ipadCard(ipadArray);
  }
}
customElements.define("ipad-carousal-second", ipadCardCarousel);








function carouselIpad(slider, back, next) {
  next.addEventListener("click", () => {
    slider.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  });
  back.addEventListener("click", () => {
    slider.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  });
}

const back = document.getElementById("back");
const next = document.getElementById("next");
const slider = document.getElementById("slider");

back.addEventListener("click", carouselIpad(slider, back, next));
next.addEventListener("click", carouselIpad(slider, back, next));

const backBtn = document.getElementById("backIpad2");
const nextBtn = document.getElementById("nextIpad2");
const sliderContain = document.getElementById("sliderIpad2");

backBtn.addEventListener("click",carouselIpad(sliderContain, backBtn, nextBtn));
nextBtn.addEventListener("click",carouselIpad(sliderContain, backBtn, nextBtn));

const btn1 = document.getElementsById("ipadbtn");
const btn2 = document.getElementsById("ipadbtn2");
const btn3 = document.getElementsById("ipadbtn3");
const arrow1 = document.getElementsById("arrowIpad");
const arrow2 = document.getElementsById("arrowIpad2");
const arrow3 = document.getElementsById("arrowIpad3");
const container1 = document.getElementsById("containerIpad");
const container2 = document.getElementsById("containerIpad2");
const container3 = document.getElementsById("containerIpad3");
const image1 = document.getElementsById("ipadImage");
const image2 = document.getElementsById("ipadImage2");
const image3 = document.getElementsById("ipadImage3");

btn2.addEventListener("click", () => {
  arrow2.classList.toggle("rotate-180");
  container2.classList.toggle("hidden");
  image2.classList.toggle("hidden");
});

btn3.addEventListener("click", () => {
  arrow3.classList.toggle("rotate-180");
  container3.classList.toggle("hidden");
  image3.classList.toggle("hidden");
});
