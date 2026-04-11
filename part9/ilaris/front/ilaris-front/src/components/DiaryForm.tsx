import { useState } from "react";
import type {
  DiaryEntry,
  NewDiaryEntry,
  Visibility,
  Weather,
} from "../types/diaries";

interface DiaryFormProps {
  handleSubmit: (newDiaryEntry: NewDiaryEntry) => Promise<void>;
}

const DiaryForm = (props: DiaryFormProps) => {
  const [diary, setDiary] = useState<NewDiaryEntry>({
    date: "",
    visibility: "",
    weather: "",
    comment: "",
  });

  const { handleSubmit } = props;

  const handleSubmitDiary = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      await handleSubmit(diary);

      setDiary({ date: "", visibility: "", weather: "", comment: "" });
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.error(e.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmitDiary}>
      <div>
        <label htmlFor="date">date</label>
        <input
          type="text"
          id="date"
          value={diary.date}
          name="date"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDiary({
              ...diary,
              date: event.target.value,
            });
          }}
        />
      </div>
      <div>
        <label htmlFor="visibility">visibility</label>
        <input
          type="text"
          id="visibility"
          value={diary.visibility}
          name="visibility"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDiary({
              ...diary,
              visibility: event.target.value as Visibility,
            });
          }}
        />
      </div>
      <div>
        <label htmlFor="weather">weather</label>
        <input
          type="text"
          id="weather"
          value={diary.weather}
          name="weather"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDiary({
              ...diary,
              weather: event.target.value as Weather,
            });
          }}
        />
      </div>
      <div>
        <label htmlFor="comment">comment</label>
        <input
          type="text"
          id="comment"
          name="comment"
          value={diary.comment}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setDiary({
              ...diary,
              comment: event.target.value,
            });
          }}
        />
      </div>

      <button type="submit">add</button>
    </form>
  );
};

export default DiaryForm;
