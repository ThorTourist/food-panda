function getElemnt(id) {
  const element = document.getElementById(id);
  return element;
}

// console.log("Attcahed");

const buyBtns = document.getElementsByClassName("buy-btn");
// console.log(buyBtns);

for (let button of buyBtns) {
  // console.log(button);

  button.addEventListener("click", function () {
    const productImg =
      button.parentNode.parentNode.parentNode.childNodes[1].childNodes[1].src;

    const productTitle =
      button.parentNode.parentNode.parentNode.childNodes[3].childNodes[1]
        .innerText;
    const productPrice =
      button.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
    // console.log(productImg, productTitle, productPrice);

    // total price calc
    const totalPrice = getElemnt("total-price").innerText;

    const currentTotal = Number(productPrice) + Number(totalPrice);

    getElemnt("total-price").innerText = currentTotal;

    // quantity calc

    const totalQuantity = getElemnt("total-quantity").innerText;
    const currentTotalQuantity = Number(totalQuantity) + 1;
    console.log(totalQuantity, currentTotalQuantity);
    getElemnt("total-quantity").innerText = currentTotalQuantity;
  });
}
