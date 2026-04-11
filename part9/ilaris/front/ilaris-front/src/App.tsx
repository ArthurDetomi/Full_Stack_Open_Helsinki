import { useEffect, useState } from "react";
import type { DiaryEntry, NewDiaryEntry } from "./types/diaries";

import diaryService from "./services/diaries";
import Header from "./components/Header";
import DiaryList from "./components/DiaryList";
import DiaryForm from "./components/DiaryForm";

const App = () => {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    const fecthData = async () => {
      const diariesData = await diaryService.getAll();

      if (diariesData) setDiaries(diariesData);
    };

    fecthData();
  }, []);

  const handleSubmitDiary = async (newDiaryEntry: NewDiaryEntry) => {
    const diary = await diaryService.createDiary(newDiaryEntry);

    setDiaries(diaries.concat(diary));
  };

  return (
    <div id="main">
      <Header title="Diary entries" />

      <DiaryForm handleSubmit={handleSubmitDiary} />

      <DiaryList diaries={diaries} />
    </div>
  );
};

export default App;
