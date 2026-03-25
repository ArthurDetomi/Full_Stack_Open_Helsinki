interface BmiValues {
  height: number;
  weight: number;
}

const calculateBmi = (bmiValues: BmiValues): string => {
  const { height, weight } = bmiValues;

  const convertedHeight: number = height / 100;

  const bmi = weight / convertedHeight ** 2;

  let response: string;

  if (bmi < 18.5) {
    response = "Underweight";
  } else if (bmi < 25) {
    response = "Normal range";
  } else if (bmi < 30) {
    response = "Overweight";
  } else {
    response = "Obese";
  }

  return response;
};

const parseArguments = (args: string[]): BmiValues => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  const height = Number(args[2]);
  const weight = Number(args[3]);
  if (!isNaN(height) && !isNaN(weight)) {
    return {
      height,
      weight,
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};

try {
  const bmiValues = parseArguments(process.argv);

  console.log(calculateBmi(bmiValues));
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
