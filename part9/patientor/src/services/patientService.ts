import patientEntrys from "../../data/patients";
import { NonSensitivePacient, Patient } from "../types/types";

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

export default {
  getEntries,
  getNonSensitiveEntries,
};
