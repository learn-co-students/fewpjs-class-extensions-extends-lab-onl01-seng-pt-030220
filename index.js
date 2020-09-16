// Your code here
class Polygon {
    constructor(array) {
        this.sides = array.map(x => x)
    }

    get countSides() {
        return this.sides.length
    }

    get perimeter() {
        let perimeter = 0
        this.sides.forEach(side => {perimeter += side});
        return perimeter
    }
}

class Triangle extends Polygon {
    get isValid() {
        if ((this.sides[0] + this.sides[1] > this.sides[2]) && (this.sides[1] + this.sides[2] > this.sides[0]) && (this.sides[2] + this.sides[0] > this.sides[1])) {
            return true
        } else {
            return false
        }
    }
}

class Square extends Polygon {
    get isValid() {
        let valid = true
        this.sides.forEach(side => {
            if (side != this.sides[0]) {
                valid = false
            }
        })
        return valid
    }

    get area() {
        return this.sides[0] * this.sides[1]
    }
}