export const getFilter = state => state.contacts.filter;
export const getItems = state => state.contacts.items;

export const getVisibleContacts = state => {
  const contacts = getItems(state);
  const filter = getFilter(state);

  const normalizeFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter),
  );
};
