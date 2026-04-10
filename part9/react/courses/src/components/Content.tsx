import type { CoursePart } from "../types/courses";
import Part from "./Part";

interface ContentProps {
  courses: CoursePart[];
}

const Content = (props: ContentProps) => {
  return (
    <div>
      {props.courses.map((c, i) => (
        <Part key={i} course={c} />
      ))}
    </div>
  );
};

export default Content;
