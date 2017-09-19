import React from 'react';

class ToDoForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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
}

export default ToDoForm;
