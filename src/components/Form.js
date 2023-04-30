import React, { useState, useEffect } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../redux/actions';
import MyCard from './MyCard';
import axios from 'axios';


const FormComponent = ({  created_datetime}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  const state = useSelector((state) => state);

  const [data, setData] = useState();
  const dispatch = useDispatch();
  
  

  

  async function fetchData() {
    try {
      const response = await axios.get('https://dev.codeleap.co.uk/careers/');
      setData(response.data.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []); // novo estado global para armazenar as informações do post

  const dynamicNumber = 12345;


  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = [{
      id: Math.floor(Math.random() * dynamicNumber),
      username: state.login.username,
      created_datetime,
      title,
      content
    }, ...data];
    dispatch(addPost(newPost));
    setTitle('');
    setContent('');
    setData(newPost); 
  };
  
  return (
    <div className="form-container row">
    <Container className="container">
      <Form onSubmit={handleSubmit}>
        <h3>What's on your mind?</h3>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            minLength={2}
            required
          />
        </Form.Group>

        <Form.Group controlId="content">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            minLength={2}
            required
          />
        </Form.Group>

        <Button
          className="rounded-pill mt-4 btn-secundary"
          variant="primary"
          type="submit"
          disabled={title.length < 2 || content.length < 2}
        >
          Create
        </Button>
      </Form>
       </Container>
       <div>
      {data && data.map((item) => {
        return  <MyCard
              key={item.id}
              id={item.id}
              title={item.title}
              username={item.username}
              content={item.content}
              created_datetime={item.created_datetime}
              
            />
         
        
      })}
    </div>
       
       </div>
  );
};

export default FormComponent;