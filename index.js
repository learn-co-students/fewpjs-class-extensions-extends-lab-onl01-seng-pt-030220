// Your code here
//Define a Polygon class. Polygon will accept an Array of integers as a parameter, which will represent each side of a shape.
class Polygon {
    constructor(sides) {
        this.sides = sides;
    }
//getter method countSides that counts the number of sides (each index in the array).
    get countSides() {
        return this.sides.length
    }
//getter method perimeter that calculates the sum of each side (each index in the array) of the polygon.
    get perimeter() {
        let sum = this.sides.reduce(function(total, element) {
            return element + total;
        }, 0);
        return sum;
    }
}

//Define a Triangle class that inherits from Polygon
class Triangle extends Polygon {
//getter method isValid that checks if the given 3 sides for a triangle is valid.
// a + b > c && a + c > b && c + b > a
    get isValid() {
        if ((this.countSides == 3) && ((this.sides[0] + this.sides[1]) > this.sides[2]) && ((this.sides[2] + this.sides[1]) > this.sides[0]) &&((this.sides[2] + this.sides[0]) > this.sides[1])
        ) {
            return true;
        } else { 
            return false;
        }
    }
}

//Define a Square class that inherits from Polygon
class Square extends Polygon {
//getter method isValid that checks if the given 4 sides for a square is valid
//a == b && a == c && a == d 
    get isValid() {
        if ((this.countSides == 4) && (this.sides[0] == this.sides[1]) && (this.sides[1] == this.sides[2]) && (this.sides[0] == this.sides[3])) {
            return true;
        } else {
            return false;
        }
    }
//getter method area that calculates the area of the square (a ** 2)
    get area() {
        return (this.isValid ? (this.sides[1])**2 : false)
    }
}