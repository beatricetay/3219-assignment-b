export const reformatDateString = (s) => {
  s = s.toString();
  function z(n){return ('0' + n).slice(-2)}

  let b = s.split(/\W+/);
  let time = b[4] + ':' + b[5];
  return z(b[2]) + ' '
    + b[1].substr(0,3) + ' '
    + b[3] + ' '
    + time;
}
