import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Button
} from 'react-bootstrap';

import '../CSS/CardNav.css';

class CardNav extends Component {
  render() {
    return (
      <div className="CardNav">
        <Link to={this.props.linkTarget ? this.props.linkTarget : "/"}>
          <Card>
            <Card.Body className="d-flex flex-column">
              <Card.Title>{this.props.title ? this.props.title : ""}</Card.Title>
              <Card.Text>{this.props.text ? this.props.text : ""}</Card.Text>
              <Button variant="primary">{this.props.linkText ? this.props.linkText : "Go"}</Button>
            </Card.Body>
          </Card>
        </Link>
      </div>
    )
  }
}
export default CardNav;