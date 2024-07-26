function sendForm() {

  // Retrieve input values from the form
  const vetorNumber = document.querySelector("#input1").value;
  const target = Number(document.querySelector("#input2").value);

  // Validate if the target value is within bounds
  if (target > vetorNumber) {
    alert("Target value can't be higher than vector length");
    return; // Exit the function if validation fails
  }

  // Convert vector length to an array of sequential numbers
  let vetor = convertNumberToArray(vetorNumber);

  // Perform binary search to find the index of the target number
  alert(`The index of the number is ${binarySearch(vetor, target)}`);
}

function convertNumberToArray(vetorNumber) {
  const vetor = [];
  
  // Populate the array with numbers from 1 to vetorNumber
  for (let i = 1; i <= vetorNumber; i++) {
    vetor.push(i);
  }
  
  return vetor;
}

function binarySearch(vetor, target) {
  let start = 0;
  let end = vetor.length - 1;
  let middle = Math.floor((start + end) / 2);

  // Binary search algorithm
  while (start <= end) {
    if (target === vetor[middle]) {
      return middle; // Target found
    }
    if (target > vetor[middle]) {
      start = middle + 1; // Target is in the right half
    } else {
      end = middle - 1; // Target is in the left half
    }
    middle = Math.floor((start + end) / 2);
  }

  return -1; // Target not found
}
