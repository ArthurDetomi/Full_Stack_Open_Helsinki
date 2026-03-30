import express, { Request, Response } from "express";

import { calculateBmi } from "./bmiCalculator";
import { calculateExercises, MetricsResponse } from "./exerciseCalculator";

const app = express();

app.use(express.json());

const PORT = 3003;

app.get("/hello", (_req: Request, res: Response) => {
  res.send("Hello Full Stack");
});

app.get("/bmi", (req: Request, res: Response) => {
  const { height, weight } = req.query;

  if (!height || !weight) {
    res.send({ error: "malformatted parameters" });
    return;
  }

  const result = calculateBmi({
    weight: Number(weight),
    height: Number(height),
  });

  res.send({
    weight,
    height,
    bmi: result,
  });
});

const isNumberArray = (value: unknown): value is number[] => {
  return (
    Array.isArray(value) && value.every((item) => typeof item === "number")
  );
};

app.post("/exercises", (req: Request, res: Response) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;

  if (!daily_exercises || !target) {
    return res.status(400).json({ error: "parameters missing" });
  }

  if (!isNumberArray(daily_exercises) || typeof target !== "number") {
    return res.status(400).json({ error: "malformatted parameters" });
  }

  const result: MetricsResponse = calculateExercises(daily_exercises, target);

  return res.status(200).json(result);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
