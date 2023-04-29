import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import  {addName}  from '../redux/actions';
import {  Form, Button } from 'react-bootstrap';

function Login() {
  const [name, setName] = useState('');
  const history = useHistory();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setName(newName);
    if (newName.length >= 3) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  const handleLogin = () => {
    dispatch(addName(name));
    history.push('/post');
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
    <div className="login-container p-4">
      <h2 className="text-center mb-4 title">Welcome to CodeLeap network!</h2>
      <Form>
        <Form.Group controlId="formName">
          <Form.Label>Please enter your username</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        </Form.Group>
        <Button
          variant="primary"
          onClick={handleLogin}
          disabled={isButtonDisabled}
          className="w-50 rounded-pill mt-4"
        >
          Enter
        </Button>
      </Form>
    </div>
  </div>
  );
}


export default connect(null)(Login);
