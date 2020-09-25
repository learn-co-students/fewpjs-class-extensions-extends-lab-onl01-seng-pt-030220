// Your code here
class Polygon {
    constructor(side) {
        this.side = side
    }   
    
    get countSides() {
        return this.side.length
    };

    get perimeter() {
        const add = (a,b) => a+b;
        const sum = this.side.reduce(add);
        return sum;
    }

}

class Triangle extends Polygon {

    get isValid() {
        let a = this.side[0]
        let b = this.side[1]
        let c = this.side[2]
        return (a + b > c && b + c > a && c + a > b)
    }
}

class Square extends Polygon {

    get isValid() {
        let a = this.side[0]
        let b = this.side[1]
        let c = this.side[2]
        let d = this.side[3]
        return (a + b == c + d && a + c == d + b)
    }

    get area() {
        return this.side[0] * this.side[1]
    }
}



