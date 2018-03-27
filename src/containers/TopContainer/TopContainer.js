import { connect } from 'react-redux';

import UserTable from './../../UserTable';
import { initTodo } from './../../actions';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  fetchCoinData: (data) => {
    // console.log('called');
    dispatch(initTodo(data));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserTable);
