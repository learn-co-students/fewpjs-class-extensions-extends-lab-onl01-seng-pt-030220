// Your code here

class Polygon{
    constructor(array){
        this.side = array
    }

    get countSides(){
        return this.side.length
    }

    get perimeter() {
        const sides = this.side 
        const total = sides.reduce((total, side) => total + side) 
        return total
    }


}

class Triangle extends Polygon {
    get isValid(){
      let arr = this.side;
      if (arr[0] + arr[1] > arr[2] && arr[0] + arr[2] > arr[1] && arr[1] + arr[2] > arr[0]) {
          return true
      }
      else {
          return false
      }
    }
  }

  class Square extends Polygon {

    get isValid(){
      let arr = this.side;
      if (arr[0] === arr[1] && arr[1] === arr[2] && arr[2] === arr[3]){
        return true
      } else {
        return false
      }
    }
  
    get area(){
      let arr = this.side;
      return arr[0] * arr[1]
    }
  }