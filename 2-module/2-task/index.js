function isEmpty(schedule) {
 for (var prop in schedule){
  return false;
  }
  return true;
}

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "подъём";
alert( isEmpty(schedule) ); // false
