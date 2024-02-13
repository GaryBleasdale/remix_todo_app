export default function NotesList({ notes }) {
  return (
    <div className="flex flex-wrap">
      {notes.notes.map((note) => {
        return (
          <div id={note.id} className="bg-slate-300 p-3 m-3 rounded-md w-[30%]">
            <a href={`/notes/${note.id}`}>View Note</a>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </div>
        );
      })}
    </div>
  );
}
