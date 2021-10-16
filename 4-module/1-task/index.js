function makeFriendsList(friends) {
  let listUl = document.createElement('ul');
  for(let item of friends){
    let listLi = document.createElement('li');
    listLi.innerHTML = `${item.firstName} ${item.lastName}`;
    listUl.appendChild(listLi);
  }
  return listUl;
  }