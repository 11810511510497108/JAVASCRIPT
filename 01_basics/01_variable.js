const accountId = 12345;
let accountEmail = "vishal@googla.com";
var accountPassword = "123";
accountCity = "Indore";

console.log(accountId);
//accountId = 123;
//console.log(accountId);

accountEmail = "vish@gmail.com";
accountPassword = "3456";
accountCity = "hedrabad";

let accountState;

 /*
Prefer not to use var
Because of issue to block scope and functiona scope
*/

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountId, accountState]);

