import express from "express";

import cors from "cors";
const app = express();

import diagnosisRouter from "./routes/diagnosis";
import patientRouter from "./routes/patient";
import { errorMiddleware } from "./middlewares";

app.use(cors());
app.use(express.json());

app.use("/api/diagnoses", diagnosisRouter);

app.use("/api/patients", patientRouter);

app.get("/api/ping", (_req, res) => {
  res.send("pong");
});

app.use(errorMiddleware);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
