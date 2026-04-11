import type { DiaryEntry } from "../types/diaries";
import Diary from "./Diary";

interface DiaryListProps {
  diaries: DiaryEntry[];
}

const DiaryList = (props: DiaryListProps) => {
  return (
    <div>
      {props.diaries.map((diary) => (
        <Diary key={diary.id} diary={diary} />
      ))}
    </div>
  );
};

export default DiaryList;
