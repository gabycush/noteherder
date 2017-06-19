import React, { Component } from 'react'

import './NoteForm.css'

class NoteForm extends Component {
  constructor(props){
    super(props)
    
    if(props.currentNote != null){
      const active = props.currentNote
      this.state = {
        id: active.id,
        title: active.title,
        body: active.body,
      }
    }
    else{
      this.state = {
        note: this.blankNote()
      }
    }


  }
  blankNote = () => {
    return{
      id: null,
      title: '',
      body: '',
    }
  }

  handleChanges = (ev) => {
    const note = {...this.state.note}
    note[ev.target.name] = ev.target.value
    this.setState(
      { note },
      () => this.props.saveNote(this.state.note)
    )
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.setState({ note: this.blankNote() })
  }

  deleteNote = (ev) => {
    const note = {...this.state.note}
    this.props.deleteNote(note)
  }

  render() {
    return (
      <div className="NoteForm">
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              name="title"
              placeholder="Title your note"
              onChange={this.handleChanges}
              value={this.state.note.title}
            />
          </p>
          <p>
            <textarea
              name="body"
              placeholder="Just start typing..."
              onChange={this.handleChanges}
              value={this.state.note.body}
            ></textarea>
          </p>
          <button type="submit">Save and new</button>
          <button className="del" onClick={this.deleteNote}>Delete</button>
        </form>
      </div>
    )
  }
}

export default NoteForm
