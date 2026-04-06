import diagnosesEntries from "../../data/diagnoses";
import { Diagnosis } from "../types/types";

const getEntries = (): Diagnosis[] => {
  return diagnosesEntries;
};

export default {
  getEntries,
};
