import React from 'react';

// class ToDo extends React.component {
//   render() {
//     return <h1>Hello, this is the ToDo component</h1>;
//   }
// }

const ToDo = React.createClass({
  render: function() {
    return (
      <div>
        <h1>This is the ToDo component</h1>
      </div>
    );
  }
});

export default ToDo;
