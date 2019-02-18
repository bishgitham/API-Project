function preparePizza(order, cb) {
  setTimeout(() => {
    cb(null, `a raw ${order}`);
  }, Math.random() * 500);
}

function cookPizza(rawPizza, cb) {
  if (rawPizza.slice(0, 6) !== 'a raw ')
    cb({ error: "I can't work with this filth!" });
  else
    setTimeout(() => {
      cb(null, `a hot ${rawPizza.slice(6)}`);
    }, Math.random() * 1000);
}

function boxPizza(cookedPizza, cb) {
  if (cookedPizza.slice(0, 6) !== 'a hot ') cb({ error: "I can't box this!" });
  else
    setTimeout(() => {
      cb(null, `${cookedPizza} in a well designed box`);
    }, Math.random() * 200);
}

module.exports = { preparePizza, cookPizza, boxPizza };
