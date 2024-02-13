import NewNote from "../components/NewNote";
import NotesList from "~/components/NotesList";
import { writeNotes, readNotes } from "../database/notes.server";
import type { ActionFunctionArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  useLoaderData,
  useNavigation,
  useActionData,
  Outlet,
} from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Notes" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const title = await formData.get("title");
  const body = await formData.get("note");
  const id = Math.random().toString(36).substring(7);
  if (title.length > 5 && body.length > 5) {
    await writeNotes({ title, content: body, id });
    return null;
  }
  return json({ error: "Please write a valid note" }, { status: 400 });
}

export const loader = async () => {
  async function readNotesHere() {
    const notes = await readNotes();
    return notes;
  }
  const notes = await readNotesHere();

  return { notes };
};

export default function Notes() {
  const actionData = useActionData<typeof action>();
  const data = useLoaderData<typeof loader>();
  const navigation = useNavigation();

  const parsedData = JSON.parse(data.notes);

  return (
    <main className="w-screen h-screen flex justify-center p-5 bg-slate-500 flex-col">
      <Outlet />
      <NewNote />
      {actionData?.error && <p>{actionData.error}</p>}
      {navigation.state === "loading" ? (
        <p>Loading...</p>
      ) : (
        <NotesList notes={parsedData} />
      )}
    </main>
  );
}
