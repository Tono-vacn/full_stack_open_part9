
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
  ):string => {
    try {
      const { height, weight } = parseArguments(process.argv);
      const bmi = height / ((weight / 100) ** 2);
      if (bmi < 18.5) return 'Underweight';
      if (bmi < 25) return 'Normal (healthy weight)';
      if (bmi < 30) return 'Overweight';
      return 'Obese';
    }catch(e:unknown) {
      if (e instanceof Error)
      {
        console.log('Error, something bad happened, message: ', e.message);
      }
      console.log('Error, something bad happened, message: ', e);
      return 'Error';
    }

  // const { height: h, weight: w } = parseArguments(process.argv);
  // const bmi = h / ((w / 100) ** 2);
  // if (bmi < 18.5) return 'Underweight';
  // if (bmi < 25) return 'Normal (healthy weight)';
  // if (bmi < 30) return 'Overweight';
  // return 'Obese';
}

type Result = Number | String;

export const calculateBmiOut = (
  height: number, weight: number
  ):Result => {
    try {
      const bmi = weight / ((height/100) ** 2);
      return bmi;
      // if (bmi < 18.5) return 'Underweight';
      // if (bmi < 25) return 'Normal (healthy weight)';
      // if (bmi < 30) return 'Overweight';
      // return 'Obese';
    }catch(e:unknown) {
      if (e instanceof Error)
      {
        console.log('Error, something bad happened, message: ', e.message);
      }
      console.log('Error, something bad happened, message: ', e);
      return 'Error';
    }
}

console.log(calculateBmi());

//console.log(calculateBmi(180, 74)); // Normal (healthy weight)