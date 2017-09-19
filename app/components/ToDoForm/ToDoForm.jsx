import React from 'react';

const ToDoForm = React.createClass({
  render: function() {
    return (
      <div>
        <form>
          <input onSubmit=''
            type='text'
            onChange=''
            placeholder='ToDo'
          />
          <input 
            type='date'
            placeholder='Date'
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
});

export default ToDoForm;
