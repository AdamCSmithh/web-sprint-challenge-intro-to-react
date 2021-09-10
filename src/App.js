import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import Character from './components/Character';

const Header = styled.h1`
  font-size: 5em;
  color: white;
`
const Background = styled.div`
    padding: 20px;  
`



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
        .get("https://swapi.dev/api/people")
        .then(resp => {
          setCharacters(resp.data);
          console.log(resp.data)
        })
        .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Background>
      <Header className="Header">Star Wars Characters</Header>
        <Character characters={characters} />
      </Background>
    </div>
  );
}

export default App;
