class Polygon{
  constructor(numbers){
  this.sides = numbers
  }

  get countSides(){
    return this.sides.length
  }
  get perimeter(){
    return this.sides.reduce((sum, n )=> n + sum )
  }

}

class Triangle extends Polygon {
  
  get isValid(){
    let [side1, side2, side3] = this.sides
    return side1 + side2 > side3 
        && side2 + side3 > side1 
        && side1 + side3 > side2 
        && this.countSides === 3
  }
}

class Square extends Polygon {
  
  get isValid(){
    let [side1, side2, side3, side4] = this.sides
    return side1 === side2 
        && side1 === side3 
        && side1 === side4 
        && this.countSides === 4
   }

  get area(){
    let [side1, side2] = this.sides
    return side1 * side2
  }

}