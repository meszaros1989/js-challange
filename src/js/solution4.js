//Training plan

const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const schedule = [
  ['Running', 'Plank', 'Stretching'],
  ['Plank', 'Stretching', 'Running', 'Plank'],
  ['Stretching', 'Running', 'Plank'],
];

function analyzearray(schedule) {
  const resultObject = {};

  schedule.forEach((dayEvents, dayIndex) => {
    dayEvents.forEach(event => {
      if (!resultObject[event]) {
        resultObject[event] = {};
      }
      resultObject[event][DAYS[dayIndex]] = (resultObject[event][DAYS[dayIndex]] || 0) + 1;
    });
  });

  return resultObject;
}

console.log(analyzearray(schedule));

