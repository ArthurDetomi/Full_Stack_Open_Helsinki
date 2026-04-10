import type { CoursePart } from "../types/courses";
import { assertNever } from "../utils";

interface PartProps {
  course: CoursePart;
}

const Part = ({ course }: PartProps) => {
  switch (course.kind) {
    case "basic":
      return (
        <div>
          <b>
            {course.name} {course.exerciseCount}
          </b>
          <br />
          <i>{course.description}</i>
        </div>
      );
    case "background":
      return (
        <div>
          <b>
            {course.name} {course.exerciseCount}
          </b>
          <br />
          <i>Description: {course.description}</i>
          <br />
          <i>Background: {course.backgroundMaterial}</i>
        </div>
      );
    case "group":
      return (
        <div>
          <b>
            {course.name} {course.exerciseCount}
          </b>
          <br />
          <i>Group: {course.groupProjectCount}</i>
        </div>
      );
    case "special":
      return (
        <div>
          <b>
            {course.name} {course.exerciseCount}
          </b>
          <br />
          <i>{course.description}</i>
          <br />
          required: {course.requirements.toString()}
        </div>
      );
    default:
      assertNever(course);
      break;
  }
};

export default Part;
