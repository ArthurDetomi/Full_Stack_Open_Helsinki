import { NextFunction, Request, Response } from "express";

import { z } from "zod";
import { NewPatientEntrySchema } from "../utils/utils";

export const errorMiddleware = (
  error: unknown,
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (error instanceof z.ZodError) {
    res.status(400).send({ error: error.issues });
  } else {
    next(error);
  }
};

export const newPatientParser = (
  req: Request,
  _res: Response,
  next: NextFunction,
) => {
  try {
    NewPatientEntrySchema.parse(req.body);
    next();
  } catch (error) {
    next(error);
  }
};
