class Polygon{
  constructor(arr){
    this.arr = arr;
  }

  get countSides(){
    return this.arr.length;
  }

  get perimeter(){
    if (!Array.isArray(this.arr)) return;

    // let per = 0;
    // for (let num of this.arr){
    //   per += num
    // }
    let per = this.arr.reduce((a,b)=>{
      return a + b
    }, 0)
    return per
  }
}



class Triangle extends Polygon{

  get isValid(){
    if (!Array.isArray(this.arr)) return;

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
    if (!Array.isArray(this.arr)) return;

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
    if (!Array.isArray(this.arr) && this.countSides !== 4) return;
    return this.arr[0] * this.arr[2]
  }
}