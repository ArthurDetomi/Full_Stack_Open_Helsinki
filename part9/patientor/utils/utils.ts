import { NewPatientEntry } from "../src/types/types";

const isString = (text: unknown): text is string => {
  return typeof text === "string" || text instanceof String;
};

const parseToString = (name: unknown, fieldName: string): string => {
  if (!name || !isString(name)) {
    throw new Error(`Incorrect or missing ${fieldName}`);
  }
  return name;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Incorrect or missing date: " + date);
  }
  return date;
};

const toNewPatientEntry = (object: unknown): NewPatientEntry => {
  if (!object || typeof object !== "object") {
    throw new Error("Incorrect or missing data");
  }

  if (
    "name" in object &&
    "dateOfBirth" in object &&
    "ssn" in object &&
    "gender" in object &&
    "occupation" in object
  ) {
    const newEntry: NewPatientEntry = {
      name: parseToString(object.name, "name"),
      dateOfBirth: parseDate(object.dateOfBirth),
      ssn: parseToString(object.ssn, "ssn"),
      occupation: parseToString(object.occupation, "occupation"),
      gender: parseToString(object.gender, "gender"),
    };

    return newEntry;
  }

  throw new Error("Incorrect data: some fields are missing");
};

export default toNewPatientEntry;
