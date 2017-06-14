import React from 'react';
import './Main.css';
import Sidebar from './Sidebar';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

class Main extends React.Component{
  render(){
    return(
      <div className="Main">
        <Sidebar />
        <NoteList />
        <NoteForm />
      </div>
    )
  }
}

export default Main
