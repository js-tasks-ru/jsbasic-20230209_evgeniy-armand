function checkSpam(str) {
  let badStr = str.toLowerCase();
  if (badStr.includes('xxx') || badStr.includes('1xbet')) {
    return true;
  }
  return false;
}
