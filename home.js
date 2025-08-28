// common use function
function getElement(id) {
  const element = document.getElementById(id);
  return element;
}
//card heart count feture
const cardHearts = document.getElementsByClassName("cardHeartbtn");
const redHeart = getElement("redhart").innerText;

let count1 = 0;
for (let cardHeart of cardHearts) {
  cardHeart.addEventListener("click", function () {
    count1++;
    getElement("redhart").innerText = count1;
  });
}

// Call button feture

const cardButtons = document.getElementsByClassName("callBtn");
let navCoin = getElement("callCoin").innerText;

let count3 = 20;
for (let cardButton of cardButtons) {
  cardButton.addEventListener("click", function () {
    if (navCoin < 20) {
      alert("❌ You don't have enough coins.");
      return;
    }
    // travarce for finding card title and number

    const title = cardButton.parentNode.parentNode.children[1].innerText;
    const number = cardButton.parentNode.parentNode.children[3].innerText;

    // time printin feture section
    const Time = new Date();
    const time = Time.toLocaleTimeString();
    // alert section start
    alert("📞 Caling " + title + " " + number + "...");
    let currentCoin = (navCoin -= count3);
    getElement("callCoin").innerText = currentCoin;
    // class history section start
    const callHistory = getElement("history-container");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
             <div class=" flex justify-between items-center bg-gray-100 p-3 rounded-[8px] mb-2 ">
                <div>
                  <h1 class="text-[15px] font-bold">${title}</h1>
                  <p class="text-[#5c5c5c]">${number}</p>
                </div>
                <div><p>${time}</p></div>
              </div>
    `;
    callHistory.append(newHistory);
  });
}
// history clear button feture

const clear = document.getElementById("clearButton");
clear.addEventListener("click", function () {
  getElement("history-container").innerHTML = "";
});

// Copy button feture

const copyBtns = document.getElementsByClassName("cardCopyBtn");
const navCopyCount = getElement("copy-Count").innerText;

let count2 = 0;
for (let copyBtn of copyBtns) {
  copyBtn.addEventListener("click", function () {
    count2++;
    getElement("copy-Count").innerText = count2;
    const hotline = copyBtn.parentNode.parentNode.children[3].innerText;
    // console.log(hotline);
    navigator.clipboard.writeText(hotline);
  });
}
