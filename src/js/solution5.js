//Bicycle triangles

function calculatePath(AB,BC,CA) {

  errorCondition = AB <= 0 || BC <= 0 || CA <= 0;
  if(errorCondition) throw "Distance cannot be negative or zero!"

  condition1 = (AB + BC) > CA;
  condition2 = (BC + CA) > AB;
  condition3 = (BC + AB) > BC;

  if(condition1 && condition2 && condition3) {
    return true;
  }

  return false;
} 

console.log(calculatePath(3, 4, 5));

