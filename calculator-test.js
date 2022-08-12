
it('should calculate the monthly rate correctly', function () {
  const newValues = {
    amount: 30000,
    years: 6,
    rate: 7
  };
  expect(calculateMonthlyPayment(newValues)).toEqual('511.47');
});


it("should return a result with 2 decimal places", function() {
  const newValues = {
    amount: 40000,
    years: 6,
    rate: 7
  };
  expect(calculateMonthlyPayment(newValues)).toEqual('681.96');
});

/// etc
