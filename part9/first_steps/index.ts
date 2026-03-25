import express, { Request, Response } from "express";

const app = express();

const PORT = 3003;

app.get("/hello", (_req: Request, res: Response) => {
  res.send("Hello Full Stack");
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
