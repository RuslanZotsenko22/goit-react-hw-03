
import Contact from './Contact';

const ContactList = ({ contacts, onDeleteContact }) => (
  
 <ul>
    {contacts.map(({ id, name, number }) => (
      
      <Contact
        key={id}
        id={id}
        name={name}
        number={number} 
        onDeleteContact={onDeleteContact} />
    
      
    ))}
  </ul>
  
 
);

export default ContactList;
