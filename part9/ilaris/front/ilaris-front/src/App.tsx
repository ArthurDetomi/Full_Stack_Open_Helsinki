import { useEffect, useState } from "react";
import type { DiaryEntry } from "./types/diaries";

import diaryService from "./services/diaries";

const App = () => {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    const fecthData = async () => {
      const diariesData = await diaryService.getAll();

      if (diariesData) setDiaries(diariesData);
    };

    fecthData();
  }, []);

  return (
    <div>
      <h1>Diary entries</h1>
      {diaries.map((d) => (
        <div>
          <div
            style={{ fontWeight: "bold", marginTop: "20px", fontSize: "1.2em" }}
          >
            {d.date}
          </div>

          <div style={{ margin: "10px 0", fontSize: "1em" }}>
            <div>visibility: {d.visibility}</div>
            <div>weather: {d.weather}</div>
            <div>comment: {d.comment}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
