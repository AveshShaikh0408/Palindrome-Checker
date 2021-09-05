const btnCheck = document.querySelector("button");
const str = document.querySelector("input");

btnCheck.addEventListener("click", (e) => {
  e.preventDefault();

  const inputStr = str.value;
  console.log(inputStr);

  const cleanStr = inputStr.toLowerCase().replace(/[\W_]/g, "");
  const reverseString = cleanStr.split("").reverse().join("");
  if (inputStr === "") {
    document.querySelector(
      ".output-text"
    ).innerHTML = `<div class="text"><p> Please enter String first 😵 !!</p></div>`;
  } else if (cleanStr === reverseString) {
    document.querySelector(
      ".output-text"
    ).innerHTML = `<div class="text"> <p> "${inputStr}" = "${reverseString}" </p>
      <p style="font-site:1rem">It is palindrome.</p>
    </div>`;
    str.value = "";
  } else {
    document.querySelector(".output-text").innerHTML = `<div  class="text">
      <p style="font-site:1rem">It is not a palindrome!!</p>
    </div>`;
    str.value = "";
  }
});

// // Selecting Elements
// const btnCheck = document.querySelector(".btn");
// const userInput = document.querySelector(".input-string");
// const output = document.querySelector(".output-box");

// btnCheck.addEventListener("click", function () {
//   //Getting Input String
//   let str = userInput.value;
// //
//   // Function Call
//   palindromeChecker(str);
// });

// const palindromeChecker = (str) => {
//   const cleanStr = str.toLowerCase().replace(/[\W_]/g, "");
//   const reverseString = cleanStr.split("").reverse().join("");
//   if (cleanStr === reverseString) {
//     // console.log(`String is Palindrome: ${cleanStr} - ${reverseString}`);
//     const outputString = `<h2>${cleanStr}:${reverseString}</h2> <br/> String is Palindrome.`;
//     console.log(output);
//     output.textContent = outputString;
//   } else {
//     // console.log(`String is not a Palindrome: ${cleanStr} - ${reverseString}`);
//     output.textContent = `<h2>${cleanStr} =/= ${reverseString} </h2><br/> String is not a Palindrome.`;
//   }
// };
