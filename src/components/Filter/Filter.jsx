import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/actions';

import styles from './Filter.module.css';

const Filter = ({ onFilter, filter }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={filter}
        onChange={onFilter}
      />
    </label>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onFilter: event => dispatch(actions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
