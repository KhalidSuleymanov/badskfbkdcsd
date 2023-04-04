//Onclick section starts

function CreditCalculator() {
  var percent = Number(document.getElementById('percent-value').value)
  var date = Number(document.getElementById('time-value').value)
  var credit = Number(document.getElementById('amount-value').value)
  var totalcredit = Number(credit * percent / 100)
  var oneMonth = (credit + totalcredit) / date;
  alert(`Amount to be paid every month : ${oneMonth}`)
}

//Onclick section ends
//=======================================================================//
//Function text change starts
function AmountCur() {
  var a = document.getElementById('range1').value
  document.getElementById('amount-value').value = a
}

function TimeCur() {
  var b = document.getElementById('range2').value
  document.getElementById('time-value').value = b
}
function PercentCur() {
  var c = document.getElementById('range3').value
  document.getElementById('percent-value').value = c
}

//Function text-change ends
//=======================================================================//
//Function range assign starts

function Amount() {
  document.getElementById('range1').value = d
  var d = document.getElementById('amount-value').value
}

function Time() {
  document.getElementById('range2').value = e
  var e = document.getElementById('time-value').value
}

function Percent() {
  var f = document.getElementById('percent-value').value
  document.getElementById('range3').value = f
}

//Function range assign ends










