// Your code here
class Polygon {

    constructor(array) {
      this.array = array;
    }
  
    get countSides() {
      return this.array.length
    }
  
    get perimeter(){
      return this.array.reduce(((sum, side) => sum + side), 0)
    }
  }

  class Triangle extends Polygon {
    get isValid(){
        let arr = this.array;
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
        let arr = this.array;
        if (arr[0] === arr[1] && arr[1] === arr[2] && arr[2] === arr[3]){
          return true
        } else {
          return false
        }
      }
    
      get area(){
        let arr = this.array;
        return arr[0] * arr[1]
      }
 } 
  