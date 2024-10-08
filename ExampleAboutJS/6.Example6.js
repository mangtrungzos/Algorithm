const prm = Promise;

prm
  .resolve(1)
  .then((v) => {
    return v * 2;
  })
  .then((v) => {
    return prm.reject(v);
  })
  .catch((e) => {
    return "handled";
  })
  .then((v) => {
    console.log(v);
  });
