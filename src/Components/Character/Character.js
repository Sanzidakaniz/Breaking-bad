import React from 'react';
import './Character.css'
import {Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Character = (props) => {
 
    const {char_id,name,status,occupation,birthday}=props.character;
    return (
      <div>
       
        <Card className="character-card">
        <Card.Header className="character-header">{name}</Card.Header>   
        
        <Card.Body>
 
        <Card.Text>Status:{status} </Card.Text>
  <Card.Text>Occupation:{occupation} </Card.Text>
  <Card.Text>Date of Birth:{birthday}</Card.Text>
         <Link to={`/character/${char_id}`}>See details</Link>
        </Card.Body>
      </Card>
      </div>
     
    );
};

export default Character;

