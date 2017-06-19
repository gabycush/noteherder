import React from 'react';
import './Main.css';
import Sidebar from './Sidebar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

const Main = (props) => {
    return(
      <div className="Main">
        <Sidebar />
        <NoteList notes={props.notes} toggleCurrent={props.toggleCurrent} />
        <NoteForm currentNote={props.currentNote} saveNote={props.saveNote} deleteNote={props.delNote} />
      </div>
    )
}

export default Main
