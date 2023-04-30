import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Card, Button } from 'react-bootstrap';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../redux/actions';
import moment from 'moment';

const MyCard = ({ title, username, content, id, created_datetime }) => {
  const [editMode, setEditMode] = useState(false);
  const [cardTitle, setCardTitle] = useState(title);
  const [cardContent, setCardContent] = useState(content);
  const [timeAgo, setTimeAgo] = useState('');
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      const date = moment(created_datetime);
      const timeAgo = date.fromNow();
      setTimeAgo(timeAgo);
    }, 100); 

    return () => clearInterval(interval);
  }, [created_datetime]);
  
  
  const handleDelete = () => {
    
    if (window.confirm('Are you sure you want to delete this item?')) {
      
      dispatch(deleteItem(id));
      setData(data.filter(e => e.id !== id));
    }
  };
 

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    // Aqui você pode fazer a lógica para salvar as alterações no backend
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
    setCardTitle(title);
    setCardContent(content);
  };

  return (
    
    
      <Container>
      <Card>
  <Card.Header className="bg-primary text-white d-flex flex-wrap justify-content-between align-items-center header ">
    <div className="d-flex align-items-center">
      <h2 className="text-truncate text-wrap">{cardTitle}</h2>
    </div>
    <div className="d-flex align-items-center">
      {editMode ? (
        <>
          <Button variant="success" onClick={handleSave} className="mx-1">
            Save
          </Button>
          <Button variant="secondary" onClick={handleCancel} className="mx-1">
            Cancel
          </Button>
        </>
      ) : (
        <Button variant="secondary" onClick={handleEdit} className="mx-1">
          <FaEdit />
        </Button>
      )}
      <Button variant="danger" onClick={() => handleDelete()} className="mx-1">
        <FaTrash />
      </Button>
    </div>
  </Card.Header>
  <Card.Body>
    <div className="d-flex justify-content-between align-items-center mb-3">
      <Card.Title>
        <p className="username-post">@{username}</p>
      </Card.Title>
      <small>{timeAgo}</small>
    </div>
    <Card.Text>
      {editMode ? (
        <textarea value={cardContent} onChange={(e) => setCardContent(e.target.value)} />
      ) : (
        cardContent
      )}
    </Card.Text>
  </Card.Body>
</Card>
</Container>
  );
};

export default MyCard;