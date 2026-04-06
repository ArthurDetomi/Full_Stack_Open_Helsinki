import express, { Response } from "express";
import { NonSensitivePacient } from "../types/types";

import patientService from "../services/patientService";

const patientRouter = express.Router();

patientRouter.get("/", (_req, res: Response<NonSensitivePacient[]>) => {
  res.send(patientService.getNonSensitiveEntries());
});

export default patientRouter;
