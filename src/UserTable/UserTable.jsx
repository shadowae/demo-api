import { Grid, Row, Col, Table, Image, Glyphicon } from 'react-bootstrap';

import React from 'react';
import cssModule from 'react-css-modules';
import styles from './UserTable.css';
import PropTypes from 'prop-types';

import { coinList, baseAPI, limit10API, start100Limit12API } from './../utils/constant';
import mainLogo from './profile_pic.png';
import { subscribeToTimer } from './../utils/api';

class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showArray: null,
      value: '',
      data: [],
      timestamp: 'no timestamp yet',
      totalValue: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.filterFunction = this.filterFunction.bind(this);
    subscribeToTimer((err, data) => {
      // console.log(timestamp);
      // props.fetchCoinData(data);
      this.setState({
        data,
      });
    });
  }

  componentWillMount() {
    this.setState({
      showArray: coinList,
      coinList,
    });
  }

  componentDidMount() {
    // this.loadData();
  }

  // loadData() {
  //   fetch(`${baseAPI}${limit10API}`)
  //     .then(response => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       // this.setState({ data });
  //     })
  //     .catch(err => console.error(this.props.url, err.toString()));
  // }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      showArray: this.filterFunction(event.target.value),
    });
  }

  handleSubmit() {
    this.setState({
      showArray: this.filterFunction(),
    });
  }

  filterFunction(searchValue = this.state.value) {
    if (searchValue === '') {
      return this.state.userList;
    }
    const finalArray = this.state.userList.filter((object) => {
      const re = new RegExp(searchValue, 'i');
      if ((object.firstName.search(re)) >= 0) {
        return true;
      } else if ((object.lastName.search(re)) >= 0) {
        return true;
      } else if (object.userName === searchValue) {
        return true;
      } else if ((`${object.email.local}@${object.email.domain}`.search(re)) >= 0) {
        return true;
      } else if ((object.lastLogin.search(re)) >= 0) {
        return true;
      } else if ((object.signUpDate.search(re)) >= 0) {
        return true;
      } return false;
    });
    console.log('this is final array', finalArray);
    return finalArray;
  }

  render() {
    return (
      <div>
        <div className="App">
          <p className="App-intro">
          This is the timer value: {this.state.timestamp}
          </p>
        </div>
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
                  <tr>
                    <form onSubmit={this.handleSubmit}>
                      <label>
                        <Glyphicon className="glyphy-icon" glyph="search" />
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                      </label>
                    </form>
                  </tr>
                </tbody>
                <tbody>
                  {
                  // IF empty array
                  this.state.showArray.length === 0 ? <tr> No User Found! </tr> :
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
