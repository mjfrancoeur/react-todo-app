import React from 'react';

import ToDoForm from '../ToDoForm/ToDoForm';

import ToDo from '../ToDo/ToDo';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentToDo: '',
      ToDos: [],
    };
  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <ToDoForm />
        <ToDo />
      </div>
    );
  }
}

export default App;
