enum Rating {
  Bad = 1,
  Ok = 2,
  Good = 3,
}

interface MetricsResponse {
  periodLenght: number;
  trainingDays: number;
  success: boolean;
  rating: Rating;
  ratingDescription: string;
  target: Rating;
  average: number;
}

const getRating = (trainingDay: number, periodLength: number): Rating => {
  if (trainingDay === periodLength) {
    return Rating.Good;
  } else if (trainingDay > periodLength - trainingDay) {
    return Rating.Ok;
  }

  return Rating.Bad;
};

const getRatingDescription = (rating: Rating): string => {
  switch (rating) {
    case Rating.Bad:
      return "That's bad, you need to try harder";
    case Rating.Good:
      return "Excelent";
    case Rating.Ok:
      return "not too bad but could be better";
  }
};

const getAverage = (exercises: number[]): number => {
  const sum = exercises.reduce((acc: number, curr: number) => {
    return acc + curr;
  }, 0);

  return sum / exercises.length;
};

const calculateExercises = (exercises: number[]): MetricsResponse => {
  const periodLenght = exercises.length;

  const trainingDays = exercises.filter((n) => n > 0).length;

  const success = periodLenght === trainingDays;

  const average = getAverage(exercises);

  const rating = getRating(trainingDays, periodLenght);

  const ratingDescription = getRatingDescription(rating);

  const TARGET = Rating.Ok;

  return {
    periodLenght,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target: TARGET,
    average,
  };
};

const parseArgs = (args: string[]): number[] => {
  if (args.length < 3) throw new Error("Not enough arguments");

  const numbers = args.slice(2).map((n) => {
    const numberConverted = Number(n);
    if (isNaN(numberConverted)) {
      throw new Error("Provided values were not numbers!");
    }
    return numberConverted;
  });

  return numbers;
};

try {
  const numbers = parseArgs(process.argv);

  console.log(calculateExercises(numbers));
} catch (error: unknown) {
  let errorMessage = "Something bad happened.";
  if (error instanceof Error) {
    errorMessage += error.message;
  }
  console.log(errorMessage);
}
