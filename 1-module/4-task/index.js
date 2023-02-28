function checkSpam(str) {
  let badStr = str.toLowerCase();
  let checkBadStr = badStr.includes('xxx') || badStr.includes('1xbet');

  return checkBadStr ? true : false;
}
