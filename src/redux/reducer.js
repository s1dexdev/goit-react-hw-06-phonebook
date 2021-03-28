import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './actions';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    const isAlreadyInContacts = state.some(({ name }) => name === payload.name);

    if (isAlreadyInContacts) {
      return alert(`${payload.name} is already in contacts`);
    } else {
      return [...state, payload];
    }
  },

  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (state, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
