import React from 'react';

import ToDoForm from '../ToDoForm/ToDoForm';

import ToDo from '../ToDo/ToDo';

const App = React.createClass({
  getInitialState: function() {
    
  },
  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <ToDoForm />
        <ToDo />
      </div>
    );
  }
});

export default App;
