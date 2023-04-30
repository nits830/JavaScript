const capitalize = s =>
  [...s].reduce((pre, val, idx) => (pre[idx % 2] += val.toUpperCase(), pre[+!(idx % 2)] += val, pre), [``, ``]);