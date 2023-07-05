import { React, useState } from "react";
import NotesCol from "./NotesCol";
import CalendarCol from "./CalendarCol";

export default function SideBar() {
  const [ShowNotes, setShowNotes] = useState(false);
  const [ShowCalendar, setShowCalendar] = useState(false);

  const handleNotesClick = () => {
    setShowNotes(!ShowNotes);
  };
  const handleCalendarClick = () => {
    setShowCalendar(!ShowCalendar);
  };
  return (
    <>
      <div className="h-screen w-30 bg-red-900 text-slate-200">
        <ul className="flex-col-reverse">
          <button onClick={handleNotesClick}>Notes</button>
          <button onClick={handleCalendarClick}>Calendar</button>
        </ul>
      </div>
      <div className={}>{<CalendarCol />}</div>
      <div>{<NotesCol />}</div>
    </>
  );
}
