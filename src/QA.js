import React, { Component } from 'react';

class QA extends Component {

  constructor(props) {
    super(props);

    this.state = {
      edit: false,
      id: null,
      Data: [{
        id: '1',
        title: 'Queres que te cuente el cuento de la buena pipa?',
        answer: 'No',
        done: false,
        date: new Date()
      }, {
        id: '2',
        title: 'Que gusto tiene la sal?',
        answer: 'Salada',
        done: false,
        date: new Date()
      }]
    }
  }

  onSubmitHandle(event) {
    event.preventDefault();

    this.setState({
      Data: [...this.state.Data, {
        id: Date.now(),
        title: event.target.item.value,
        answer: event.target.answer.value,
        done: false,
        date: new Date()
      }]
    });

    event.target.item.value = '';
  }

  onDeleteHandle() {
    let id = arguments[0];

    this.setState({
      Data: this.state.Data.filter(item => {
        if (item.id !== id) {
          return item;
        }
      })
    });
  }

  onEditHandle(event) {
    this.setState({
      edit: true,
      id: arguments[0],
      title: arguments[1],
      answer: arguments[1]
    });
  }

  onUpdateHandle(event) {
    event.preventDefault();

    this.setState({
      Data: this.state.Data.map(item => {
        if (item.id === this.state.id) {
          item['title'] = event.target.updatedItem.value;
          return item;
        }

        return item;
      })
    });

    this.setState({
      edit: false
    });
  }

  onCompleteHandle() {
    let id = arguments[0];

    this.setState({
      Data: this.state.Data.map(item => {
        if (item.id === id) {
          item['done'] = true;
          return item;
        }

        return item;
      })
    });
  }

  renderEditForm() {
    if (this.state.edit) {
      return <form onSubmit={this.onUpdateHandle.bind(this)}>
        <input type="text" name="updatedItem" className="item" defaultValue={this.state.title} placeholder="Pregunta" />
        <input type="text" name="updatedItem" className="item" defaultValue={this.state.answer} placeholder="Respuesta" />
        <button className="update-add-item">Update</button>
      </form>
    }
  }

  render() {
    return (
      <div>
        {this.renderEditForm()}
        <form onSubmit={this.onSubmitHandle.bind(this)}>
          <input type="text" name="item" className="item" />
          <input type="text" name="answer" className="item" />
          <button className="btn-add-item">Add</button>
        </form>
        <ul>
          {this.state.Data.map(item => (
            <li key={item.id} className={ item.done ? 'done' : 'hidden' }>
              {item.title}<br />{item.answer}
              <button onClick={this.onDeleteHandle.bind(this, item.id)}>X</button>
              <button onClick={this.onEditHandle.bind(this, item.id, item.title)}>Edit</button><br />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default QA;
