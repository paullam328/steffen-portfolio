import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

// WIP

const Admin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admin login:', { username, password });
  };

  return (
    <div className="admin">
      <Row>
        <Col
          xs="12"
          style={{ backgroundColor: 'blue', padding: '20px', color: 'white' }}
        >
          <h1>Administrative Panel</h1>
        </Col>
      </Row>

      <Form onSubmit={handleSubmit} style={{ padding: '20px' }}>
        <Form.Group controlId="formBasicUsername" className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your username with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Admin;