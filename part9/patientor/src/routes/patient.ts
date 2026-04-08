import express, { Response } from "express";
import { NonSensitivePacient } from "../types/types";

import patientService from "../services/patientService";
import toNewPatientEntry from "../../utils/utils";

const patientRouter = express.Router();

patientRouter.get("/", (_req, res: Response<NonSensitivePacient[]>) => {
  res.send(patientService.getNonSensitiveEntries());
});

patientRouter.post("/", (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);

    const addedEntry = patientService.addPatient(newPatientEntry);

    res.status(201).send(addedEntry);
  } catch (error: unknown) {
    let errorMessage = "Something went wrong :(";
    if (error instanceof Error) {
      errorMessage = "Error: " + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

export default patientRouter;
