import { React, useContext, useEffect} from "react";
import { v4 as uuidv4 } from "uuid";
import Note from "./Note";
import { IdContext } from "../Providers/IdProvider";

export default function NotesCol() {
  
  const { updateId, notes } = useContext(IdContext);
  console.log(notes);

  useEffect(() => {
    localStorage.clear();
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])


  const handleAddPage = () => {    
    const id = uuidv4();
    updateId(id);
  };

  return (
    <>
      <aside className="h-screen w-32 bg-slate-500">
        <ul>
          {notes.map((note) => (
            <li key={note.noteId}>
              <Note id={note}/>
            </li>
          ))}
        </ul>
        <button className="absolute bottom-4" onClick={() => handleAddPage()}>
          +Add Page
        </button>
      </aside>
    </>
  );
}