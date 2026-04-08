import patientEntrys from "../../data/patients";
import { NewPatientEntry, NonSensitivePacient, Patient } from "../types/types";

import { v1 as uuid } from "uuid";

const getEntries = (): Patient[] => {
  return patientEntrys;
};

const getNonSensitiveEntries = (): NonSensitivePacient[] => {
  return patientEntrys.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = (entry: NewPatientEntry): Patient => {
  const newPatient = {
    id: uuid(),
    ...entry,
  };

  patientEntrys.push(newPatient);

  return newPatient;
};

export default {
  getEntries,
  getNonSensitiveEntries,
  addPatient,
};
