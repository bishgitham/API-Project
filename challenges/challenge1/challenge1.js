const { preparePizza, cookPizza, boxPizza } = require("./utils/pizzas");

function makePizzas(orderForm, cb) {
  const finalOrders = [];
  let callCount = 0; //to trace the number of times each callback has been fired
  if (orderForm.length === 0) {
    return cb(null, finalOrders);
  }

  orderForm.forEach((order, index) => {
    //using forEach instead of map/reduce
    preparePizza(order, (err, result) => {
      if (err !== null) {
        cb(err);
      } else {
        return cookPizza(result, (error, cookedResult) => {
          if (error !== null) {
            cb(error);
          } else {
            return boxPizza(cookedResult, (error, boxedResult) => {
              if (error !== null) {
                cb(error);
              } else {
                //finalOrders[index] = boxedResult;
                finalOrders[index] = boxedResult;

                if (++callCount === orderForm.length) {
                  return cb(null, finalOrders);
                }
              }
            });
          }
        });
      }
    });
  });
}
module.exports = makePizzas;

/*


if (++callCount === orderForm.length) {
return cb(null, finalOrders);



do not use map as it iteretaes every single array and gives back array
forEach?
//getAlbum getMP3 logIntoAccount example
/*const getAlbum = (songTitles, handleAlbum) => {
  const album = [];
  songTitles.forEach(songTitle => {
    getMP3(songTitle, (err, MP3) => {
      album.push(MP3);
      if (songTitles.length === album.length) handleAlbum(null, album);
    });
  });
};

all callbacks are not async */
