import React, { Component } from 'react';

export default class App extends Component {
  constructor (props) {
    super(props);

    this.state= {
      text: '',
      tasks: []
    }
  }

  handleOnChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  addItem = () => {
    let newItem = {
      text: this.state.text,
      key: Date.now()
    };
 
    this.setState((prevState) => {
      return { 
        tasks: prevState.tasks.concat(newItem),
        text: ''
      };
    });
  }

  deleteItem = key => () => {
    var filteredTasks = this.state.tasks.filter(function (task) {
      return (task.key !== key);
    });
   
    this.setState({
      tasks: filteredTasks
    });
  }
  
  render () {
    return (
      <div className="todoListMain">
        <div className="header">
          <input placeholder="enter task" value={ this.state.text } onChange={ this.handleOnChange } />
          <button onClick={ this.addItem } >add</button>
          <ul className="theList">
            {
              this.state.tasks.map( task => 
              <li onClick={ this.deleteItem(task.key) } key={ task.key } > {task.text} </li>)
              }
          </ul>
        </div>
      </div>
    );
  }
}
