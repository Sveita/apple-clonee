const home = document.querySelector(".home");
fetch("../home/component/home.html")
  .then((res) => res.text())
  .then((data) => {
    home.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));
