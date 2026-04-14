// simple currying

function sum(a) {
  return function(b){
    return function(c){
      return function(){
        return a+b+c
      };
    }
  }
}

// console.log(sum(1)(2)(3)());


// infinte curring

function sumInfinite(a){
    return function(b){
      if(b === undefined){
        return a
      }
      return sumInfinite(a+b)
    }
}

console.log(sumInfinite(1)(2)(3)(4)(6)())
