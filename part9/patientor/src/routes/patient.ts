import express, { Request, Response } from "express";
import { NewPatientEntry, NonSensitivePacient, Patient } from "../types/types";

import patientService from "../services/patientService";
import { newPatientParser } from "../middlewares";

const patientRouter = express.Router();

patientRouter.get("/", (_req, res: Response<NonSensitivePacient[]>) => {
  res.send(patientService.getNonSensitiveEntries());
});

patientRouter.post(
  "/",
  newPatientParser,
  (req: Request<unknown, unknown, NewPatientEntry>, res: Response<Patient>) => {
    const addedEntry = patientService.addPatient(req.body);
    res.status(201).send(addedEntry);
  },
);

export default patientRouter;
