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
  inputArr.push(new InputItem(inputStr));
  //alert(inputArr[inputArr.length - 1].inputStr);

  var node = document.createElement('span');
  node.innerHTML = inputStr;
  node.setAttribute('class', 'inputStrDisplay');
  document.getElementById('divResult').appendChild(node);
}
