function makeFriendsList(friends) {
  const list = document.createElement('ul');
  for (const name of friends) {
    const item = document.createElement('li');
    item.textContent = `${name.firstName} ${name.lastName}`;
    list.append(item);
  }
  return list;
}
