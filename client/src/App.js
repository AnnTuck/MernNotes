import React, { Component } from 'react';
import Form from './components/Form';
import * as $ from 'axios';
import './app.css';
import Kunote from './components/Kunote';

class App extends Component {

  state = {
    notesList: [],
    kuNotesList: [],
    newTo: '',
    newFrom: '',
    newTitle: '',
    newBody: '',
    noteUpdate: '',
    isUpdating: false,
    updateId: ''
  }

  update = (event) => {
    event.preventDefault();
    this.setState({ isUpdating: false })
    $.put(`/api/notes/${this.state.updateId}`, { content: this.state.noteUpdate })
      .then(() => {
        this.getNotes();
      })
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log("handleClick");
    $.post('/api/kudos', { title: this.state.newTitle, body: this.state.newBody, to: this.state.newTo, from: this.state.newFrom })
      .then(() => {
        this.getKuNotes();
        document.getElementById("addNote").reset();
      })
  }

  getNotes = () => {
    $.get('/api/notes')
      .then((result) => {
        this.setState({ notesList: result.data })
      })
  }
  getKuNotes = () => {
    $.get('/api/kudos')
      .then((result) => {
        this.setState({ kuNotesList: result.data })
      })
  }

  componentDidMount() {
    this.getNotes();
    this.getKuNotes();
  }

  deleteHandler = (event) => {
    $.delete(`/api/notes/${event.target.value}`)
      .then(() => {
        this.getNotes();
      })
  }


  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleBodyChange = (event) => {
    this.setState({ newBody: event.target.value })
  }

  handleUpdate = event => {
    this.setState({ noteUpdate: event.target.value })
  }

  showUpdate = (event) => {
    this.setState({ isUpdating: true, updateId: event.target.value })
  }

  render() {
    return (
      <div className="App container">
        <Form
          inputTo={this.state.newTo}
          inputFrom={this.state.newFrom}
          inputTitle={this.state.newTitle}
          inputBody={this.state.newBody}          
          changeHandler={this.handleChange}
          clickHandler={this.handleClick}
          heading='Send a Note'
        />

        {this.state.kuNotesList.map(note => (
          <Kunote
            key={note._id}
            id={note._id}
            toProp={note.to}
            fromProp={note.from}
            titleProp={note.title}
            bodyProp={note.body}
            onUpdate={this.showUpdate}
            onDelete={this.deleteHandler}
          />
        ))}






      </div>
    );
  }
}



export default App;
