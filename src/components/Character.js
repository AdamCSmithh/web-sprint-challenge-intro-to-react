// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const CharacterCard = styled.div`
    background-color: rgba(122, 122, 122, 0.5);
    box-shadow: rgba(252, 249, 232, 0.3) 0px 3px 8px;
    border: 5px solid black;
    width: 50%;
    padding-bottom: 5px;
    margin: 40px auto;
    transition: transform .3s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
    
`
const Name = styled.h1`
    font-size: 2em;
    color: #e4e3e3;
    
    
`
const Info = styled.p`
    font-size: 1em;
    font-weight: bold;
    
`

// Write your Character component here
const Character = (props) => {
    const {characters} = props;
    console.log(props);
return (
    <div>
    {characters.map((char, i) => {
        return ( 
        <CharacterCard key = {i}> 
            <Name>{char.name}</Name>
            <Info>Birth Year: {char.birth_year}</Info>
            <Info>Gender: {char.gender}</Info>
            <Info>Height: {char.height}</Info>
            <Info>Hair Color: {char.hair_color}</Info>

        </CharacterCard>
        )
})}
</div>
)}

export default Character 