import { ListItem, Button, List } from './ContactList.styled';
export const ContactList = ({ onClick, contacts, filter }) => {
  const filterName = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <List>
      {filterName.map(contact => (
        <ListItem key={contact.id}>
          <p>
            {contact.name}: {contact.number}
          </p>
          <Button type="button" onClick={() => onClick(contact.id)}>
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  );
};
