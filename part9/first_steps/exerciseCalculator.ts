enum Rating {
  Bad = 1,
  Ok = 2,
  Good = 3,
}

interface MetricsResponse {
  periodLenght: number;
  trainingDays: number;
  success: Boolean;
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

const getAverage = (exercises: number[]) => {
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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1]));

console.log(calculateExercises([3, 2, 2, 4.5, 2, 3, 1]));
