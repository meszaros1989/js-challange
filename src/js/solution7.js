//Right on the target!

function isTargetHit(object) {
  if(Math.sqrt(Math.pow(object.x, 2) +  Math.pow(object.y, 2)) <= object.radius) {
    return true;
  }

  return false;
} 

console.log(isTargetHit({ x: 8, y: 8, radius: 5 }));
