import { Gender, NewPatientEntry } from "../src/types/types";

import { z } from "zod";

export const NewPatientEntrySchema = z.object({
  name: z.string(),
  dateOfBirth: z.string().date(),
  ssn: z.string(),
  occupation: z.string(),
  gender: z.enum(Gender),
});

export const toNewPatientEntry = (object: unknown): NewPatientEntry => {
  return NewPatientEntrySchema.parse(object);
};
