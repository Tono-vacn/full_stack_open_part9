
const parseArguments = (args: Array<string>): { height: number, weight: number } => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');
  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      weight: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

const calculateBmi = (
  // height: number, weight: number
  ): string => {
  const { height: h, weight: w } = parseArguments(process.argv);
  const bmi = h / ((w / 100) ** 2);
  if (bmi < 18.5) return 'Underweight';
  if (bmi < 25) return 'Normal (healthy weight)';
  if (bmi < 30) return 'Overweight';
  return 'Obese';
}

console.log(calculateBmi());

//console.log(calculateBmi(180, 74)); // Normal (healthy weight)