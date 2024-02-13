import { Form, useNavigation } from "@remix-run/react";

export default function NewNote() {
  const navigation = useNavigation();
  return (
    <div>
      <Form className="flex flex-col items-center gap-3" method="post">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" className="border-[black]" />
        <label htmlFor="note">Content</label>
        <input type="textarea" id="note" name="note" className="h-20" />
        <button
          type="submit"
          className="p-3 bg-red-300"
          disabled={navigation.state !== "idle" ? true : false}
        >
          Add Note
        </button>
      </Form>
    </div>
  );
}
