import { useParams } from "react-router-dom";
import Notes from "../../datas/notes";

const SingleNote = () => {
  const params = useParams();
  const selectedNoteID = params.id;
  const selectedNote = Notes.find((note) => note.id === selectedNoteID);
  return (
    <div className="selectedNote">
      <h1>{selectedNote.title}</h1>
      <p>{selectedNote.subtitle}</p>
    </div>

  );
};

export default SingleNote;