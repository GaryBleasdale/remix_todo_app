import { readNotes } from "~/database/notes.server";
import { useLoaderData } from "@remix-run/react";
import type { MetaFunction } from "@remix-run/node";

export async function loader({ params }: LoaderFunctionArgs) {
  const notes = await readNotes();
  console.log(typeof notes);
  const parsedNotes = JSON.parse(notes);
  console.log(parsedNotes);
  const note = parsedNotes.notes.find((note) => note.id === params.id);
  return note;
}

export const meta: MetaFunction = ({ params }) => {
  return [
    { title: `Notes ${params.id}` },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function FullNote() {
  const note = useLoaderData();
  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
    </div>
  );
}
