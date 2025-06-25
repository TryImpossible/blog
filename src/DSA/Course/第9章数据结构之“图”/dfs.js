const graph = require('./graph')

const visisted = new Set();
const dfs = (n) => {
  console.log(n);
  visisted.add(n);
  graph[n].forEach(c => {
    if (!visisted.has(c)) {
      dfs(c);
    }
  });
}

dfs(2);