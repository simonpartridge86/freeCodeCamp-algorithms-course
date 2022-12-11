/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

Penny	$0.01 (PENNY)
Nickel	$0.05 (NICKEL)
Dime	$0.1 (DIME)
Quarter	$0.25 (QUARTER)
Dollar	$1 (ONE)
Five Dollars	$5 (FIVE)
Ten Dollars	$10 (TEN)
Twenty Dollars	$20 (TWENTY)
One-hundred Dollars	$100 (ONE HUNDRED)
*/

function checkCashRegister(price, cash, cid) {
  var totalChange = cash - price;
  console.log(totalChange);
  var register = {},
    change = {};

  for (const currency of cid) {
    register[currency[0]] = currency[1];
  }
  console.log(register);
  function updateChange(currency, amount) {
    console.log("updateChange run", currency, amount);
    if (change.hasOwnProperty(`${currency}`)) {
      change[`${currency}`] += amount;
    } else {
      change[`${currency}`] = amount;
    }
    totalChange -= amount;
  }

  function updateRegister(currency, amount) {
    console.log("updateRegister run", currency, amount);
    if (register[`${currency}`] > amount) {
      register[`${currency}`] -= amount;
      updateChange(currency, amount);
      if (register[`${currency}`] === 0) {
        delete register[`${currency}`];
      }
      return true;
    }
    return false;
  }

  function changeReducer(total) {
    console.log("changeReducer run", total);
    switch (true) {
      case total >= 100:
        return updateRegister("ONE HUNDRED", 100);
      case total >= 20:
        return updateRegister("TWENTY", 20);
      case total >= 10:
        return updateRegister("TEN", 10);
      case total >= 5:
        return updateRegister("FIVE", 5);
      case total >= 1:
        return updateRegister("ONE", 1);
      case total >= 0.25:
        return updateRegister("QUARTER", 0.25);
      case total >= 0.1:
        return updateRegister("DIME", Number(0.1).toFixed(2));
      case total >= 0.05:
        return updateRegister("NICKEL", 0.05);
      case total >= 0.01:
        return updateRegister("PENNY", 0.01);
      default:
        return false;
    }
  }

  while (totalChange > 0) {
    if (!changeReducer(totalChange)) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
  }

  if (Object.keys(register).length === 0) {
    return { status: "CLOSED", change: "none" };
  }

  const changeArray = Object.entries(change);

  return { status: "OPEN", change: changeArray };
}

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);
