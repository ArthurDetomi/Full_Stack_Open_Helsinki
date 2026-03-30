import express, { Request, Response } from "express";

import { calculateBmi } from "./bmiCalculator";

const app = express();

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

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
