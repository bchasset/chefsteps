var removeDuplicates = function(addresses) {
  var addressHash = {};
  return addresses.filter(function(addr) {
    if (!addressHash[addr.toLowerCase()]) {
      addressHash[addr.toLowerCase()] = true;
      return true;
    }
  });
};