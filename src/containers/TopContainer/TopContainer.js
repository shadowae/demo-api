import React from 'react';
import { connect } from 'react-redux';

import UserTable from './../../UserTable';
import coinOperations from './../../ducks/CoinData';
import { initTodo, updateTodo } from './../../actions';
import { stat } from 'fs';

class TopContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      TopContainer
      </div>
    );
  }
}

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
