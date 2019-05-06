"use strict";
// *
//  * Расставь отсутствующие this в методах объекта account
// */

// const account = {
//   owner: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["order-1", "order-2", "order-3"],
//   changeDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost;
//     this.orders.push(order);
//   }
// };

// account.changeDiscount(0.15);
// console.log(account.discount); // 0.15

// const orders = account.getOrders();
// console.log(orders); // ['order-1', 'order-2', 'order-3']

// account.addOrder(5000, "order-4");
// console.log(account.balance); // 19000
// console.log(account.orders); // ['order-1', 'order-2', 'order-3', 'order-4']

// =================================================================================================================

function Account(login, password, type = "regular") {
  login = login;
  password = password;
  type = type;

  changePassword = function(newPassword) {
    password = newPassword;
  };

  getInfo = function() {
    console.log(`
      Login: ${login}, 
      Pass: ${password}, 
      Type: ${type}
    `);
  };
}

const account = new Account("Mango", "qwe123", "premium");

console.log(account.login); // 'Mango'
console.log(account.password); // 'qwe123'
console.log(account.type); // 'premium'

account.changePassword("asdzxc");
console.log(account.password); // 'asdzxc'

account.getInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
