import React, { useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav'

function App () {
  const example = {
    name: 'Morty Smith',
    species: 'Human',
    gender: 'Male',
    image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
 };

  const [characters, setCharacters] = useState([example])

  // const onSearch = () => {
  //   setCharacters(...characters, [])
  // }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        <Nav
        characters={characters} 
        onSearch={() => {
          onSearch()
        }}/>
      </div>
      <div>
         <Cards
          characters={characters}
        /> 
      </div>
    </div>
  )
}

export default App
