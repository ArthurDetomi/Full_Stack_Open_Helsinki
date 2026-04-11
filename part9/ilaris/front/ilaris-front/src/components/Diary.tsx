import type { DiaryEntry } from "../types/diaries";

interface DiaryProps {
  diary: DiaryEntry;
}

const Diary = (props: DiaryProps) => {
  const diary = props.diary;

  return (
    <div>
      <div style={{ fontWeight: "bold", marginTop: "20px", fontSize: "1.2em" }}>
        {diary.date}
      </div>

      <div style={{ margin: "10px 0", fontSize: "1em" }}>
        <div>visibility: {diary.visibility}</div>
        <div>weather: {diary.weather}</div>
        <div>comment: {diary.comment}</div>
      </div>
    </div>
  );
};

export default Diary;
