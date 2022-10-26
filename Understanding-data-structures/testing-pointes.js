const obj = {
  name: "Bob",
  age: 54,
};

const obj2 = obj;
obj2.name = "Jeffrey";

console.log(obj);

const obj3 = { ...obj };
obj3.age = 20;

console.log(obj);
