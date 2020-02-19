import React from 'react';
import { Row, Col, Card, Image, Form, Button } from 'react-bootstrap';

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blogObj: {}
        }
    }

    render() {
      return (
          <div className="admin">
              {/* <Row>
                  <Col xs="12" style={{backgroundColor:"blue", padding:"20px", color:"white"}}>
                    <h1>Administrative Panel</h1>
                  </Col>
              </Row>
              <Form>
              <Form.Group controlId="formBasicUser">
              <Row>
              <Col xs="3">


                            <Form.Label>Username: </Form.Label>


                  </Col>
                  <Col xs="6">
                  <Form.Control type="password"></Form.Control>
                  </Col>
              </Row>

              <Row>
              <Col xs="3">


                            <Form.Label>Password: </Form.Label>


                  </Col>
                  <Col xs="6">
                  <Form.Control type="password"></Form.Control>
                  </Col>
              </Row>
              </Form.Group>
              </Form> */}
              <Row>
                  <Col xs="12" style={{backgroundColor:"blue", padding:"20px", color:"white"}}>
                    <h1>Administrative Panel</h1>
                  </Col>
            </Row>

            <Form>
            <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter username" />
                <Form.Text className="text-muted">
                We'll never share your username with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
      );
  }
}
//https://calendar.google.com/calendar/embed?src=paullam328%40gmail.com&ctz=America%2FVancouver

export default Admin;