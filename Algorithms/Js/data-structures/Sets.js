function mySet(){
  
  var collection = [];
  
  
  this.has = function(element){
    return (collection.indexOf(element) !== -1);
  };
  
  
  this.values = function(){
    return collection;
  };


  this.add = function(element){
    if(!this.has(element)){
      collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = function(element){
    if(this.has(element)){
      index = collection.indexOf(element);
      collection.splice(index,1);
      return true;
    }
    return false;
  };

  this.size = function(){
    return collection.length;
  };

  // method will retunr the union of two sets
  this.union = function(otherSet){
    var unionSet = new Set();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach( function(e) {
      unionSet.add(e);
    });
    secondSet.forEach( function(e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  //this method will return the intersection of two sets as a new set
  this.intersection = function(otherSet){
    var intersectionSet = new Set();
    var firstSet = this.values();
    firstSet.forEach(function(e){
      if(otherSet.has(e)){
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  // this method will retunr the difference of two sets as a new set
  this.difference = function(otherSet){
    var differenceSet = new Set();
    var firstSet = this.value();
    firstSet.forEach(function(e){
      if(otherSet.has(e)){
        differenceSet.add(e)
      }
    });
    return differenceSet;
  };

  // this method will test if the set is a subset of a different set
  this.subset = function(){
    var firstSet = this.values();
    return firstSet.every(function(value){
      return otherSet.has(value);
    });
  };
}