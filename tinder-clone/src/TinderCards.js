import React, { useEffect, useState } from 'react';
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import axios from "./axios"

export default function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get("/tinder/cards");
            
            setPeople(req.data);
        };
        fetchData();
    },[])

    return (
        <div className='tinderCards-body'>
            <div className="tinderCards-Container">
                {people.map((character) => (
                    <TinderCard
                        className='swipe'
                        key={character.name}
                        preventSwipe={["up", "down"]}
                        // onSwipe={(dir) => swiped(dir, character.name)}
                        // onCardLeftScreen={() => outOfFrame(character.name)}
                    >
                        <div className='card' style={{ backgroundImage: "url(" + character.ImgUrl + ")" }}>
                            <h3>{character.name}</h3>
                        </div>
                    </TinderCard>

                )
                )}
            </div>
        </div>
    )
}
