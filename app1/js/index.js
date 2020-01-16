var inputArr = [];

function InputItem(inputStr) {
  this.inputStr = inputStr;
  this.date = new Date();
}

function addInput() {
  var inputStr = document.getElementById('inputtest').value;

  inputArr.push(new InputItem(inputStr));

  // save the inputArr in local storage
  // convert array into string for local storage
  localStorage.setItem('inputStr', JSON.stringify(inputArr));

  displayInput2();
}

const spanMaker = inputStr => {
  const span = document.createElement('span');
  span.textContent = inputStr;
  span.setAttribute('class', 'inputStrDisplay');
  return span;
};

const displayInput = inputStr => {
  var span = spanMaker(inputStr);
  document.getElementById('divResult').appendChild(span);
};

function displayInput2() {
  document.getElementById('divResult').innerHTML = '';
  for (let i = 0; i < inputArr.length; i++) {
    displayInput(inputArr[i].inputStr);
  }
}
