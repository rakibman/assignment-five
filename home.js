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
      alert("no balance");
      return;
    }
    alert("📞Calling in police 999...");
    let currentCoin = (navCoin -= count3);
    getElement("callCoin").innerText = currentCoin;
    // class history section start 
    const callHistory = getElement("history-container");
    const newHistory = document.createElement("div");
    newHistory.innerHTML = `
             <div class=" flex justify-between items-center bg-gray-100 p-3 rounded-[8px] mb-2 ">
                <div>
                  <h1 class="text-[15px] font-bold">Fire Service Number</h1>
                  <p class="text-[#5c5c5c]">999</p>
                </div>
                <div><p>11:36:58 AM</p></div>
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
    
  });
}
