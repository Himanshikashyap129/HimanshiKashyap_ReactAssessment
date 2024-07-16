import React from 'react';
import BasketballPlayerCard from './BasketballPlayerCard'; 

function App(){
  return (
    <div className="App">
      <h1>BasketBall PLayer Card</h1>
      <BasketballPlayerCard
      name="Amjyot Singh"
      image="https://images.firstpost.com/wp-content/uploads/2017/10/Amyjot-Singh-NBA-Twitter-380.jpg"
      position="Forward"
      stats={{ pointsPerGame: 25.4, assistsPerGame: 7.1, reboundsPerGame: 10.5}}
      />
    </div>
  );
} 


export default App;


