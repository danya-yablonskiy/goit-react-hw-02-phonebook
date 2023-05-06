import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  // Чому це не працює?
  // addContact = (name, number) => {
  //   this.state.contacts.map(contact => {
  //     if (contact.name.includes(name)) {
  //       alert('Error!');
  //       return;
  //     }
  //     this.setState({
  //       contacts: [...this.state.contacts, { id: nanoid(), name, number }],
  //     });
  //   });
  // };

  addContact = (name, number) => {
    const duplicate = this.state.contacts.find(
      contact => contact.name === name
    );
    if (duplicate) {
      alert('Error!');
      return;
    }
    this.setState({
      contacts: [...this.state.contacts, { id: nanoid(), name, number }],
    });
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  deleteContact = (id) => {
    const filterId = this.state.contacts.filter(contact => contact.id !== id);
    this.setState({
      contacts: [...filterId]
    })
  }

  render() {
    const filterName = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <label>
          Find contact by name
          <input
            type="text"
            value={this.state.filter}
            onChange={this.changeFilter}
          ></input>
        </label>
        <ul>
          {filterName.map(contact => (
            <li key={contact.id}>
              <p>
                {contact.name}: {contact.number}
              </p>
              <button
                type="button"
                onClick={() => this.deleteContact(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
