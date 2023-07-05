import React, { useEffect, useState, useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { IdContext } from "../Providers/IdProvider";

export default function WriteArea() {
  const { selectedNote } = useContext(IdContext);
  const id = selectedNote.id.editorId;
  const [value, setValue] = useState("");
  
  useEffect(() => {
    const storedValue = JSON.parse(localStorage.getItem(id));
    if(storedValue){
      setValue(storedValue)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify(value));
    console.log(id, value)
  }, [id, value]);

  return <ReactQuill id={id} theme="snow" value={value} onChange={setValue} placeholder="Express Your Brainwaves..."/>;
}
