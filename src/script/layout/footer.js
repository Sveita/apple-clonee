// Footer
const footer= document.querySelector(".footer");
fetch("../../component/footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
    
    const btn = document.querySelectorAll(".btn");
    const container = document.querySelectorAll(".container");
    const upArrow = document.querySelectorAll(".arrow");
  
    for (let i = 0; i < btn.length; i++) {
      btn[i].addEventListener("click", () => {
        btn[i].classList.toggle("active");
        if (btn[i].classList.contains("active")) {
          container[i].classList.toggle("hidden");
          upArrow[i].classList.add("rotate-180");
        } else {
          container[i].classList.remove("max-h-screen");
          container[i].classList.add("max-h-0");
          upArrowArrow[i].classList.remove("rotate-180");
        }
      });
    }    
  })
  .catch((error) => console.error("Error fetching included file:", error));