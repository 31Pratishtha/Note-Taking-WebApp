import React, { useContext} from "react";
import { IdContext } from "../Providers/IdProvider";


export default function Note( note ) {
  const {updateSelectedNote} = useContext(IdContext);

  const handleNoteClick = () => {
    updateSelectedNote(() => note)
  };
  
  return (
    <>
      <button
        onClick={() => {
          handleNoteClick();
        }}
      >
        New Note
      </button>
    </>
  );
}
