numbers = [1,2,3,4,5,6,7,8,9,10];
var filtered = numbers.filter(function(numi) {
return numi % 2 == 0;});

console.log(filtered);