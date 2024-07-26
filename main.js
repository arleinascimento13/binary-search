function sendForm(event) {
  div = document.createElement("div");

  const vetorNumber = document.querySelector("#input1").value;
  const target = Number(document.querySelector("#input2").value);
  if (target > vetorNumber) {
    alert("target value can't be higher than vector length");
  }
  let vetor = convertNumberToArray(vetorNumber);
  alert(`the index of the number is ${binarySearch(vetor, target)}`);
}

function convertNumberToArray(vetorNumber) {
  const vetor = [];
  for (let i = 1; i <= vetorNumber; i++) {
    vetor.push(i);
  }
  return vetor;
}

function binarySearch(vetor, target) {
  let start = 0;
  let end = vetor.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (start <= end) {
    //
    if (target === vetor[middle]) {
      return middle;
    }
    // if the target is higher than middle, the start will recieve middle value plus 1
    if (target > vetor[middle]) {
      start = middle + 1;
    }
    // if the target is lower than middle, the start will recieve middle value minus 1
    if (target < vetor[middle]) {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }
}