const users = new Array(20).fill(0).map((_, i) => {
  return {
    id: i,
    createdAt: Date.now() + i,
    email: `readycoder${i}@gmail.com`
  };
});

// simulate async db call with promise
const findUser = id =>
  new Promise((resolve, reject) => {
    const fixedId = fixId(id);
    const user = users.find(user => user.id === fixedId);
    if (user) {
      return resolve(user);
    }
    reject(new Error(`No user with id "${id}"`));
  });

// simulate async db call with promise
const deleteUser = id =>
  new Promise((resolve, reject) => {
    const fixedId = fixId(id);
    const i = users.findIndex(user => user.id === fixedId);

    if (i < 0) {
      return reject(new Error(`No user with id "${id}"`));
    }

    const u = users.splice(i, 2);
    resolve({ id });
  });

const fixId = id => Number(id);

module.exports = {
  findUser,
  deleteUser,
  fixId
};
