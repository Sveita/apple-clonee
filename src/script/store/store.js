const store = document.querySelector(".store");
fetch("../component/store/store.html")
  .then((res) => res.text())
  .then((data) => {
    store.innerHTML = data;
  })
  .catch((error) => console.error("Error fetching included file:", error));