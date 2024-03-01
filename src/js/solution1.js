//First, the gifts

function calculateArea(obj) {

    isObject = typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
    hasCorrectParameters = obj.w !== undefined && obj.h !== undefined && obj.l !== undefined;
    parameterIsNumber = typeof(obj.w) === 'number' && typeof(obj.h) === 'number' && typeof(obj.l) === 'number';
    parameterIsNotZero = obj.w !== 0 && obj.h !== 0 && obj.l !== 0;
    parameterIsBiggerThanZero = obj.w > 0 && obj.w > 0 && obj.w > 0;

    if(!isObject) {
        throw 'Error: input is not an object!';
    }

    if(!hasCorrectParameters) {
        throw 'Error: object has incorrect/missing parameters!';
    }

    if(!parameterIsNumber) {
        throw 'Error: object parameters are not type of number!';
    }

    if(!parameterIsNotZero) {
        throw 'Error: object parameters value cannot equal to be zero!';
    }

    if(!parameterIsBiggerThanZero) {
        throw 'Error: object parameters value must be bigger than zero!';
    }

    return 2 * (obj.w * obj.l + obj.h * obj.l + obj.h * obj.w);
}

console.log(calculateArea({ w: 2, l: 3, h: 4 }));
