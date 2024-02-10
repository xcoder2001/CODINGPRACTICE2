const {addDays} = require("date-fns");
let presentDate = new Date(2020,07,22);

let fn = (days) => {
  let result =  addDays(presentDate,days);
  return (`${result.getDate()}-${result.getMonth()+1}-${result.getFullYear()}`)
}

module.exports = fn;
