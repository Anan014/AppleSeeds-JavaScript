const person1 = { name: "Anan" }
const person2 = { name: "Adeeb" }
const person3 = { name: "Itay" }

const newMap = new Map();
newMap.set(person1, 'id1');
newMap.set(person2, 'id2');
newMap.set(person3, 'id3');
console.log(newMap);

for (const [key, id] of newMap) {
    console.log(key.name, id);
}