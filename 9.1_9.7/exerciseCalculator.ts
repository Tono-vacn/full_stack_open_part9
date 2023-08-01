
interface Result {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

const parseArguments_exe = (args: Array<string>): { dailyExerciseHours: Array<number>, target: number } => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');
  const target = Number(args[2]);
  const dailyExerciseHours = args.slice(3).map(hours => Number(hours));
  if (!isNaN(target) && dailyExerciseHours.every(hours => !isNaN(hours))) {
    return {
      target,
      dailyExerciseHours
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

const calculateExercises = (
  //dailyExerciseHours: Array<number>, target: number
  ): Result => {
  const { dailyExerciseHours, target } = parseArguments_exe(process.argv);
  const periodLength = dailyExerciseHours.length;
  const trainingDays = dailyExerciseHours.filter(hours => hours > 0).length;
  const average = dailyExerciseHours.reduce((a, b) => a + b, 0) / periodLength;
  const success = average >= target;
  const rating = success ? 3 : average >= target - 1 ? 2 : 1;
  const ratingDescription = success ? 'good' : average >= target - 1 ? 'not too bad but could be better' : 'bad';
  return { periodLength, trainingDays, success, rating, ratingDescription, target, average };
}

console.log(calculateExercises());