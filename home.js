//card heart count section done 
const cardHearts = document.getElementsByClassName("cardHeartbtn");
const redHeart = document.getElementById("redhart");

let count = 0;
for (let cardHeart of cardHearts) {
  cardHeart.addEventListener("click", function () {
    count++;
    document.getElementById("redhart").innerText = count;
  });
}


