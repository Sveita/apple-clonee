// Footer
const footer= document.querySelector(".footer");
fetch("../component/layout/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
    
    // const btn = document.querySelectorAll(".btn");
    // const container = document.querySelectorAll(".container");
    // const upArrow = document.querySelectorAll(".arrow");
  
    // for (let i = 0; i < btn.length; i++) {
    //   btn[i].addEventListener("click", () => {
    //     btn[i].classList.toggle("active");
    //     if (btn[i].classList.contains("active")) {
    //       container[i].classList.toggle("hidden");
    //       upArrow[i].classList.add("rotate-180");
    //     } else {
    //       container[i].classList.remove("max-h-screen");
    //       container[i].classList.add("max-h-0");
    //       upArrowArrow[i].classList.remove("rotate-180");
    //     }
    //   });
    // }    
// 
    const shop = document.getElementById('shopButton')
    const shopContainer = document.getElementById('shopContainer')
    const upArrow1 = document.getElementById('upArrow1')

    shop.addEventListener('click', () => {
      shopContainer.classList.toggle("hidden");
      upArrow1.classList.toggle("rotate-180")
    })

// 2
    const btn2= document.getElementById('btn2')
    const container2 = document.getElementById('container2')
    const upArrow2 = document.getElementById('upArrow2')

    btn2.addEventListener('click', () => {
      container2.classList.toggle("hidden");
      upArrow2.classList.toggle("rotate-180")
    })

// 3
    const btn3 = document.getElementById('btn3')
    const container3= document.getElementById('container3')
    const upArrow3 = document.getElementById('upArrow3')

    btn3.addEventListener('click', () => {
      container3.classList.toggle("hidden");
      upArrow3.classList.toggle("rotate-180")
    })

// 4
    const btn4 = document.getElementById('btn4')
    const container4 = document.getElementById('container4')
    const upArrow4 = document.getElementById('upArrow4')

    btn4.addEventListener('click', () => {
      container4.classList.toggle("hidden");
      upArrow4.classList.toggle("rotate-180")
    })

// 5
    const btn5 = document.getElementById('btn5')
    const container5 = document.getElementById('container5')
    const upArrow5 = document.getElementById('upArrow5')

    btn5.addEventListener('click', () => {
      container5.classList.toggle("hidden");
      upArrow5.classList.toggle("rotate-180")
    })

// 6
    const btn6 = document.getElementById('btn6')
    const container6 = document.getElementById('container6')
    const upArrow6 = document.getElementById('upArrow6')

    btn6.addEventListener('click', () => {
      container6.classList.toggle("hidden");
      upArrow6.classList.toggle("rotate-180")
    })

// 7
    const btn7 = document.getElementById('btn7')
    const container7 = document.getElementById('container7')
    const upArrow7 = document.getElementById('upArro7')

    btn7.addEventListener('click', () => {
      container7.classList.toggle("hidden");
      upArrow7.classList.toggle("rotate-180")
    })

// 8
    const btn8 = document.getElementById('btn8')
    const containe8 = document.getElementById('container8')
    const upArrow8 = document.getElementById('upArro8')

    btn8.addEventListener('click', () => {
      container8.classList.toggle("hidden");
      upArrow8.classList.toggle("rotate-180")
    })


// 9
    const btn9 = document.getElementById('btn9')
    const container9 = document.getElementById('container9')
    const upArrow9 = document.getElementById('upArrow9')

    btn9.addEventListener('click', () => {
      container9.classList.toggle("hidden");
      upArrow9.classList.toggle("rotate-180")
    })

// 10
    const btn10 = document.getElementById('btn10')
    const container10 = document.getElementById('container10')
    const upArrow10 = document.getElementById('upArrow10')

    btn10.addEventListener('click', () => {
      container10.classList.toggle("hidden");
      upArrow10.classList.toggle("rotate-180")
    })

    // 11
    const btn11 = document.getElementById('btn11')
    const container11 = document.getElementById('container11')
    const upArrow11 = document.getElementById('upArrow11')

    btn11.addEventListener('click', () => {
      container11.classList.toggle("hidden");
      upArrow11.classList.toggle("rotate-180")
    })
  })
  .catch((error) => console.error("Error fetching included file:", error));