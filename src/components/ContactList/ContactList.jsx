import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/actions';
import styles from './ContactList.module.css';

const ContactList = ({ onDeleteContact, visibleContacts }) => {
  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          {name}: {number}
          <button
            className={styles.btn}
            type="button"
            name={id}
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  visibleContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizeFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizeFilter),
  );
};

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  const visibleContacts = getVisibleContacts(items, filter);

  return {
    visibleContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onDeleteContact: contactId => dispatch(actions.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
