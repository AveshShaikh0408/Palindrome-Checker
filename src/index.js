// Element selection
const btnCheck = document.querySelector("button");
const str = document.querySelector("input");

// Event Listener on Check Button
btnCheck.addEventListener("click", (e) => {
  e.preventDefault();

  const inputStr = str.value;
  const letters = /^[0-9]/;

  const cleanStr = inputStr.toLowerCase().replace(/[\W_]/g, "");
  const reverseString = cleanStr.split("").reverse().join("");

  // Number and Empty string check
  if (inputStr === "" || inputStr.match(letters)) {
    document.querySelector(
      ".output-text"
    ).innerHTML = `<div class="text"><p> Please enter String 😵 !!</p></div>`;

    // Matching string check
  } else if (cleanStr === reverseString) {
    document.querySelector(
      ".output-text"
    ).innerHTML = `<div class="text"> <p> "${inputStr}" = "${reverseString}" </p>
      <p style="font-site:1rem">It is palindrome 🥳.</p>
    </div>`;
    str.value = "";

    // Not Match handling using "else"
  } else {
    document.querySelector(".output-text").innerHTML = `<div  class="text">
      <p style="font-site:1rem">It is not a palindrome ⛔️!!</p>
    </div>`;
    str.value = "";
  }
});
