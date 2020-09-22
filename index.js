// Your code here

class Polygon {

    constructor(sides){
      this.sides = sides
      this.count =this.sides.length
    }

    get countSides(){
      return (this.sides).length
    }

    get perimeter() {
      return this.sides = this.sides.reduce((acc,element) =>acc+element)
    }

}



class Triangle  extends Polygon {

    get isValid()
    {

      return  ((this.sides[0] + this.sides[1]) > (this.sides[2]) && (this.sides[0] + this.sides[2]) > this.sides[1] &&
       (this.sides[1] + this.sides[2]) > this.sides[0] && (this.sides[0] + this.sides[2]) > this.sides[1])

    }

    get perimeter() {
       if (typeof(this.sides) === "object")
       {
        return this.sides = this.sides.reduce((acc,element) =>acc+element)
       }else{
        return this.sides= this.sides * 5
       }

    }

  }



  class Square  extends Polygon {

    get isValid()
    {
      return  ((this.sides[0] == this.sides[1]) && (this.sides[2] == this.sides[3]) &&
       (this.sides[0] == this.sides[3]))
    }

    get area() {
      return this.sides = this.sides[0] * this.sides[1]
    }


    }
