import NewNote from "../components/NewNote";
import { writeNotes, readNotes } from "../database/notes.server";
import type { ActionFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const title = await body.get("title");
  const note = await body.get("note");
  if (title && note) {
    await writeNotes({ title, content: note });
  }
  async function readNotesHere() {
    const notes = await readNotes();
    console.log(notes);
  }
  readNotesHere();
  return {
    redirect: "/notes",
  };
}

export const loader = async () => {
  async function readNotesHere() {
    const notes = await readNotes();
    return notes;
  }
  const notes = await readNotesHere();
  console.log(notes, "hi");
  return { notes };
};

export default function Notes() {
  const data = useLoaderData<typeof loader>();
  const parsedData = JSON.parse(data.notes);

  return (
    <main className="w-screen h-screen flex justify-center p-5 bg-slate-500 flex-col">
      <NewNote />
      <div className="flex flex-wrap">
        {parsedData.notes.map((note) => {
          return (
            <div
              key={note.id}
              className="bg-slate-300 p-3 m-3 rounded-md w-[30%]"
            >
              <h3>{note.title}</h3>
              <p>{note.content}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
