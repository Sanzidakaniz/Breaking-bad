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
         <div className="row">
        <div className="detail col-lg-12 col-md-12 col-sm-12">
       <div>
<img  className="character-image" src={detail.img} alt=""/>
       </div>
      
         <div className="character-detail">
<h1>{detail.name}</h1>
<hr/>
<p>Date of Birth : {detail.birthday}</p>
<p>Occupation : {detail.occupation}</p>
<p>Status : {detail.status}</p>
<p>Nickname : {detail.nickname}</p>
<p>Portrayed By: {detail.portrayed}</p>
<p>Appearance (Season) : {detail.appearance}</p>
         </div>
         </div>
         </div>
         <div className="row">
         <div className="quote col-lg-12 col-md-12 col-sm-12" >
          <h2>Quotes By<span> {quote.author}</span></h2> 
       <hr/>
          <h2># {quote.quote}</h2>  
        </div>
        </div>
        </section>
    );
};

export default CharacterDetail;

