import express, { Response } from "express";
import { Diagnosis } from "../types/types";

import diagnosisService from "../services/diagnosisService";

const diagnosisRouter = express.Router();

diagnosisRouter.get("/", (_req, res: Response<Diagnosis[]>) => {
  res.send(diagnosisService.getEntries());
});

export default diagnosisRouter;
