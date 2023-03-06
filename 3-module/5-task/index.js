function getMinMax(str) {
  const filterStr = str.split(' ').filter(item => Number(item));
  return {
    min: Math.min(...filterStr),
    max: Math.max(...filterStr)
  };
}
