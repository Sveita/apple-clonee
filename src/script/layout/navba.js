const navba = document.querySelector(".navba");
fetch("../component/layout/navba.html")
  .then((res) => res.text())
  .then((data) => {
    navba.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));