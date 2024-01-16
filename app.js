const individualQandAContainer = document.querySelectorAll(
  ".individual-qanda-container"
);
//console.log(individualQandAContainer);
individualQandAContainer.forEach((originalItem) => {
  const btn = originalItem.querySelector("button");
  //console.log(btn);
  btn.addEventListener("click", () => {
    individualQandAContainer.forEach((item) => {
      if (item !== originalItem) {
        item.classList.remove("show-items");
      }
    });
    originalItem.classList.toggle("show-items");
  });
});
