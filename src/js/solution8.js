//Dangerous barriers

const firstRoute = [
  { x: 10, y: 0 },
  { x: 0, y: 10 },
];

const secondRoute = [
  { x: 0, y: 0 },
  { x: 10, y: 10 },
];

function doHaveIntersections(route1, route2) {
  p1 = route1[0];
  p2 = route1[1];
  p3 = route2[0]; 
  p4 = route2[1];

  xOverlap = (Math.max(p1.x, p2.x) >= Math.min(p3.x, p4.x)) && (Math.min(p1.x, p2.x) <= Math.max(p3.x, p4.x));
  yOverlap = (Math.max(p1.y, p2.y) >= Math.min(p3.y, p4.y)) && (Math.min(p1.y, p2.y) <= Math.max(p3.y, p4.y));

  return xOverlap && yOverlap;
}

console.log(doHaveIntersections(firstRoute, secondRoute));

