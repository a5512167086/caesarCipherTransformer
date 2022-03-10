const transTarget = document.querySelector(".transTarget");
const transShift = document.querySelector(".transShift");
const button = document.querySelector(".btn");
const transResult = document.querySelector(".transResult");
// Init AlphaList
const alphaData = await fetch("./alpha.json").then((res) => res.json());

// Add Event Listener For Button
button.addEventListener("click", (e) => {
  e.preventDefault();
  let result = caesarCipherArr(transTarget.value, parseInt(transShift.value));
  transResult.innerText = result;
});

function caesarCipherArr(inputText, shift) {
  let inputTextToArray = inputText.split("");
  let transResult = "";

  inputTextToArray.forEach((alpha) => {
    if (!alpha.match(/[a-zA-Z]/)) {
      transResult += alpha;
    } else {
      const filterArr =
        alpha === alpha.toUpperCase()
          ? alphaData.upperCase
          : alphaData.lowerCase;
      let index = filterArr.findIndex((item) => item === alpha);
      let shiftIndex = (index + shift) % 26;

      transResult += filterArr[shiftIndex];
    }
  });

  return transResult;
}

// FOR ASCII
// function caesarCipher(inputText, shift) {
//   let inputTextToArray = inputText.toLowerCase().split("");
//   let caesarPassword = "";

//   inputTextToArray.forEach((item) => {
//     if (item.match(/[a-zA-Z]/)) {
//       let alphabetASCII = item.charCodeAt(0);
//       alphabetASCII += shift;

//       if (alphabetASCII > "z".charCodeAt(0)) {
//         alphabetASCII -= 26;
//       } else if (alphabetASCII < "a".charCodeAt(0)) {
//         alphabetASCII += 26;
//       }

//       caesarPassword += String.fromCharCode(alphabetASCII);
//     } else {
//       caesarPassword += item;
//     }
//   });

//   return caesarPassword;
// }
