import { z } from "zod";
import { NewPatientEntrySchema } from "../../utils/utils";

export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other",
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: Gender;
  occupation: string;
}

export type NonSensitivePacient = Omit<Patient, "ssn">;

export type NewPatientEntry = z.infer<typeof NewPatientEntrySchema>;
