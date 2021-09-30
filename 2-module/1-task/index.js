let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

function sumSalary(salaries) {
let sum =  salaries.Ann + salaries.John + salaries.Pete;
if (sum>0)
  return sum
   else return 0;
}
