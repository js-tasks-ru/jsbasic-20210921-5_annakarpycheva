function isEmpty(schedule) {
 for (var prop in schedule){
  return false;
  }
  return true;
}

let schedule = {};
isEmpty(schedule); // true
schedule["8:30"] = "подъём";
isEmpty(schedule); // false
