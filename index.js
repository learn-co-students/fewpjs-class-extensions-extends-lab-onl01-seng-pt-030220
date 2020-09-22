// Your code here

class Polygon {

    constructor(countSides){
      this._countSides = countSides;
    }

    get countSides(){
      return this._countSides = (this._countSides).length
    }

    get perimeter() {
      return this._countSides = this._countSides.reduce((acc,element) =>acc+element)
    }

}



class Triangle  extends Polygon {

    get isValid()
    {

      return  this. _countSides == 3 ? true:false
    }

    get perimeter() {
       if (typeof(this._countSides) === "object")
       {
       return this._countSides = this._countSides.reduce((acc,element) =>acc+element)
       }else{
        return this._countSides = this._countSides * 5
       }

    }

  }



  class Square  extends Polygon {

    get isValid()
    {
      return  this. _countSides == 4 ? true:false
    }

    get area() {

      return this._countSides = this._countSides[0] * this._countSides[1]
    }


    }
