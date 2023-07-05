import React, { createContext, useState } from "react";
import WriteArea from "../Components/WriteArea";

export const IdContext = createContext();

const IdProvider = ({ children }) => {
  const [notes, setnotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null | Object);
  
  const updateId = (id) => {
    const newnote = {
      noteId: id,
      editorId: "editor" + id,
      component: <WriteArea />,
    };
    setnotes((prevnotes) => [...prevnotes, newnote]);
  };

  const updatenotes = (storednotes) => {
    storednotes.map((oneNote) => {
      setnotes((prevnotes) => [...prevnotes, oneNote]);
    })
  }

  const updateSelectedNote = (note) => {
    setSelectedNote(note);
  };

  return (
    <IdContext.Provider
      value={{ updateId, notes, updatenotes, selectedNote, updateSelectedNote }}
    >
      {children}
    </IdContext.Provider>
  );
};

export default IdProvider;
