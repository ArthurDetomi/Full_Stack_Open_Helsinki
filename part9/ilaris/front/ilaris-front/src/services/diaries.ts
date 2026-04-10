import axios from "axios";
import type { DiaryEntry } from "../types/diaries";

const baseUrl = "http://localhost:3000/api/diaries";

const getAll = async (): Promise<DiaryEntry[]> => {
  const response = await axios.get<DiaryEntry[]>(baseUrl);

  return response.data;
};

export default {
  getAll,
};
