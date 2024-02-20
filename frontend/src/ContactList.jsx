import React from 'react';
import './App.css';

const ContactList = ({ contacts, updateContact, updateCallback }) => {

    const onDelete = async (id) => {
        try {
            const options = {
                method: "DELETE",
            };
            const response = await fetch(`http://127.0.0.1:5000/delete_contact/${id}`, options);
            if (response.status === 200) {
                updateCallback();
            } else {
                console.error("Failed to delete contact.");
            }
        } catch (error) {
            alert(error);
        }
    };
    
  return (
    <div>
      <h2>Contacts</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.firstName}</td> {/* Update here */}
              <td>{contact.lastName}</td> {/* Update here */}
              <td>{contact.email}</td>
              <td>
                <button onClick={()=>updateContact(contact)}>Update Contact</button>
                <button onClick = {() => onDelete(contact.id)}>Delete Contact</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;