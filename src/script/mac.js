const mac = document.querySelector(".mac");
fetch("../component/mac page/mac.html")
  .then((res) => res.text())
  .then((data) => {
    mac.innerHTML = data;
  

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

    iphone.addEventListener('click', () => {
      arrow1.classList.toggle('rotate-180')
      container1.classList.toggle('hidden')
    })

    ipad.addEventListener('click', () => {
      arrow2.classList.toggle('rotate-180')
      container2.classList.toggle('hidden')
    })


    watch.addEventListener('click', () => {
      arrow3.classList.toggle('rotate-180')
      container3.classList.toggle('hidden')
    })
  })

  .catch((error) => console.error("Error fetching included file:", error));