import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CharacterDetail.css';


const CharacterDetail = () => {
    const {CharacterId}= useParams();
    const [detail, setDetail] = useState([]);
    const [quote, setQuote] = useState([]);
 

    useEffect(() => {
        const url = `https://breakingbadapi.com/api/characters/${CharacterId}`;

        fetch(url)
            .then(res => res.json())
            .then(data =>setDetail(data[0]));
    }, []);

    // Quote data Fetch

    useEffect(() => {
        const url = `https://breakingbadapi.com/api/quotes/${CharacterId}`;

        fetch(url)
            .then(res => res.json())
            .then(data =>setQuote(data[0]));
    }, []);

  

    return (
       <section>
        <div className="detail">
       <div>
<img  className="character-image" src={detail.img} alt=""/>
       </div>
      
         <div className="character-detail">
<h1>{detail.name}</h1>
<p>{detail.birthday}</p>
<p>{detail.occupation}</p>
<p>{detail.status}</p>
<p>{detail.nickname}</p>
<p>{detail.portrayed}</p>
<p>{detail.appearance}</p>
         </div>
         </div>

         <div className="quote" >
          <h1>Quotes By {quote.author}</h1> 
          <h2>{quote.quote}</h2>  
        </div>
        </section>
    );
};

export default CharacterDetail;

{/* <Card style={{ height:'400px',width:'300px',margin:'20px'}}>
<Card.Img className="char-image" src={detail.img} />
<Card.Body>
  <Card.Title>{detail.name}</Card.Title>
  <Card.Text>{detail.birthday}</Card.Text>
  <Card.Text>{detail.occupation}</Card.Text>
  <Card.Text>{detail.status}</Card.Text>
  <Card.Text>{detail.nickname}</Card.Text>
  <Card.Text>{detail.portrayed}</Card.Text>
  <Card.Text>{detail.appearance}</Card.Text>
 
</Card.Body>
</Card> */}