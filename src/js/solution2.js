//Training schedule

function calculateTrainingTime(obj) {
    const trainingArray = [obj.start, obj.start];

    if(obj.trainingsAmount === 1) return [obj.start];
    if(obj.trainingsAmount === 2) return trainingArray;
    if(obj.start <= 0) throw 'Error! Start cannot be zero or less!';
    if(!Number.isInteger(obj.trainingsAmount)) throw 'Error! Training amount must be an integer!';

    for (let index = 2; index < obj.trainingsAmount; index++) {
        trainingArray.push(trainingArray[(trainingArray.length - 1)] + trainingArray[(trainingArray.length - 2)]);
    }

    return trainingArray;
}

console.log(calculateTrainingTime({ start: 2, trainingsAmount: 10 }));
//expect({ start: 2, trainingsAmount: 10 }).toEqual([2, 2, 4, 6, 10, 16, 26, 42, 68, 110]);
