import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('phoneBook/addContact', (name, number) => {
  return {
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});
const deleteContact = createAction('phoneBook/deleteContact');
const changeFilter = createAction('phoneBook/filterContacts');

export default { addContact, deleteContact, changeFilter };
