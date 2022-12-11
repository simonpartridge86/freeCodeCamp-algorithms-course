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
  function Money() {
    this["ONE HUNDRED"] = 0;
    this["TWENTY"] = 0;
    this["TEN"] = 0;
    this["FIVE"] = 0;
    this["ONE"] = 0;
    this["QUARTER"] = 0;
    this["DIME"] = 0;
    this["NICKEL"] = 0;
    this["PENNY"] = 0;
  }

  var changeObj = new Money();
  var registerObj = new Money();
  for (const currency of cid) {
    registerObj[currency[0]] = Math.ceil(currency[1] * 100);
  }
  var totalChange = Math.ceil((cash - price) * 100);

  function checkRegister(currency, amount) {
    if (registerObj[currency] >= amount) {
      registerObj[currency] -= amount;
      totalChange -= amount;
      changeObj[currency] += amount;
    } else {
      return false;
    }
    return true;
  }

  while (totalChange > 0) {
    switch (true) {
      case totalChange >= 10000:
        if (checkRegister("ONE HUNDRED", 10000)) {
          break;
        }
      case totalChange >= 2000:
        if (checkRegister("TWENTY", 2000)) {
          break;
        }
      case totalChange >= 1000:
        if (checkRegister("TEN", 1000)) {
          break;
        }
      case totalChange >= 500:
        if (checkRegister("FIVE", 500)) {
          break;
        }
      case totalChange >= 100:
        if (checkRegister("ONE", 100)) {
          break;
        }
      case totalChange >= 25:
        if (checkRegister("QUARTER", 25)) {
          break;
        }
      case totalChange >= 10:
        if (checkRegister("DIME", 10)) {
          break;
        }
      case totalChange >= 5:
        if (checkRegister("NICKEL", 5)) {
          break;
        }
      case totalChange >= 1:
        if (checkRegister("PENNY", 1)) {
          break;
        }
        return { status: "INSUFFICIENT_FUNDS", change: [] };
      default:
        break;
    }
  }

  let changeArr = Object.entries(changeObj).filter((item) => item[1] !== 0);
  changeArr.forEach((e) => (e[1] /= 100));

  if (Object.values(registerObj).every((e) => e === 0)) {
    return { status: "CLOSED", change: cid };
  } else {
    return { status: "OPEN", change: changeArr };
  }
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);

console.log(
  checkCashRegister(19.5, 20, [
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

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
