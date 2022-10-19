// 1 task

const arr = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7];
const uniqueValues = [...new Set(arr)];

console.log(uniqueValues);

// 2 task

const obj1 = {
  id: 1,
  name: 'userName',
};

const obj2 = {
  id: 1,
  password: 'qwerty',
};

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

// 3 task

// Function Declaration
const add = function add(x, y) {
  return x + y;
};

add(1, 2);

// Function Expression
const addArrow = (x, y) => x + y;

addArrow(1, 2);

// 4 task

const sleep = async (ms) => {
  const promise = await new Promise((resolve) => {
    (() => {
      setTimeout(resolve, ms);
    })();
  });

  return promise;
};

sleep(5000).then(() => {
  console.log('Выполнилось через 5 секунд!');
});
