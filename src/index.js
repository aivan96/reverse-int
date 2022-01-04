module.exports = function reverse (n) {
  n = n.toString();
  let result = n.split('').reverse().join('');
  let finish = result.replace('-','');
  return finish;
}
