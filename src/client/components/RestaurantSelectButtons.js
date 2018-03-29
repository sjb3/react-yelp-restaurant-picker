import React, { Component } from 'react';

export default class Restaurant_select_buttons extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onRestaurantAccept} className="btn btn-success">Accept</button>
        <button onClick={this.props.onRestaurantReject} className="btn btn-danger">Reject</button>

      </div>
    );
  }
}
