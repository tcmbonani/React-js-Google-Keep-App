import "./Notes.css";
import Note from "./Note";

export default function Notes(props) {
  const { notes, deleteNote , toggleModal, setselectedNote} = props;
  return (
    <div className="notes">
      {notes.length === 0 ? (
        <p>Notes you add appear here.</p>
      ) : (
        notes.map((note, index) => (
          <Note
            key={index}
            note={note}
            deleteNote={deleteNote}
            toggleModal={toggleModal}
            setselectedNote={setselectedNote}
          />
        ))
      )}
    </div>
  );
}
