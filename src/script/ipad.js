const ipad = document.querySelector(".ipad");
fetch("../component/ipad/ipad.html")
  .then((res) => res.text())
  .then((data) => {
    ipad.innerHTML = data;

  })
  .catch((error) => console.error("Error fetching included file:", error));