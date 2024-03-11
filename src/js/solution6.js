//How about a snack?

slices = [
  { radius: 20, angle: 45, price: 10 },
  { radius: 18, angle: 40, price: 9 },
  { radius: 22, angle: 50, price: 18 }
]

function chooseMostPreferableSlice(array) {
  const calculateValue = (slice) => slice.radius * slice.angle / slice.price;
  const calculateValueIfZero = (slice) => slice.radius * slice.angle;
  const filteredSlices = array.filter(slice => slice.price > 0);
  const zeroPricedSlices = array.filter(slice => slice.price === 0);

  if(array.length === 0) return null;
  if(zeroPricedSlices.length === 1) return zeroPricedSlices[0];
  if(zeroPricedSlices.length > 1) {
    return sliceReducer(zeroPricedSlices, calculateValueIfZero);
  }

  return sliceReducer(filteredSlices, calculateValue);
} 

function sliceReducer(array, formula) {
  return array.reduce((prev, curr) => {
    const prevValue = formula(prev);
    const currValue = formula(curr);
    return prevValue > currValue ? prev : curr;
  });
}

console.log(chooseMostPreferableSlice(slices));
