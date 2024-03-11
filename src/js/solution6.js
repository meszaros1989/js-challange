//How about a snack?

slices = [
  { radius: 20, angle: 45, price: 10 },
  { radius: 18, angle: 40, price: 9 },
  { radius: 22, angle: 50, price: 18 }
]

function chooseMostPreferableSlice(array) {
  const calculateValue = (slice) => slice.radius * slice.angle / slice.price;

  return array.reduce((prev, curr) => {
    const prevValue = calculateValue(prev);
    const currValue = calculateValue(curr);
    return prevValue > currValue ? prev : curr;
  });
} 

console.log(chooseMostPreferableSlice(slices));
