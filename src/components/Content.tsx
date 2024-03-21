import { CoursePart as CourseType } from "../types";

interface PartProp {
  part: CourseType;
}

const Part = (props: PartProp) => {
  const style = {
    padding: 10,
  };
  const part = props.part;
  switch (part.kind) {
    case "basic":
      return (
        <div style={style}>
          <div style={{ fontWeight: 'bold' }}>{part.name} {part.exerciseCount}</div>
          <li>{part.description}</li>
        </div>
      );
    case "group":
      return (
        <div style={style}>
          <div style={{ fontWeight: "bold" }}>
            {part.name} {part.exerciseCount}
          </div>
          Group exercises: {part.groupProjectCount}
        </div>
      );
    case "background":
      return (
        <div style={style}>
          <div style={{ fontWeight: "bold" }}>
            {part.name} {part.exerciseCount}
          </div>
          <li>{part.description}</li>
          Material: {part.backgroundMaterial}
        </div>
      );
    case "special":
      return (
        <div style={style}>
          <div style={{ fontWeight: "bold" }}>
            {part.name} {part.exerciseCount}
          </div>
          <li>{part.description}</li>
          <div>
            Requirements:{" "}
            {part.requirements.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </div>
        </div>
      );
    default:
      break;
  }
};

interface ContentProps {
  parts: CourseType[];
}
export const Content = (props: ContentProps) => {
  return (
    <div>
      {props.parts.map((part) => (
        <Part key={part.name} part={part} />
      ))}
    </div>
  );
};
