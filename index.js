class Polygon{
  constructor(arr){
    this.arr = arr;
  }

  get countSides(){
    return this.arr.length;
  }

  get perimeter(){
    let per = this.arr.reduce((a,b)=>{
      return a + b
    }, 0)
    return per
  }
}



class Triangle extends Polygon{

  get isValid(){
    if (this.countSides === 3){
      let sideA = this.arr[0]
      let sideB = this.arr[1]
      let sideC = this.arr[2]

      if (sideA + sideB > sideC && sideB + sideC > sideA && sideC + sideA > sideB){
        return true
      } else {
        return false
      }
    }
  }
}



class Square extends Polygon{

  get isValid(){
    if (this.countSides === 4){
      let sideA = this.arr[0]
      let sideB = this.arr[1]
      let sideC = this.arr[2]
      let sideD = this.arr[3]

      if (sideA === sideB && sideC === sideD && sideB === sideC){
        return true
      } else{
        return false
      }
    }
  }

  get area(){
    return this.arr[0] * this.arr[2]
  }
}