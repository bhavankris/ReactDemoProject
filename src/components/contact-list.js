import React from 'react';

export default function ContactList({contact}){


  return (
    <div>
      <ul>
        <li key={contact._id}>{contact.name.first} {contact.name.last}</li>
      </ul>
    </div>
  )
}