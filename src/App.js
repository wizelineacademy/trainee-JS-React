import React, { Component } from 'react';

export default class App extends Component {
  render () {
    return (
      <div className="todoListMain">
        <div className="header">
          <input placeholder="enter task" />
          <button >add</button>
          <ul className="theList">
            <li>task 1</li>
            <li>task 2</li>
            <li>task 3</li>
          </ul>
        </div>
      </div>
    );
  }
}