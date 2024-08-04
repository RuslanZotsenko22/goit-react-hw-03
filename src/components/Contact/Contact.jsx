import css from './Contact.module.css';
import { ImPhone, ImUser  } from "react-icons/im";



const Contact = ({ id, name, number, onDeleteContact }) => (
  <li className={css.contact}>
    <p> < ImUser size="16"/> {name}</p>
    <p> < ImPhone size="16"/> {number}</p>
    <button className={css.deleteBtn} onClick={() => onDeleteContact(id)}>Delete</button>
  </li>
);

export default Contact;




//

// function Contact({ contact }) {
//   return (
//     <div className="contact-item">
//       <div className='contactGrit'>
//         <div>
//         <span role="img" aria-label="contact">
//           👤
//         </span>{' '}
//         {contact.name}
//       </div>
//       <div>
//         <span role="img" aria-label="phone">
//           📞
//         </span>{' '}
//         {contact.number}
//       </div></div>
      
//     <button className='contackButton'>Delete</button>
      
//     </div>
//   );
// }

// export default Contact;
