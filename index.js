// Your code here

// Define a Polygon class. Polygon will accept an array of integers 
//as a parameter, which will represent each side of a shape.

// Use the get keyword to make a getter method countSides that 
//counts the number of sides (each index in the array).

// Use the get keyword to make a getter method perimeter that calculates 
//the sum of each side (each index in the array) of the polygon. This method 
//will become accessible to its child classes.

class Polygon{
    constructor(arr){
        this.sides = arr
    }
      
    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this.sides.reduce(reducer)
    }
}

// Define a Triangle class that inherits from Polygon.
// It will automatically have access to count and perimeter inherited from Polygon.
// Use the get keyword to make a getter method isValid that checks if the given 
//3 sides for a triangle is valid.

class Triangle extends Polygon {
    get isValid(){
        let sides = this.sides
        if (sides[0] + sides[1] > sides[2] && sides[0] + sides[2] > sides[1] && sides[1] + sides[2] > sides[0]) {
            return true
        }
        else {
            return false
        }
        
    }
  }

class Square extends Polygon {
    // inherits constructor from Pet
    get isValid(){
        let sides = this.sides
        if (sides[0] === sides[1] && sides[1] === sides[2] && sides[2] === sides[3]){
            return true
          } else {
            return false
          }
    }
   
    get area(){
        let sides = this.sides
        return sides[0] * sides[1]
    }
  }