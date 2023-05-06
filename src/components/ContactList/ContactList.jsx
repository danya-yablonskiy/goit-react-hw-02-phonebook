export const ContactList = ({ onClick, contacts, filter }) => {
  const filterName = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul>
      {filterName.map(contact => (
        <li key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <button type="button" onClick={() => onClick(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
