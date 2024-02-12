import fs from "fs/promises";

async function readNotes() {
  const data = await fs.readFile("notes.json", "utf8");
  return data;
}

async function writeNotes(note) {
  const notes = await readNotes();
  const json = JSON.parse(notes);
  json.notes.push(note);
  const updatedJson = JSON.stringify(json, null, 2);
  await fs.writeFile("notes.json", updatedJson); // Use await here instead of a callback
  console.log("The file has been saved!");
}

export { readNotes, writeNotes };
