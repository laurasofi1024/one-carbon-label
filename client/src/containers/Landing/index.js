/*import React from 'react';
import SearchBar from '../../components/SearchBar/searchBar';
 
const LandingPage = () => (
  <div>
    <h1>One Carbon Label</h1>
    <SearchBar 
       input={input} 
       onChange={updateInput}
      />
  </div>
);
 
export default LandingPage;*/
import firebase from '../../components/Firebase/firebase';
import 'firebase/firestore';
import React, { useState, useEffect } from 'react';

export const LandingPage =  () => {
  const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`/api/revies`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }})
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    return response;
                  }
                  const error = new Error(`HTTP Error ${response.statusText}`);
                  error.status = response.statusText;
                  error.response = response;
                  console.log(error);
                  throw error;
            })
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setReviews(json);
            });    
    }, []);
	
  return (
    <div>
      <h1>Reviews List</h1>
      {(reviews.length === 0) ? (<h1>Loading</h1>) : (reviews.map(review => (
        <div>
          <p>{review.id}</p>
          <h2>{review.name}</h2>
          <p>{review.co2}</p>
          <a href={`/${review._id}`}>link to </a>
        </div>
      )))} 
    </div>
   )
}