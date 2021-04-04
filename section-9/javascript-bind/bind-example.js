// Example taken from MDN page on bind()

let x = 9;

let module = {
  x: 81,
  getX: function() {
    return this.x;
  }
};
