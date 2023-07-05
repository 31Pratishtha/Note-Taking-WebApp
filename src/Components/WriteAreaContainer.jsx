import React, { useContext } from "react";
import { IdContext } from "../Providers/IdProvider";

export default function WriteAreaContainer() {
  const {selectedNote} = useContext(IdContext);

  const Editor = () => (
    selectedNote.id.component
  );
  return (
    <div className="bg-slate-400 w-full">
      {selectedNote ? <Editor /> : null}
    </div>
  );
}
