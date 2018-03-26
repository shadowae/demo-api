import { Grid, Row, Col, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';
import React from 'react';
import cssModule from 'react-css-modules';
import styles from './UserTable.css';

import { coinList } from './../utils/constant';
import { subscribeToTimer } from './../utils/api';

class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    subscribeToTimer((err, data) => {
      console.log(data);
      this.setState({
        data,
      });
    });
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Grid fluid className="">
          <Row className="">
            <Col lg={12} md={12} className="userTable">
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Rank</th>
                    <th>Price in USD</th>
                    <th>Price in Bitcoin</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  // IF empty array
                  this.state.data.length === 0 ? <tr> No Data Found! </tr> :
                  // If array has object
                  this.state.data.map(item => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.symbol}</td>
                      <td>{item.rank}</td>
                      <td>{item.price_usd}</td>
                      <td>{item.price_btc}</td>
                    </tr>
                  ))
                }
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

UserTable.propTypes = {
  fetchCoinData: PropTypes.func.isRequired,
  todos: PropTypes.object.isRequired,
};

export default cssModule(UserTable, styles);
