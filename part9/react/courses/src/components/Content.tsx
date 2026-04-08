interface Course {
  name: string;
  exerciseCount: number;
}

interface ContentProps {
  courses: Course[];
}

const Content = (props: ContentProps) => {
  return (
    <div>
      {props.courses.map((c, i) => (
        <p key={i}>
          {c.name} {c.exerciseCount}
        </p>
      ))}
    </div>
  );
};

export default Content;
