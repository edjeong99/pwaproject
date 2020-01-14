//alert('JS working');

var inputArr = [];

function InputItem(inputStr) {
  this.inputStr = inputStr;
  this.date = new Date();
}

function addInput() {
  //     document.getElementById('divResult').innerHTML = document.getElementById(
  //     'inputtest'
  //   ).value;

  var inputStr = document.getElementById('inputtest').value;

  spanMaker(inputStr);

  inputArr.push(new InputItem(inputStr));

  // save the inputArr in local storage
  // convert array into string for local storage
  localStorage.setItem('inputStr', JSON.stringify(inputArr));
}

const spanMaker = inputStr => {
  const span = document.createElement('span');
  span.textContent = inputStr;
  span.setAttribute('class', 'inputStrDisplay');
  document.getElementById('divResult').appendChild(span);
};
