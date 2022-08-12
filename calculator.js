window.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById("loan-amount").value,
    rate: +document.getElementById("loan-rate").value,
    years: +document.getElementById("loan-years").value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const defaultValues = { amount: 20000, years: 6, rate: 7 };
  const amtInput = document.getElementById("loan-amount");
  const yrsInput = document.getElementById("loan-years");
  const rtInput = document.getElementById("loan-rate");
  amtInput.value = defaultValues.amount;
  yrsInput.value = defaultValues.years;
  rtInput.value = defaultValues.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const newValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(newValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const P = values.amount;
  const i = (values.rate / 100) / 12;
  const n = Math.floor(values.years * 12);
  const total = (P * i) / (1 - Math.pow((1 + i), -n));
   return total.toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPymnt = document.getElementById("monthly-payment");
  monthlyPymnt.innerText = `$${monthly}`;
}
