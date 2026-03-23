const calculateBmi = (height: number, weight: number): string => {
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

console.log(calculateBmi(180, 74));
