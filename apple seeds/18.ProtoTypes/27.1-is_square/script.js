function Square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;

    this.isSqaure = function() {
        const { a, b, c, d } = this;
        return (a == b && a == c && a == d) ? true : false;
    };
}

console.log(new Square(5, 7, 8, 10).isSqaure());
console.log(new Square(10, 10, 10, 10).isSqaure());