const graph = require('./graph')

const visisted = new Set();
visisted.add(2);
const q = [2];

while(q.length) {
  const n = q.shift();
  console.log(n)
  graph[n].forEach(c => {
    if (!visisted.has(c)) {
      q.push(c);
      visisted.add(c);
    }
  });
}