const { expect } = require("chai");
const makePizzas = require("../challenges/challenge1/challenge1");

describe("makePizzas", () => {
  it("calls cb with an empty array when passed an empty order form", done => {
    makePizzas([], (err, data) => {
      expect(data).to.eql([]);
      done();
    });
  });
  it("calls cb with an array of a hot fresh pizza in a well designed box when passed a single pizza", done => {
    makePizzas(["pizza"], (err, data) => {
      expect(data).to.eql(["a hot pizza in a well designed box"]);
      done();
    });
  });
  it("calls cb with an array of multiple cooked pizzas in their original order", done => {
    const order = ["pizza", "Hawaiian", "Toscana", "Four-cheese"];
    const expected = [
      "a hot pizza in a well designed box",
      "a hot Hawaiian in a well designed box",
      "a hot Toscana in a well designed box",
      "a hot Four-cheese in a well designed box"
    ];
    makePizzas(order, (err, data) => {
      expect(data).to.eql(expected);
      done();
    });
  });
  it("doesn`t mutate the original order array", done => {
    const order = ["pizza", "Hawaiian", "Toscana", "Four-cheese"];
    const expected = ["pizza", "Hawaiian", "Toscana", "Four-cheese"];
    makePizzas(order, (err, data) => {
      expect(order).to.eql(expected);
      done();
    });
  });
});
