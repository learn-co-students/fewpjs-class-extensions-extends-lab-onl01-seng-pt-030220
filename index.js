// Your code here
class Polygon{
    constructor(side) {
        this.side = side;
    }
    get countSides(){
        return this.side.length;
    }
    get perimeter(){
        const add = (a,b) => a+b;
        const sum = this.side.reduce(add);
        return sum;
    }
}
class Triangle extends Polygon{
     get isValid() {
        let side1 = this.side[0];
        let side2 = this.side[1];
        let side3 = this.side[2];
        return (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1)
    }
}
class Square extends Polygon{
    get isValid(){
        let side1 = this.side[0];
        let side2 = this.side[1];
        let side3 = this.side[2];
        let side4 = this.side[3];
        return (side1 == side2 && side1 == side3 && side1 == side4);
    }
    get area(){
        return (this.side[0] * this.side[1]);
    }
}

