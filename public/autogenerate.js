var autoGenerate = function(listSize) {
  var emList = [];
  //create array of size listSize with 50% duplicates
  for(var i = 0; i < listSize; i+=2) {
    var dummyAddress = i + '@chefsteps.com'
    emList.push(dummyAddress, dummyAddress);
  }
  //shuffle randomly
  for(var i = 1; i < emList.length; i++) {
    var randomIndex = Math.floor(Math.random() * (i+1));
    var temp = emList[randomIndex];
    emList[randomIndex] = emList[i];
    emList[i] = temp;
  }
  return emList;
}