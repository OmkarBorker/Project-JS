import React, { Component } from "react";

import "./DisplayList.css";


class DisplayList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { items, onCheck } = this.props;
  
    return (
      <div className="tasks">
        <h1>Video List</h1>
  
        {items.map((item, key) => (
          <div key={key} onClick={() => this.openModal(item.link)}>
            <label htmlFor={`label-${key}`}>
              <h3>{item.todoname}</h3>
              <p>{item.bucketname}</p>
              <span></span>
              <i className="fa fa-edit" onClick={() => this.props.onEditTodo(key, item.id)}></i>
              <i className="fa fa-trash" onClick={() => this.props.onDeleteTodo(key)}></i>
            </label>
          </div>
        ))}
  
        {this.state.showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close-button" onClick={this.closeModal}>
                &times;
              </span>
              <iframe src={this.state.modalLink}></iframe>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default DisplayList;
