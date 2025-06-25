let mySet = new Set()

mySet.add(1);
mySet.add(5);
mySet.add(5);

mySet.add('some text');

let o = {a: 1, b: 2};
mySet.add(o);
mySet.add({a: 1, b: 2});

const has = mySet.has(3);

mySet.delete(5);

for(let item of mySet) console.log(item)
for(let item of mySet.keys()) console.log(item)
for(let item of mySet.values()) console.log(item)
for(let [key, value] of mySet.entries()) console.log(key, value)

let myArr = [...mySet];
myArr = Array.from(mySet);

const mySet2 = new Set([1,2,3,4]);

const intersection = new Set([...mySet].filter(x => mySet2.has(x)));
const difference = new Set([...mySet].filter(x => !mySet2.has(x)));
