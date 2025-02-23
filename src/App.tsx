import "./App.css";
import { Link, useNavigate, useParams } from "@tanstack/react-router";

export function Home() {
  return <Link to="/notes">Go to notes</Link>;
}

const notes = [
  {
    id: "1",
    text: "This is note 1",
  },
  {
    id: "2",
    text: "This is note 2",
  },
  {
    id: "3",
    text: "This is note 3",
  },
];

export function Notes() {
  return (
    <div>
      {notes.map((note) => (
        <Link key={note.id} to="/note/$id" params={{ id: note.id }}>
          <p>{note.text}</p>
        </Link>
      ))}
    </div>
  );
}

export function Note() {
  const { id } = useParams({ from: "/note/$id" });
  const navigate = useNavigate();

  const currentNote = notes.find((note) => note.id === id);

  if (!currentNote) {
    return <p>note not found</p>;
  }

  return (
    <div>
      <button
        onClick={() => {
          navigate({
            to: "/notes",
            replace: true,
          });
        }}
      >
        Go back
      </button>

      <p>{currentNote.text}</p>
    </div>
  );
}
