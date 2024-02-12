export default function NewNote() {
  return (
    <div>
      <form className="flex flex-col items-center gap-3" method="post">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" className="border-[black]" />
        <label htmlFor="note">Content</label>
        <input type="textarea" id="note" name="note" className="h-20" />
        <button type="submit" className="p-3 bg-red-300">
          Add Note
        </button>
      </form>
    </div>
  );
}
