import { useState } from "react";
import type { NewDiaryEntry, Visibility, Weather } from "../types/diaries";

import axios from "axios";

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

  const [error, setError] = useState<string | null>(null);

  const { handleSubmit } = props;

  const handleSubmitDiary = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      await handleSubmit(diary);

      setDiary({ date: "", visibility: "", weather: "", comment: "" });

      setError(null);
    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        setError("Error: " + e.response?.data?.error[1]?.message);
      }
    }
  };

  const handleChangeVisibility = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDiary({
      ...diary,
      visibility: event.target.value as Visibility,
    });
  };

  const handleChangeWeather = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiary({
      ...diary,
      weather: event.target.value as Weather,
    });
  };

  return (
    <>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmitDiary}>
        <div>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={diary.date}
            min="2018-01-01"
            max="2018-12-31"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setDiary({
                ...diary,
                date: event.target.value,
              });
            }}
          />
        </div>
        <div>
          <fieldset>
            <legend>visibility:</legend>

            <div>
              <input
                type="radio"
                id="great"
                name="visibility"
                value="great"
                checked={diary.visibility === "great"}
                onChange={handleChangeVisibility}
              />
              <label htmlFor="great">great</label>
            </div>

            <div>
              <input
                type="radio"
                id="good"
                name="visibility"
                value="good"
                checked={diary.visibility === "good"}
                onChange={handleChangeVisibility}
              />
              <label htmlFor="good">good</label>
            </div>

            <div>
              <input
                type="radio"
                id="ok"
                name="visibility"
                value="ok"
                checked={diary.visibility === "ok"}
                onChange={handleChangeVisibility}
              />
              <label htmlFor="ok">ok</label>
            </div>

            <div>
              <input
                type="radio"
                id="poor"
                name="visibility"
                value="poor"
                checked={diary.visibility === "poor"}
                onChange={handleChangeVisibility}
              />
              <label htmlFor="poor">poor</label>
            </div>
          </fieldset>
        </div>

        <div>
          <fieldset>
            <legend>weather:</legend>

            <div>
              <input
                type="radio"
                id="sunny"
                name="weather"
                value="sunny"
                checked={diary.weather === "sunny"}
                onChange={handleChangeWeather}
              />
              <label htmlFor="sunny">sunny</label>
            </div>

            <div>
              <input
                type="radio"
                id="rainy"
                name="weather"
                value="rainy"
                checked={diary.weather === "rainy"}
                onChange={handleChangeWeather}
              />
              <label htmlFor="rainy">rainy</label>
            </div>

            <div>
              <input
                type="radio"
                id="cloudy"
                name="weather"
                value="cloudy"
                checked={diary.weather === "cloudy"}
                onChange={handleChangeWeather}
              />
              <label htmlFor="cloudy">cloudy</label>
            </div>

            <div>
              <input
                type="radio"
                id="stormy"
                name="weather"
                value="stormy"
                checked={diary.weather === "stormy"}
                onChange={handleChangeWeather}
              />
              <label htmlFor="stormy">stormy</label>
            </div>

            <div>
              <input
                type="radio"
                id="windy"
                name="weather"
                value="windy"
                checked={diary.weather === "windy"}
                onChange={handleChangeWeather}
              />
              <label htmlFor="windy">windy</label>
            </div>
          </fieldset>
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
    </>
  );
};

export default DiaryForm;
